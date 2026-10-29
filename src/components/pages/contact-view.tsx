"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { CheckIcon, WarningIcon, WhatsappIcon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { RecaptchaSlot, captchaEnabled, useRecaptcha } from "@/components/recaptcha";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { whatsappLink } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const topics = ["general", "blueprint", "contribute", "correction", "schools"] as const;

export function ContactView() {
  const { t } = useLocale();
  const { challenge, scriptError, getToken, requestChallenge } = useRecaptcha("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const payload: Record<string, unknown> = Object.fromEntries(
      new FormData(form).entries(),
    );

    setStatus("sending");
    setErrorMessage(null);

    const captcha = await getToken();
    if (captchaEnabled && !captcha) {
      requestChallenge();
      setStatus("idle");
      setErrorMessage(t.contribute.captchaFallback);
      return;
    }
    if (captcha) {
      payload.token = captcha.token;
      payload.version = captcha.version;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; fallback?: boolean };

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

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(t.common.errorGeneric);
    }
  };

  return (
    <>
      <PageBanner
        image="/images/contact-hero.jpg"
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        lead={t.contact.lead}
      />

      <section className="bg-white py-70">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <div className="rounded-[20px] bg-mist p-6">
                <h2 className="font-display text-xl font-bold text-ink">
                  {t.contact.whatsappTitle}
                </h2>
                <p className="mt-2 text-[15px] leading-[1.9] text-body">
                  {t.contact.whatsappText}
                </p>
                <a
                  href={whatsappLink(t.whatsapp.hello)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-[#25d366] px-5 text-sm font-bold text-white"
                >
                  <WhatsappIcon width={18} height={18} />
                  {t.common.whatsapp}
                </a>
              </div>

              <div className="mt-6 rounded-[20px] border border-mist p-6">
                <h2 className="font-display text-xl font-bold text-ink">{t.contact.emailTitle}</h2>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-[12px] font-bold uppercase tracking-wide text-slate">
                      {t.contact.generalTitle}
                    </dt>
                    <dd>
                      <a
                        className="min-h-11 inline-flex items-center text-[15px] font-semibold text-blue underline"
                        href="mailto:hello@bezalelblueprints.org"
                      >
                        hello@bezalelblueprints.org
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-bold uppercase tracking-wide text-slate">
                      {t.contact.contributionsTitle}
                    </dt>
                    <dd>
                      <a
                        className="min-h-11 inline-flex items-center text-[15px] font-semibold text-blue underline"
                        href="mailto:contribute@bezalelblueprints.org"
                      >
                        contribute@bezalelblueprints.org
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 rounded-[20px] border border-mist p-6">
                <h2 className="font-display text-xl font-bold text-ink">{t.contact.hoursTitle}</h2>
                <p className="mt-2 text-[15px] leading-[1.9] text-body">{t.contact.hoursText}</p>
              </div>

              <div className="mt-6 rounded-[20px] border border-mist bg-wash p-6">
                <div className="flex items-start gap-3">
                  <span className="icon-badge shrink-0">
                    <WarningIcon width={24} height={24} />
                  </span>
                  <p className="text-[14px] leading-[1.85] text-body">{t.contact.disclaimer}</p>
                </div>
              </div>
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
                    {t.contact.successTitle}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.9] text-body">
                    {t.contact.successText}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn btn-default btn-small mt-6"
                  >
                    <span className="btn-text">{t.contribute.sendAnother}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    {t.contact.formTitle}
                  </h2>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="field-label" htmlFor="ct-name">
                        {t.contribute.nameLabel} ({t.common.required})
                      </label>
                      <input
                        id="ct-name"
                        name="name"
                        required
                        autoComplete="name"
                        className="input-base"
                      />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="ct-email">
                        {t.contribute.emailLabel} ({t.common.required})
                      </label>
                      <input
                        id="ct-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="input-base"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="ct-topic">
                        {t.contact.topicLabel}
                      </label>
                      <select id="ct-topic" name="topic" className="input-base">
                        {topics.map((topic) => (
                          <option key={topic} value={topic}>
                            {t.contact.topics[topic]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="ct-message">
                        {t.contact.messageLabel} ({t.common.required})
                      </label>
                      <textarea
                        id="ct-message"
                        name="message"
                        required
                        rows={6}
                        className="input-base"
                      />
                    </div>
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
              src="/images/urban-street.jpg"
              alt={t.contact.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
