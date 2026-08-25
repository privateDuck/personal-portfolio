import { projects } from '@/config/portfolio-data';
import type { ProjectData } from '@/config/portfolio-data';

function ProjectCard({ project }: { project: ProjectData }) {
  const isExternal = project.href.startsWith('http');
  let statusClass = '';
  if (project.statusType == 'wip') {
    statusClass = 'text-green border-green-dim';
  }
  else if (project.statusType == 'ci/cd') {
    statusClass = 'text-green border-green-dim';
  }
  else if (project.statusType == 'completed') {
    statusClass = 'text-green border-green-dim';
  }
  return (
    <a
      href={project.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`bg-surface-2 px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-[60px_1fr_auto] gap-6 md:gap-8 items-start transition-colors duration-200 hover:bg-surface-3 group no-underline text-inherit cursor-pointer ${project.featured ? 'bg-surface border-l-2 border-l-accent' : ''
        }`}
    >
      <div
        className={`hidden md:block font-sans font-bold text-[1.8rem] md:text-[2rem] tracking-tight leading-none pt-1 select-none transition-colors group-hover:text-accent ${project.featured ? 'text-accent-dim' : 'text-border-2'
          }`}
      >
        {project.index}
      </div>

      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] tracking-[0.1em] uppercase text-accent-hi">
            {project.domain}
          </span>
          <span
            className={`text-[11px] tracking-[0.1em] uppercase border px-2 py-[0.1rem] ${statusClass}`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="font-sans font-bold text-[clamp(1.2rem,2.2vw,1.6rem)] tracking-tight uppercase text-text mb-3 leading-[1.1] transition-colors group-hover:text-accent-hi">
          {project.name}
        </h3>

        <p className="hidden md:block text-[13.5px] text-text-2 leading-[1.8] mb-5 max-w-[850px]">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="text-[11.5px] tracking-[0.06em] text-text-2 border border-border px-2 py-[0.2rem]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="hidden md:block mt-2 md:mt-0 self-start md:self-center flex items-center justify-center gap-2 text-[12px] font-mono tracking-[0.1em] uppercase text-accent-hi md:text-text-2 border border-border py-[0.5rem] px-5 transition-all duration-200 group-hover:text-accent-hi group-hover:border-accent-hi group-hover:bg-accent/5 whitespace-nowrap">
        <span>View Project</span>
        <span className="transition-transform duration-200 inline-block group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
          ↗
        </span>
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-surface px-6 md:px-12 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-[0.15em] right-6 md:right-8 font-sans font-extrabold text-[clamp(8rem,18vw,16rem)] tracking-[-0.06em] text-surface-3 leading-none pointer-events-none select-none z-0">
        05
      </div>

      <div className="flex items-center gap-4 mb-14">
        <span className="font-sans font-bold text-[12px] tracking-[0.15em] uppercase text-accent">
          05 - Projects
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="flex flex-col gap-px bg-border border border-border relative z-[1]">
        {projects.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </section>
  );
}
