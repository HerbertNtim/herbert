import { PageMeta } from "../components/PageMeta";
import { uses } from "../data/content";

export function Uses() {
  return (
    <div>
      <PageMeta
        title="Uses · Leonardo Maldonado"
        description="Tools, software, and hardware I use daily for development."
      />
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] text-fg-tertiary uppercase">
        Uses
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-fg">
        Tools & Setup
      </h1>
      <p className="mt-6 max-w-[440px] text-[15px] leading-[1.75] text-fg-secondary">
        Software, hardware, and tools I use daily for development and
        productivity.
      </p>
      <div className="mt-16 flex flex-col gap-16">
        {uses.map((group) => (
          <section key={group.title}>
            <h2 className="mb-6 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
              {group.title}
            </h2>
            <div className="flex flex-col gap-4">
              {group.items.map(([name, detail]) => (
                <div
                  key={name}
                  className="flex items-baseline justify-between border-b border-surface-border pb-4"
                >
                  <span className="text-[15px] font-medium text-fg">{name}</span>
                  <span className="text-[13px] text-fg-secondary">{detail}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
