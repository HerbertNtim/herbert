import { PageMeta } from "../components/PageMeta";
import { TextLink } from "../components/TextLink";

export function Now() {
  return (
    <div>
      <PageMeta
        title="Now · Leonardo Maldonado"
        description="What I'm currently working on and thinking about."
      />
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] text-fg-tertiary uppercase">
        Now
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-fg">
        What I&apos;m up to
      </h1>
      <p className="mt-6 max-w-110 text-[15px] leading-[1.75] text-fg-secondary">
        A snapshot of what I&apos;m focused on right now. Inspired by{" "}
        <TextLink href="https://nownownow.com/about">nownownow.com</TextLink>.
      </p>
      <div className="mt-16 flex flex-col gap-12">
        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
            Work
          </h2>
          <div className="flex flex-col gap-4 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
            <p>
              Recently left{" "}
              <TextLink href="https://www.namecheap.com">Namecheap</TextLink>,
              where I built{" "}
              <TextLink href="https://www.spaceship.com">Spaceship&apos;s</TextLink>{" "}
              domain search platform from scratch as the sole engineer for four
              and a half years, helping the platform sell 3M+ domains. Exploring
              what comes next.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
            Side Projects
          </h2>
          <div className="flex flex-col gap-4 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
            <p>
              Redesigning this portfolio from scratch with Next.js 16, Tailwind
              CSS v4, and a custom dark minimal aesthetic. Exploring
              markdown-powered blogging and modern web patterns.
            </p>
            <p>
              Continuing to maintain{" "}
              <TextLink href="https://github.com/leonardomso/33-js-concepts">
                33 JavaScript Concepts
              </TextLink>, now at 63k+ stars and translated into 20+ languages.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
            Learning
          </h2>
          <div className="flex flex-col gap-4 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
            <p>
              Exploring modern React patterns, server components, and the latest
              in the JavaScript ecosystem. Always looking for better ways to
              build for the web.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
            Life
          </h2>
          <div className="flex flex-col gap-4 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
            <p>
              Born and raised in Brazil, now based in Valencia, Spain. Enjoying
              the Mediterranean pace of life and exploring the city.
            </p>
          </div>
        </section>
      </div>
      <p className="mt-20 text-[13px] text-fg-tertiary">
        Last updated: February 2026
      </p>
    </div>
  );
}
