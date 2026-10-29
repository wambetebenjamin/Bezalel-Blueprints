import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

export function WaterIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2c3.4 4 5.4 6.7 5.4 9.4A5.4 5.4 0 0 1 12 18a5.4 5.4 0 0 1-5.4-5.4c0-2.7 2-5.4 5.4-9.4Z" />
      <path d="M9.4 13.2a2.6 2.6 0 0 0 2.6 2.6" />
    </svg>
  );
}

export function SolarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.6" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </svg>
  );
}

export function AgriIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c0-5 1.4-8.6 4.4-11.4A6.3 6.3 0 0 0 12 3.6a6.3 6.3 0 0 0-4.4 6C10.6 12.4 12 16 12 21Z" />
      <path d="M12 21v-6" />
    </svg>
  );
}

export function EducationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.4 8.6 12 4.6l8.6 4-8.6 4-8.6-4Z" />
      <path d="M6.6 10.6V16c0 1.4 2.4 2.6 5.4 2.6s5.4-1.2 5.4-2.6v-5.4" />
      <path d="M20.6 9.4v5" />
    </svg>
  );
}

export function HealthIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.2S4.4 15.6 4.4 10.2A4.2 4.2 0 0 1 12 8.4a4.2 4.2 0 0 1 7.6 1.8c0 5.4-7.6 10-7.6 10Z" />
      <path d="M8.6 12.2h6.8M12 8.8v6.8" />
    </svg>
  );
}

export function MobilityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6.2" cy="16.4" r="3.2" />
      <circle cx="17.8" cy="16.4" r="3.2" />
      <path d="M6.2 16.4 10 9.4h4.2l3.6 7" />
      <path d="M9.4 9.4h5.6" />
      <circle cx="15.4" cy="6.6" r="1.6" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16M7 12h10M10 18h4" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.6 4.6 4.4L19 7" />
    </svg>
  );
}

export function WarningIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.6 21 19.4H3L12 4.6Z" />
      <path d="M12 10v4M12 16.6v.4" />
    </svg>
  );
}

export function BookmarkIcon({ filled, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg {...base} fill={filled ? "currentColor" : "none"} {...props}>
      <path d="M6.6 4.6h10.8v15.2L12 15.6l-5.4 4.2V4.6Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.83c0 1.9.53 3.68 1.46 5.2L2 22l5.1-1.63a9.86 9.86 0 0 0 4.94 1.31h.01c5.43 0 9.84-4.41 9.84-9.84 0-2.63-1.02-5.1-2.89-6.96A9.77 9.77 0 0 0 12.04 2Zm0 18.04h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.06.98.99-2.98-.19-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.53 3.69-8.21 8.22-8.21 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 0 1 2.41 5.81c0 4.53-3.69 8.21-8.22 8.21Zm4.5-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.24-.01-.37.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.02s.87 2.35 1 2.51c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function SpeakerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 5 6.5 9H3v6h3.5L11 19V5Z" />
      <path d="M15.5 9.2a4 4 0 0 1 0 5.6M18.4 6.4a8 8 0 0 1 0 11.2" />
    </svg>
  );
}

export function StopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
    </svg>
  );
}

export function LanguageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.4 12h17.2M12 3.4c2.2 2.4 3.4 5.4 3.4 8.6S14.2 18.2 12 20.6c-2.2-2.4-3.4-5.4-3.4-8.6S9.8 5.8 12 3.4Z" />
    </svg>
  );
}

export const categoryIcons = {
  water: WaterIcon,
  solar: SolarIcon,
  agri: AgriIcon,
  education: EducationIcon,
  health: HealthIcon,
  mobility: MobilityIcon,
} as const;
