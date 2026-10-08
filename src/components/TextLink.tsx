import type { ReactNode } from "react";

export function TextLink({
  href,
  children,
  external = true,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      className={`link-hover transition-colors hover:text-fg ${className ?? "text-fg-muted"}`}
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
