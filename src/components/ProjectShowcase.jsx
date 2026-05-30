import { flagshipProject, engineProjects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="border-t border-border-slate/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center sm:mb-12 lg:text-left">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-accent">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Project Showcase
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base lg:mx-0">
            Production systems and reusable commerce engines — built for scale,
            clarity, and maintainable architecture.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          <ProjectCard project={flagshipProject} className="lg:p-8" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {engineProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
