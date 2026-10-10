import { PageMeta } from "../components/PageMeta";

export function Now() {
  return (
    <div>
      <PageMeta
        title="Now · Herbert Ntim"
        description="What I'm working on, learning, and focusing on while pursuing my MPhil in Computer Engineering."
      />

      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] text-fg-tertiary uppercase">
        Now
      </p>

      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-fg">
        What I&apos;m up to
      </h1>

      <div className="mt-16 flex flex-col gap-12">
        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
            Work
          </h2>

          <div className="flex flex-col gap-4 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
            <p>
              I&apos;m currently open to opportunities where I can contribute as
              a software engineer and grow through building projects. Building
              software that solves practical problems, with experience in
              full-stack web development and workflow automation.
            </p>

            <p>
              I&apos;m looking for a role of around 30 hours per week that
              allows me to contribute to a team while making time for my
              academic work.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
            Studies
          </h2>

          <div className="flex flex-col gap-4 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
            <p>
              Pursuing my academic goals in MPhil Computer
              Engineering. I want to strengthen my foundations in computing
              while exploring research problems that connect software,
              algorithms, and practical engineering applications.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
            Learning
          </h2>

          <div className="flex flex-col gap-4 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
            <p>
              Deepening my knowledge of data science, machine learning, and deep
              learning through hands-on projects. I&apos;m focusing on
              understanding the fundamentals, building practical solutions, and
              learning how to evaluate models properly.
            </p>

            <p>
              I&apos;m also strengthening my backend engineering skills and
              exploring computer vision as a potential direction for future
              research.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
            Side Projects
          </h2>

          <div className="flex flex-col gap-4 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
            <p>
              I&apos;m also improving my portfolio and working on projects that
              demonstrate my abilities in full-stack development and data
              science.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
            Life
          </h2>

          <div className="flex flex-col gap-4 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
            <p>
              Trying to be intentional about how I spend my time, stay
              consistent with learning, and keep growing as an engineer.
              I&apos;m learning to balance professional growth, academic
              ambitions, and life outside the screen.
            </p>
          </div>
        </section>
      </div>

      <p className="mt-20 text-[13px] text-fg-tertiary">
        Last updated: {new Date().getMonth()} {new Date().getFullYear()}
      </p>
    </div>
  );
}
