import { siteConfig } from '../data/siteConfig.js';
import heroImage from '../assets/hero.jpg';
import ScheduleCallLink from './ScheduleCallLink.jsx';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { scrollTo } from './Navbar.jsx';

function ResumeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

function GithubIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.15c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function EmailIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [5, -5]);
  const rotateY = useTransform(x, [-200, 200], [-5, 5]);

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
    <section id="hero" className="section-pad relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            {/* Status Pill */}
            <div className="mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-2 pl-3 pr-5 backdrop-blur-md">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
              </span>
              <span className="text-sm font-medium tracking-wide text-white/80">
                {siteConfig.availabilityLine1}{' '}
                <strong className="text-white">{siteConfig.availabilityLine2}</strong>
              </span>
            </div>

            {/* Name & Title */}
            <div className="mb-6 flex items-center gap-4">
              <img
                src={heroImage}
                alt={siteConfig.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
              />
              <div>
                <p className="text-lg font-bold text-white">{siteConfig.name}</p>
                <p className="text-sm text-muted">{siteConfig.title}</p>
              </div>
            </div>

            <motion.h1 
              className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {siteConfig.heroHeadline.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <p className="mt-5 text-lg font-medium text-white/90 sm:text-xl">
              {siteConfig.heroSubtitle}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {siteConfig.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ScheduleCallLink />
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex h-[52px] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
              >
                View work
              </button>
              <a
                href={siteConfig.resumeUrl}
                className="group flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-white/40 hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume"
                title="Resume"
              >
                <ResumeIcon />
              </a>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none" style={{ perspective: 1000 }}>
            {/* The main image container - modernized bento-style */}
            <motion.div 
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <img
                src={heroImage}
                alt={`${siteConfig.name} profile`}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              
              {/* Floating tech badge */}
              <div 
                className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Software Engineer</p>
                  <p className="mb-2 text-xs text-white/60">Building scalable solutions</p>
                  
                  {/* Social links */}
                  <div className="flex items-center gap-3">
                    {siteConfig.socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 transition-colors hover:text-white"
                        aria-label={link.label}
                      >
                        {link.icon === 'github' && <GithubIcon className="h-4 w-4" />}
                        {link.icon === 'linkedin' && <LinkedinIcon className="h-4 w-4" />}
                        {link.icon === 'email' && <EmailIcon className="h-4 w-4" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
