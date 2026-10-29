import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title mt-3">{title}</h2>
      {lead ? <p className="section-lead mt-4">{lead}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
