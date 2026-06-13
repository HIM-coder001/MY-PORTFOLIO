'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { projects } from '../data/projects.js';
import { siteConfig } from '../data/siteConfig.js';

function ArrowIcon({ className = "h-5 w-5" }) {
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

function GithubIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.15c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function StackingCard({ project, index, total }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - 1 - index) * 0.04]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, index === total - 1 ? 1 : 0.6]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [2, -2]);
  const rotateY = useTransform(x, [-300, 300], [-2, 2]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      className="sticky flex items-start justify-center"
      style={{
        scale,
        opacity,
        transformOrigin: 'top center',
        top: `${6 + index * 1.5}rem`,
        marginBottom: index === total - 1 ? '0' : '8rem',
        perspective: 1200
      }}
    >
      <motion.article 
        className="group relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f0f] shadow-2xl transition duration-500 hover:border-white/20"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left: Image Placeholder */}
          <div className="relative w-full shrink-0 overflow-hidden bg-white/5 lg:w-1/2">
             {project.imageUrl ? (
               <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover" />
             ) : (
               <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-white/5 text-white/30">
                 <span className="text-sm font-medium">Screenshot Placeholder</span>
               </div>
             )}
          </div>

          {/* Right: Content Side */}
          <div className="flex w-full flex-col justify-between p-8 md:p-10 lg:p-12 lg:w-1/2">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                  {project.category}
                </span>
                <span className="font-mono text-sm font-medium text-white/40 tabular-nums">
                  {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                {project.title}
              </h3>
              
              <p className="max-w-xl text-base leading-relaxed text-white/70">
                {project.description}
              </p>

              {(project.comingSoon || project.isPrivate) && (
                <div className="mt-4 flex gap-2">
                  {project.comingSoon && (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                      Coming soon
                    </span>
                  )}
                  {project.isPrivate && !project.comingSoon && (
                    <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white/90">
                      Private Repo
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="mt-10">
              <div className="mb-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex shrink-0 flex-wrap gap-4 border-t border-white/5 pt-8">
                {!project.comingSoon && (
                  <>
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,41,255,0.3)] transition-all duration-300 hover:scale-105 hover:bg-primary-dim"
                    >
                      Live Demo
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a
                      href={project.repoUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-6 text-sm font-semibold text-white/90 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-white"
                    >
                      <GithubIcon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                      View Code
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="projects" className="animate-on-scroll section-pad border-t border-border-muted">
      <div className="mx-auto max-w-6xl">

        <header className="mb-14">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle whitespace-pre-line">{siteConfig.projectsIntro}</p>
        </header>

        <div className="relative pb-24">
          {projects.map((project, index) => (
            <StackingCard
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
