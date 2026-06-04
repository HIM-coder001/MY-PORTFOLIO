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
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
