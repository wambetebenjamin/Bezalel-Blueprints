"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CheckIcon, WarningIcon, WhatsappIcon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { RecaptchaSlot, captchaEnabled, useRecaptcha } from "@/components/recaptcha";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { useSavedList } from "@/components/saved-list-provider";
import { categories } from "@/lib/site";
import { whatsappLink } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

type Status = "idle" | "sending" | "sent" | "error";

export function ContributeView() {
  const { t, locale } = useLocale();
  const { addContribution } = useSavedList();
  const { challenge, scriptError, getToken, requestChallenge } = useRecaptcha("contribute");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirm, setConfirm] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, unknown> = Object.fromEntries(data.entries());
    payload.confirm = confirm;

    setStatus("sending");
    setErrorMessage(null);

    const captcha = await getToken();
    if (captchaEnabled && !captcha && !challenge) {
      requestChallenge();
      setStatus("idle");
      setErrorMessage(t.contribute.captchaFallback);
      return;
    }
    if (captchaEnabled && challenge && !captcha) {
      setStatus("idle");
      setErrorMessage(t.contribute.captchaFallback);
      return;
    }

    if (captcha) {
      payload.token = captcha.token;
      payload.version = captcha.version;
    }

    try {
      const response = await fetch("/api/contribute", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        fallback?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        if (result.fallback) {
          requestChallenge();
          setStatus("idle");
          setErrorMessage(t.contribute.captchaFallback);
          return;
        }
        setStatus("error");
        setErrorMessage(t.common.errorGeneric);
        return;
      }

      addContribution(String(payload.title ?? ""));
      setStatus("sent");
      form.reset();
      setConfirm(false);
    } catch {
      setStatus("error");
      setErrorMessage(t.common.errorGeneric);
    }
  };

  return (
    <>
      <PageBanner
        image="/images/contribute-hero.jpg"
        eyebrow={t.contribute.eyebrow}
        title={t.contribute.title}
        lead={t.contribute.lead}
      />

      <section className="bg-white py-70">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <h2 className="section-title">{t.contribute.ipTitle}</h2>
              <ul className="list-check mt-6">
                {t.contribute.ipPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-8 rounded-[20px] border border-mist bg-wash p-6">
                <div className="flex items-start gap-3">
                  <span className="icon-badge shrink-0">
                    <WarningIcon width={24} height={24} />
                  </span>
                  <p className="text-[14px] leading-[1.85] text-body">{t.common.disclaimer}</p>
                </div>
              </div>

              <a
                href={whatsappLink(t.contribute.whatsappInstead)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-[#25d366] px-5 text-sm font-bold text-white"
              >
                <WhatsappIcon width={18} height={18} />
                {t.common.whatsapp}
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[20px] border border-mist bg-white p-6 md:p-8">
              {status === "sent" ? (
                <div role="status" aria-live="polite">
                  <span className="icon-badge">
                    <CheckIcon width={26} height={26} />
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                    {t.contribute.successTitle}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.9] text-body">
                    {t.contribute.successText}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="btn btn-default btn-small"
                    >
                      <span className="btn-text">{t.contribute.sendAnother}</span>
                    </button>
                    <Link href="/blueprints" className="btn btn-ghost btn-small">
                      <span className="btn-text">{t.common.browseLibrary}</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate={false}>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    {t.contribute.formTitle}
                  </h2>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label className="field-label" htmlFor="c-name">
                        {t.contribute.nameLabel} ({t.common.required})
                      </label>
                      <input
                        id="c-name"
                        name="name"
                        required
                        autoComplete="name"
                        className="input-base"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="field-label" htmlFor="c-email">
                        {t.contribute.emailLabel} ({t.common.optional})
                      </label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="input-base"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="field-label" htmlFor="c-whatsapp">
                        {t.contribute.whatsappLabel} ({t.common.optional})
                      </label>
                      <input
                        id="c-whatsapp"
                        name="whatsapp"
                        inputMode="tel"
                        autoComplete="tel"
                        className="input-base"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="field-label" htmlFor="c-location">
                        {t.contribute.locationLabel} ({t.common.optional})
                      </label>
                      <input id="c-location" name="location" className="input-base" />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="c-title">
                        {t.contribute.titleLabel} ({t.common.required})
                      </label>
                      <input id="c-title" name="title" required className="input-base" />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="field-label" htmlFor="c-category">
                        {t.contribute.categoryLabel}
                      </label>
                      <select id="c-category" name="category" className="input-base">
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name[locale as Locale]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label className="field-label" htmlFor="c-skill">
                        {t.contribute.skillLabel}
                      </label>
                      <select id="c-skill" name="skill" className="input-base">
                        <option value="beginner">{t.common.beginner}</option>
                        <option value="intermediate">{t.common.intermediate}</option>
                        <option value="advanced">{t.common.advanced}</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="c-summary">
                        {t.contribute.summaryLabel} ({t.common.required})
                      </label>
                      <textarea
                        id="c-summary"
                        name="summary"
                        required
                        rows={3}
                        className="input-base"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="c-materials">
                        {t.contribute.materialsLabel}
                      </label>
                      <textarea id="c-materials" name="materials" rows={4} className="input-base" />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="c-steps">
                        {t.contribute.stepsLabel} ({t.common.required})
                      </label>
                      <textarea
                        id="c-steps"
                        name="steps"
                        required
                        rows={6}
                        placeholder={t.contribute.stepsPlaceholder}
                        className="input-base"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="c-safety">
                        {t.contribute.safetyLabel}
                      </label>
                      <textarea id="c-safety" name="safety" rows={4} className="input-base" />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="c-photos">
                        {t.contribute.photosLabel} ({t.common.optional})
                      </label>
                      <textarea id="c-photos" name="photos" rows={2} className="input-base" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="flex min-h-11 items-start gap-3 text-[15px] text-body">
                      <input
                        type="checkbox"
                        checked={confirm}
                        onChange={(event) => setConfirm(event.target.checked)}
                        required
                        className="mt-1 h-5 w-5 shrink-0 accent-[#265db9]"
                      />
                      <span>{t.contribute.licenceConfirm}</span>
                    </label>
                  </div>

                  <RecaptchaSlot
                    challenge={challenge}
                    scriptError={scriptError}
                    message={t.contribute.captchaFailed}
                  />

                  {errorMessage ? (
                    <p className="form-note mt-3" role="alert">
                      {errorMessage}
                    </p>
                  ) : null}

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn btn-default"
                    >
                      <span className="btn-text">
                        {status === "sending" ? t.common.sending : t.common.submit}
                      </span>
                    </button>
                    {captchaEnabled ? (
                      <p className="max-w-sm text-[12px] leading-relaxed text-slate-2">
                        {t.contribute.captchaNote}
                      </p>
                    ) : null}
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-grediunt py-16">
        <div className="shell">
          <div className="relative aspect-16/7 w-full overflow-hidden rounded-[20px]">
            <Image
              src="/images/license-hero.jpg"
              alt={t.license.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-6 text-center text-[15px] leading-[1.9] text-body">
            {t.contribute.whatsappInstead}
          </p>
        </div>
      </section>
    </>
  );
}
