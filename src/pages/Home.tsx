import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { PageMeta } from "../components/PageMeta";
import { ProjectCard } from "../components/ProjectCard";
import { SectionLabel } from "../components/SectionLabel";
import { TextLink } from "../components/TextLink";
import {
  contacts,
  homeExperience,
  projects,
  publications,
  stack,
} from "../data/content";

export function Home() {
  return (
    <div>
      <PageMeta
        title="Herbert Ntim · Full-Stack Engineer"
        description="Full-Stack Engineer based in Kumasi, Ghana. Building full-stack applications with TypeScript, React, Next.js, and Python. Exploring data science and machine learning."
      />
      <section className="mb-24 sm:mb-32">
        <p className="mb-4 font-mono text-[12px] tracking-[0.25em] text-fg-tertiary uppercase">
          Full-Stack Engineer · Kumasi, Ghana
        </p>
        <h1 className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-fg">
          Herbert
          <br />
          Ntim
        </h1>
        <p className="mt-8 max-w-120 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px]">
          Software engineer building full-stack applications with TypeScript,
          React, Next.js, and Python. Previously worked with the KNUST College
          of Engineering Examination Office, building automation tools and web
          applications supporting 10,000+ students. Currently expanding into
          data science and machine learning while building practical software
          projects.
        </p>
      </section>

      <section className="mb-20 sm:mb-28">
        <SectionLabel>Experience</SectionLabel>
        <div className="flex flex-col gap-8">
          {homeExperience.map((job) => (
            <div key={job.dates + job.company}>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-wider text-fg-tertiary">
                  {job.dates}
                </span>
              </div>
              <p className="mt-1.5 text-[15px] font-medium text-fg">
                {job.role} <span className="text-fg-tertiary">at</span>{" "}
                <TextLink href={job.companyHref}>{job.company}</TextLink>
              </p>
              <p className="mt-2 text-[14px] leading-[1.7] text-fg-secondary">
                {job.body === "namecheap" ? (
                  <>
                    Sole engineer on Spaceship&apos;s{" "}
                    <TextLink href="https://www.spaceship.com/domain-search/">
                      domain search product
                    </TextLink>{" "}
                    end to end, contributing to the sale of 3M+ domains. Built
                    the React/TypeScript frontend from scratch with real-time
                    WebSocket pricing for 500+ TLDs, Beast Mode bulk search, and
                    multi-currency support across 30+ markets.
                  </>
                ) : (
                  job.body
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 sm:mb-28">
        <SectionLabel>Writing</SectionLabel>
        <div>
          <p className="mb-8 max-w-110 text-[15px] leading-[1.75] text-fg-secondary">
            90+ articles published across JavaScript, React, TypeScript,
            Node.js, GraphQL, and modern web development. Over 1 million views
            total.
          </p>
          <ul className="flex flex-col gap-1">
            {publications.map((item) => (
              <li key={item.href}>
                <a
                  className="group -mx-3 flex items-baseline justify-between gap-4 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-low"
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-[15px] text-fg">{item.name}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-fg-tertiary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-20 sm:mb-28">
        <SectionLabel>Stack</SectionLabel>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[13px] tracking-wide text-fg-muted">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-20 sm:mb-28">
        <SectionLabel>Ventures</SectionLabel>
        <div className="flex flex-col gap-4">
          {projects
            .filter((project) => project.home)
            .map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          <Link
            className="group mt-2 flex items-center gap-2 font-mono text-[12px] tracking-wide text-fg-tertiary transition-colors hover:text-fg"
            to="/projects"
          >
            View all projects
            <ArrowRight
              aria-hidden="true"
              className="h-3 w-3 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <section>
        <SectionLabel>Contact</SectionLabel>
        <div>
          <p className="mb-8 max-w-100 text-[15px] leading-[1.75] text-fg-secondary">
            Have something in mind? Reach out.
          </p>
          <div className="flex flex-col gap-4">
            {contacts.map((item) => (
              <a
                key={item.label}
                className="group flex items-baseline justify-between border-b border-surface-border pb-4 transition-colors hover:border-surface-border-strong"
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-mono text-[11px] tracking-wider text-fg-tertiary uppercase transition-colors group-hover:text-fg-muted">
                  {item.label}
                </span>
                <span className="text-[14px] text-fg-muted transition-colors group-hover:text-fg">
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
