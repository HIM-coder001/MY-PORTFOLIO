import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import { siteConfig } from '../data/siteConfig.js';

export default function ProjectShowcase() {
  return (
    <section id="projects" className="animate-on-scroll section-pad border-t border-border-muted">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle whitespace-pre-line">{siteConfig.projectsIntro}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {siteConfig.projectStats.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-white/15 bg-white/[0.03] px-4 py-3"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
