export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <svg
        width={compact ? 34 : 40}
        height={compact ? 34 : 40}
        viewBox="0 0 40 40"
        role="img"
        aria-hidden="true"
        focusable="false"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="bb-mark" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#265db9" />
            <stop offset="100%" stopColor="#6871f4" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="9" fill="url(#bb-mark)" />
        <path
          d="M13 11.5h8.2c3.2 0 5.3 1.7 5.3 4.4 0 1.7-.9 3-2.4 3.6 2 .5 3.2 2 3.2 4.2 0 3.1-2.3 4.8-6 4.8H13V11.5Zm3.4 6.4h3.6c1.4 0 2.3-.7 2.3-1.9s-.9-1.8-2.3-1.8h-3.6v3.7Zm0 8.7h4.1c1.6 0 2.6-.8 2.6-2.1s-1-2.1-2.6-2.1h-4.1v4.2Z"
          fill="#ffffff"
        />
      </svg>
      <span className="leading-none">
        <span
          className="block font-display font-extrabold tracking-tight text-ink"
          style={{ fontSize: compact ? "1.05rem" : "1.25rem", letterSpacing: "0.02em" }}
        >
          BEZALEL
        </span>
        <span
          className="block font-display font-semibold uppercase text-slate"
          style={{ fontSize: compact ? "0.6rem" : "0.68rem", letterSpacing: "0.34em" }}
        >
          Blueprints
        </span>
      </span>
    </span>
  );
}
