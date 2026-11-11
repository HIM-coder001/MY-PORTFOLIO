import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { siteConfig } from '../data/siteConfig.js';
import ProjectGridCard from './ProjectGridCard.jsx';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const FEATURED_COUNT = 3;

export default function ProjectShowcase() {
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <section id="projects" className="animate-on-scroll section-pad border-t border-border-muted">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">{siteConfig.projectsIntro}</p>
          </div>
          <Link
            to="/projects"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            See all projects
            <ArrowIcon />
          </Link>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectGridCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,41,255,0.28)] transition hover:bg-primary-dim"
          >
            Browse all {projects.length} projects
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}