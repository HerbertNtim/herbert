import { PageMeta } from "../components/PageMeta";

export function Blog() {
  return (
    <div>
      <PageMeta
        title="Blog · Leonardo Maldonado"
        description="Thoughts on software engineering, web development, and building products."
      />
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] text-fg-tertiary uppercase">
        Blog
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-fg">
        Writing
      </h1>
      <p className="mt-6 max-w-[440px] text-[15px] leading-[1.75] text-fg-secondary">
        Thoughts on software engineering, web development, and building products.
      </p>
      <div className="mt-16 flex flex-col gap-1">
        <p className="py-8 text-center font-mono text-[13px] tracking-wide text-fg-tertiary">
          No posts yet. Check back soon.
        </p>
      </div>
    </div>
  );
}
