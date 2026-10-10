import { PageMeta } from "../components/PageMeta";
import { TextLink } from "../components/TextLink";
import { resumeExperience, resumeProjects, skillGroups } from "../data/content";

export function Resume() {
  return (
    <div className="resume-root">
      <PageMeta
        title="Resume · Leonardo Maldonado"
        description="Senior full-stack engineer with 7+ years of experience in TypeScript, React, Node.js, and Go. Creator of 33 JavaScript Concepts."
      />
      <div className="no-print mb-8 flex items-center justify-between">
        <p className="font-mono text-[12px] tracking-[0.25em] text-fg-tertiary uppercase">
          Resume
        </p>
        <button
          className="cursor-pointer py-1.5 font-mono text-[12px] tracking-wide text-fg-tertiary transition-colors hover:text-fg"
          onClick={() => window.print()}
          type="button"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="mb-12">
        <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-fg">
          Herbert Ntim
        </h1>
        <p className="mt-3 text-[15px] text-fg-secondary">
          Full-Stack Engineer & Data Science · React, TypeScript, Python
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          <span className="text-fg-muted">Kumasi, Ghana</span>
          <a
            href="tel:+233559073518"
            className="link-hover text-fg-muted transition-colors hover:text-fg"
          >
            +233559073518
          </a>
          <a
            href="mailto:herbertntim15@gmail.com"
            className="link-hover text-fg-muted transition-colors hover:text-fg"
          >
            herbertntim15@gmail.com
          </a>
          <a
            href="mailto:herbertntim2023@gmail.com"
            className="link-hover text-fg-muted transition-colors hover:text-fg"
          >
            herbertntim2023@gmail.com
          </a>
        </div>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          <TextLink href="https://www.hntim.com">hntim.com</TextLink>
          <TextLink href="https://github.com/HerbertNtim">
            github.com/HerbertNtim
          </TextLink>
          <TextLink href="https://www.linkedin.com/in/hntim/">
            linkedin.com/in/hntim
          </TextLink>
        </div>
      </div>

      <section className="resume-section mb-12">
        <h2 className="resume-label mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
          Professional Summary
        </h2>
        <p className="text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
          Full-Stack Engineer and Data Science Practitioner with experience
          building scalable web applications, workflow automation tools, and
          data-driven solutions. Proficient in TypeScript, React, Next.js, and
          Python, with a focus on developing reliable software and solving
          real-world problems. Exploring machine learning and deep learning
          through hands-on projects, with an interest in turning data into
          practical insights and intelligent applications.
        </p>
      </section>

      <section className="resume-section mb-12">
        <h2 className="resume-label mb-4 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
          Technical Skills
        </h2>
        <div className="flex flex-col gap-4 sm:gap-3">
          {skillGroups.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-1 gap-1 sm:grid-cols-[140px_1fr] sm:gap-3"
            >
              <span className="resume-muted font-mono text-[12px] tracking-wider text-fg-tertiary uppercase">
                {label}
              </span>
              <span className="text-[14px] leading-[1.7] text-fg-secondary">
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section mb-12">
        <h2 className="resume-label mb-6 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
          Experience
        </h2>
        <div className="flex flex-col gap-8">
          {resumeExperience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover text-[15px] font-medium text-fg transition-colors hover:text-fg"
                >
                  {job.company}
                </a>
                <span className="resume-muted shrink-0 font-mono text-[11px] tracking-wider text-fg-tertiary">
                  {job.location}
                </span>
              </div>
              <div className="mt-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <p className="resume-muted text-[14px] text-fg-secondary italic">
                  {job.role}
                </p>
                <span className="resume-muted shrink-0 font-mono text-[11px] tracking-wider text-fg-tertiary">
                  {job.dates}
                </span>
              </div>
              <ul className="resume-muted mt-3 list-disc space-y-1.5 pl-4 text-[14px] leading-[1.7] text-fg-secondary">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section mb-12">
        <h2 className="resume-label mb-6 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
          Projects
        </h2>
        <div className="flex flex-col gap-6">
          {resumeProjects.map((project) => (
            <div key={project.name}>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <p className="text-[15px] font-medium text-fg">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover text-fg transition-colors hover:text-fg"
                  >
                    {project.name}
                  </a>
                  <span className="resume-muted text-[13px] font-normal text-fg-tertiary italic">
                    {" "}
                    · {project.meta}
                  </span>
                </p>
                <span className="resume-muted shrink-0 font-mono text-[11px] tracking-wider text-fg-tertiary">
                  {project.aside}
                </span>
              </div>
              <ul className="resume-muted mt-2 list-disc space-y-1.5 pl-4 text-[14px] leading-[1.7] text-fg-secondary">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section mb-12">
        <h2 className="resume-label mb-6 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
          Education
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <p className="text-[15px] font-medium text-fg flex flex-col">
              Kwame Nkrumah University of Science and Technology{" "}
              <span className="resume-muted font-normal text-fg-tertiary">
                · Bsc. Computer Engineering
              </span>
            </p>
            <span className="resume-muted shrink-0 font-mono text-[11px] tracking-wider text-fg-tertiary">
              2020 to 2024
            </span>
          </div>
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <p className="text-[15px] font-medium text-fg">
              Kwame Nkrumah University of Science and Technology{" "}
              <span className="resume-muted font-normal text-fg-tertiary">
                · Mphil. Computer Engineering
              </span>
            </p>
            <span className="resume-muted shrink-0 font-mono text-[11px] tracking-wider text-fg-tertiary">
              Starting 2026/2027 Academic Year
            </span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="resume-label mb-6 font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase">
          Awards & Open Source
        </h2>
        <ol className="resume-muted list-decimal space-y-3 pl-5 text-[14px] leading-[1.7] text-fg-secondary">
          <li>
            <span className="font-medium text-fg">
              GitHub Top Open Source Project of 2018
            </span>
            <span className="resume-muted text-fg-tertiary"> · </span>
            33 JavaScript Concepts (66K+ stars, 40+ language translations).
          </li>
          <li>
            <span className="font-medium text-fg">Open Source Contributor</span>
            <span className="resume-muted text-fg-tertiary"> · </span>
            Code and documentation contributions to Better Auth, Node.js, and
            TanStack.
          </li>
        </ol>
      </section>
    </div>
  );
}
