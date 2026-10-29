"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, type FormEvent } from "react";
import { BlueprintCard } from "@/components/blueprint-card";
import { ArrowIcon, BookmarkIcon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { useSavedList } from "@/components/saved-list-provider";
import { blueprints } from "@/lib/blueprints";

export function SavedView() {
  const { t } = useLocale();
  const { data: session, status } = useSession();
  const { saved, ready, clear, contributions } = useSavedList();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const items = saved
    .map((slug) => blueprints.find((b) => b.slug === slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const onSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setError(null);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/saved",
    });
    setPending(false);
    if (result?.error) setError(t.auth.failed);
  };

  return (
    <>
      <PageBanner
        image="/images/home-make.jpg"
        eyebrow={t.saved.eyebrow}
        title={t.saved.title}
        lead={t.saved.lead}
      />

      <section className="bg-white py-70">
        <div className="shell grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div className="min-w-0">
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="section-title">{t.saved.title}</h2>
                {items.length > 0 ? (
                  <button
                    type="button"
                    onClick={clear}
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-slate-2 underline"
                  >
                    {t.saved.removeAll}
                  </button>
                ) : null}
              </div>
            </Reveal>

            {!ready ? (
              <p className="mt-8 text-[15px] text-body">{t.common.loading}...</p>
            ) : items.length === 0 ? (
              <Reveal className="mt-8">
                <div className="rounded-[20px] bg-mist p-8 text-center">
                  <span className="icon-badge">
                    <BookmarkIcon width={26} height={26} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">
                    {t.saved.emptyTitle}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-[15px] text-body">
                    {t.saved.emptyText}
                  </p>
                  <Link href="/blueprints" className="btn btn-default btn-small mt-6">
                    <span className="btn-text inline-flex items-center gap-2">
                      {t.common.browseLibrary}
                      <ArrowIcon width={16} height={16} />
                    </span>
                  </Link>
                </div>
              </Reveal>
            ) : (
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {items.map((blueprint, index) => (
                  <Reveal key={blueprint.slug} delay={index * 60}>
                    <BlueprintCard blueprint={blueprint} />
                  </Reveal>
                ))}
              </div>
            )}

            <Reveal className="mt-12">
              <h2 className="section-title">{t.saved.contributionsTitle}</h2>
              {contributions.length === 0 ? (
                <p className="mt-4 text-[15px] text-body">{t.saved.contributionsEmpty}</p>
              ) : (
                <ul className="mt-6 space-y-3">
                  {contributions.map((contribution, index) => (
                    <li
                      key={`${contribution.title}-${index}`}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-[10px] border border-mist p-4"
                    >
                      <div>
                        <p className="font-display font-bold text-ink">{contribution.title}</p>
                        <p className="text-[13px] text-slate-2">{contribution.date}</p>
                      </div>
                      <span className="rounded-full bg-mist px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-blue">
                        {t.saved.statusLabel}: {t.saved.status[contribution.status]}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>

          <aside className="min-w-0">
            <Reveal animation="fadeInRight">
              <div className="rounded-[20px] border border-mist bg-white p-6 lg:sticky lg:top-24">
                <h2 className="font-display text-lg font-bold text-ink">{t.auth.title}</h2>
                <p className="mt-1 text-[14px] text-slate-2">{t.auth.lead}</p>

                {status === "authenticated" ? (
                  <div className="mt-5">
                    <p className="text-[14px] text-body">
                      {t.auth.signedInAs}{" "}
                      <span className="font-bold text-ink">
                        {session?.user?.email ?? session?.user?.name}
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={() => void signOut({ callbackUrl: "/saved" })}
                      className="btn btn-ghost btn-small mt-5 w-full"
                    >
                      <span className="btn-text">{t.auth.signOut}</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSignIn} className="mt-5 space-y-4">
                    <div>
                      <label className="field-label" htmlFor="sv-email">
                        {t.auth.emailLabel}
                      </label>
                      <input
                        id="sv-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="input-base"
                      />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="sv-password">
                        {t.auth.passwordLabel}
                      </label>
                      <input
                        id="sv-password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="input-base"
                      />
                    </div>
                    {error ? (
                      <p className="form-note" role="alert">
                        {error}
                      </p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={pending || status === "loading"}
                      className="btn btn-default w-full"
                    >
                      <span className="btn-text">{t.auth.signIn}</span>
                    </button>
                    <p className="text-[12px] leading-relaxed text-slate-2">{t.auth.demoNote}</p>
                  </form>
                )}

                <hr className="divider-soft my-6" />

                <h3 className="font-display text-base font-bold text-ink">
                  {t.saved.signInTitle}
                </h3>
                <p className="mt-1 text-[14px] text-slate-2">{t.saved.signInText}</p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-grediunt py-16">
        <div className="shell">
          <p className="mx-auto max-w-2xl text-center text-[15px] leading-[1.9] text-body">
            {t.common.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
