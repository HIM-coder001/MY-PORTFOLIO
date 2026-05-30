export default function ProjectCard({ project, className = '' }) {
  return (
    <article
      className={`project-card-glow flex h-full flex-col rounded-lg border border-border-slate bg-slate-card p-6 sm:p-7 ${className}`}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded border border-emerald-accent/40 bg-emerald-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-accent sm:text-xs">
          {project.badge}
        </span>
        {project.featured && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
            Full-Stack
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
        {project.description}
      </p>

      {project.metrics?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded border border-emerald-accent/30 bg-emerald-accent/5 px-2.5 py-1 font-mono text-[10px] font-medium text-emerald-accent sm:text-[11px]"
            >
              {metric}
            </span>
          ))}
        </div>
      )}

      <ul className="mt-5 flex-grow space-y-2 border-t border-border-slate/80 pt-5">
        {project.highlights.map((point) => (
          <li
            key={point}
            className="flex gap-2 text-sm text-slate-300 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-emerald-accent before:content-['']"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border-slate px-2 py-1 font-mono text-[11px] text-slate-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.repoUrl && (
        <div className="mt-6 flex flex-wrap gap-3 border-t border-border-slate/80 pt-5">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-border-slate px-4 text-sm font-semibold text-white transition hover:border-emerald-accent hover:text-emerald-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-accent"
          >
            View Code
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-emerald-accent bg-emerald-accent/10 px-4 text-sm font-semibold text-emerald-accent transition hover:bg-emerald-accent hover:text-obsidian focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-accent"
            >
              Live Demo
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="Add liveUrl in projects.js after you deploy"
              className="inline-flex min-h-10 cursor-not-allowed items-center justify-center rounded-md border border-border-slate/80 bg-slate-card px-4 text-sm font-semibold text-slate-500"
            >
              Live demo — coming soon
            </button>
          )}
        </div>
      )}
    </article>
  );
}
