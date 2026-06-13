export default function ProjectCard({ project }) {
  return (
    <article className="project-card group">
      <div className={`relative min-h-[220px] bg-gradient-to-br ${project.gradient} p-6`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.24),transparent_32%),linear-gradient(135deg,transparent,rgba(0,0,0,0.42))]" />

        <div className="relative z-10 flex h-full min-h-[172px] flex-col justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {project.category}
            </span>
            {project.isPrivate && (
              <span className="rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                Private repo
              </span>
            )}
            {project.comingSoon && (
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-950">
                Coming soon
              </span>
            )}
          </div>

          <div>
            <p className="mb-3 max-w-md text-sm font-medium leading-relaxed text-white/78">
              {project.description}
            </p>
            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{project.title}</h3>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-dim">Outcome</p>
          <p className="mt-2 text-sm leading-relaxed text-white/86">{project.outcome}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-dim">My role</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.role}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5"
            >
              Live demo
            </a>
          )}
          {project.repoUrl && !project.comingSoon && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-5 py-2.5"
            >
              View GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
