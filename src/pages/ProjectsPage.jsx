import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, projectFilters } from '../data/projects.js';
import { siteConfig } from '../data/siteConfig.js';
import ProjectGridCard from '../components/ProjectGridCard.jsx';

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState('all');

  const counts = useMemo(() => {
    const result = { all: projects.length };
    for (const filter of projectFilters) {
      if (filter.id === 'all') continue;
      result[filter.id] = projects.filter((p) => p.discipline === filter.id).length;
    }
    return result;
  }, []);

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.discipline === active)),
    [active]
  );

  const activeLabel = projectFilters.find((f) => f.id === active)?.label ?? 'All';

  return (
    <main className="w-full max-w-[1200px] px-5 pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-white"
        >
          <BackIcon />
          Back to home
        </Link>

        <header className="mt-6 max-w-2xl">
          <p className="section-label">Portfolio</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            All Projects
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {siteConfig.projectsIntro} Filter by the kind of work you want to see.
          </p>
        </header>

        {/* Filter tabs */}
        <div
          className="mt-8 flex flex-wrap gap-2 sm:gap-3"
          role="group"
          aria-label="Filter projects by discipline"
        >
          {projectFilters.map((filter) => {
            const isActive = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                aria-pressed={isActive}
                className={`filter-tab filter-${filter.id} ${isActive ? 'is-active' : ''}`}
              >
                <span className="filter-dot" aria-hidden="true" />
                {filter.label}
                <span className="filter-count">{counts[filter.id] ?? 0}</span>
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-muted" aria-live="polite">
          Showing <span className="font-semibold text-white">{filtered.length}</span>{' '}
          {active === 'all' ? 'projects' : `${activeLabel.toLowerCase()} projects`}
        </p>

        {/* Results */}
        {filtered.length > 0 ? (
          <motion.div layout className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectGridCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/12 bg-white/[0.02] px-6 py-16 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-backend/15 text-accent-backend">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
                <rect x="4" y="5" width="16" height="4" rx="1.5" />
                <rect x="4" y="15" width="16" height="4" rx="1.5" />
              </svg>
            </div>
            <h2 className="mt-5 text-lg font-bold text-white">
              No {activeLabel.toLowerCase()}-only projects yet
            </h2>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Most of my backend work lives inside full-stack systems. Explore those to see the APIs, data models, and access control I build.
            </p>
            <button
              type="button"
              onClick={() => setActive('fullstack')}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dim"
            >
              View full-stack projects
            </button>
          </div>
        )}

        {/* Slim footer */}
        <footer className="mt-20 flex flex-col items-center gap-4 border-t border-border-muted pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built with React &amp; Tailwind CSS.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="text-muted transition hover:text-white">Email</a>
            <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted transition hover:text-white">GitHub</a>
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted transition hover:text-white">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  );
}