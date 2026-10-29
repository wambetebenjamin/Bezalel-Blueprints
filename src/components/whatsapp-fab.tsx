"use client";

import { useLocale } from "@/components/locale-provider";
import { WhatsappIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFab({ message }: { message?: string }) {
  const { t } = useLocale();

  return (
    <a
      href={whatsappLink(message ?? t.whatsapp.hello)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.whatsapp.label} ${t.meta.siteName}`}
      className="fab fab-whatsapp"
    >
      <WhatsappIcon width={30} height={30} />
    </a>
  );
}
