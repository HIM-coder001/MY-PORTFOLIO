import { useMotionValue, useTransform, motion } from 'framer-motion';
import { projects } from '../data/projects.js';
import { siteConfig } from '../data/siteConfig.js';

function ArrowIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
    </svg>
  );
}

function GithubIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.15c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ProjectCard({ project, index, total }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [2, -2]);
  const rotateY = useTransform(x, [-200, 200], [-2, 2]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - (rect.left + rect.width / 2));
    y.set(event.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Alternate image side on even/odd
  const imageRight = index % 2 !== 0;

  return (
    <motion.article
      className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f0f] shadow-xl transition-colors duration-500 hover:border-white/20"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex flex-col ${imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

        {/* Image panel */}
        <div className="relative w-full shrink-0 overflow-hidden lg:w-[45%]">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              className="h-full min-h-[260px] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div className="flex h-full min-h-[260px] w-full items-center justify-center bg-white/[0.03]">
              <span className="text-sm text-white/25">No screenshot yet</span>
            </div>
          )}
          {/* Index badge */}
          <span className="absolute left-4 top-4 font-mono text-xs font-semibold text-white/30">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Content panel */}
        <div className="flex w-full flex-col justify-between p-8 md:p-10 lg:p-12">
          {/* Top: tags + title + description */}
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                {project.category}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/50">
                {project.type}
              </span>
              {project.isPrivate && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50">
                  Private repo
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              {project.title}
            </h3>

            <p className="mt-3 text-base leading-relaxed text-white/65">
              {project.description}
            </p>

            {/* Outcome + Role */}
            <div className="mt-6 grid gap-4 border-t border-white/5 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-dim">
                  Outcome
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {project.outcome}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-dim">
                  My role
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {project.role}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom: stack chips + links */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/75 transition-colors hover:bg-white/[0.07] hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-white/5 pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,41,255,0.25)] transition-all duration-300 hover:scale-105 hover:bg-primary-dim"
                >
                  Live Demo
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-6 text-sm font-semibold text-white/90 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </motion.article>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="projects" className="animate-on-scroll section-pad border-t border-border-muted">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">{siteConfig.projectsIntro}</p>
        </header>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
