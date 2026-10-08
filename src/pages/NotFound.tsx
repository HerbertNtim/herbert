import { Link } from "react-router";
import { PageMeta } from "../components/PageMeta";

export function NotFound() {
  return (
    <div>
      <PageMeta
        title="Not found · Leonardo Maldonado"
        description="This page does not exist."
      />
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] text-fg-tertiary uppercase">
        404
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-fg">
        Page not found
      </h1>
      <p className="mt-6 text-[15px] leading-[1.75] text-fg-secondary">
        That page isn&apos;t on this site.
      </p>
      <Link
        to="/"
        className="link-hover mt-8 text-[15px] text-fg-muted transition-colors hover:text-fg"
      >
        Back home
      </Link>
    </div>
  );
}
