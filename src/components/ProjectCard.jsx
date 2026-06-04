export default function ProjectCard({ project }) {
  const cardContent = (
    <>
      <div
        className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} p-6`}
      >
        {project.isPrivate && (
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
            This repository is private
          </span>
        )}
        {project.comingSoon && (
          <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            Coming Soon
          </span>
        )}
        <div className="flex h-full items-end">
          <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      </div>
    </>
  );

  if (project.repoUrl && !project.comingSoon) {
    return (
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card block"
      >
        {cardContent}
      </a>
    );
  }

  return <article className="project-card">{cardContent}</article>;
}
