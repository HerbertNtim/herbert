import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/content";

export function ProjectCard({
  project,
  showTags = false,
}: {
  project: Project;
  showTags?: boolean;
}) {
  return (
    <a
      className="group rounded-lg border border-surface-border bg-surface-low p-5 transition-colors duration-300 hover:border-surface-border-strong"
      href={project.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.15em] text-fg-tertiary uppercase">
              {project.label}
            </span>
          </div>
          <p className="text-[15px] font-medium text-fg transition-colors group-hover:text-fg">
            {project.name}
          </p>
          <p className="mt-1.5 text-[13px] leading-[1.6] text-fg-secondary">
            {project.description}
          </p>
          {showTags ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wide text-fg-tertiary"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 h-4 w-4 shrink-0 text-fg-tertiary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
        />
      </div>
    </a>
  );
}
