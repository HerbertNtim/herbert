import { PageMeta } from "../components/PageMeta";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/content";

export function Projects() {
  return (
    <div>
      <PageMeta
        title="Projects · Leonardo Maldonado"
        description="Open source projects, products, and side projects by Leonardo Maldonado."
      />
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] text-fg-tertiary uppercase">
        Projects
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-fg">
        Things I&apos;ve built
      </h1>
      <p className="mt-6 max-w-[440px] text-[15px] leading-[1.75] text-fg-secondary">
        Open source projects, products, and experiments.
      </p>
      <div className="mt-16 flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} showTags />
        ))}
      </div>
    </div>
  );
}
