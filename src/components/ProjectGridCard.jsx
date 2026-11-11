import { motion } from 'framer-motion';
import { disciplineMeta } from '../data/projects.js';
import SkillIcon from './SkillIcon.jsx';

function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
    </svg>
  );
}

function GithubIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297a12 12 0 0 0-3.79 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.5 11.5 0 0 1 6.007 0c2.292-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297" />
    </svg>
  );
}

export default function ProjectGridCard({ project }) {
  const meta = disciplineMeta[project.discipline] ?? { label: 'Project', accent: 'fullstack' };

  return (
    <motion.article
      layout="position"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 0.9] }}
      className="project-grid-card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-card"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/[0.03]">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-sm text-white/25">No screenshot yet</span>
          </div>
        )}
        <span className={`disc-chip disc-${meta.accent} absolute left-3 top-3`}>
          {meta.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.type}</span>
        </div>

        <h3 className="mt-2 text-lg font-bold leading-tight tracking-tight text-white sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>

        <div
          className="mt-4 flex flex-wrap items-center gap-2"
          role="list"
          aria-label={`Technology stack for ${project.title}`}
        >
          {project.stack.map((item) =>
            item === 'TMDB API' ? (
              <span
                key={item}
                className="inline-flex h-10 items-center rounded-xl border border-white/5 bg-white/[0.04] px-3 text-xs font-medium text-white/80"
                role="listitem"
              >
                {item}
              </span>
            ) : (
              <span
                key={item}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.04]"
                role="listitem"
                aria-label={item}
                title={item}
              >
                <SkillIcon skill={item} />
              </span>
            )
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex h-9 items-center gap-2 rounded-full bg-primary py-1 pl-4 pr-1 text-xs font-semibold text-white transition hover:bg-primary-dim"
            >
              Live Demo
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-bg text-white transition duration-300 group-hover/btn:rotate-[-45deg]">
                <ArrowIcon />
              </span>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/code inline-flex h-9 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-4 text-xs font-semibold text-white/85 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <GithubIcon className="h-5 w-5 shrink-0 text-white transition-transform duration-300 group-hover/code:-rotate-12" />
              Code
            </a>
          )}
          {!project.liveUrl && !project.repoUrl && (
            <span className="text-xs text-white/40">Links coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}