import { siteConfig } from '../data/siteConfig.js';
import heroImage from '../assets/hero.jpg';
import ScheduleCallLink from './ScheduleCallLink.jsx';

function ResumeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
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

export default function Hero() {
  return (
    <section id="hero" className="section-pad min-h-[calc(100vh-73px)] flex items-center">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-8 flex items-start gap-2">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <div>
                <p className="text-sm text-muted">{siteConfig.availabilityLine1}</p>
                <p className="text-xl font-semibold text-white sm:text-2xl">
                  {siteConfig.availabilityLine2}
                </p>
              </div>
            </div>

            <div className="mb-10 flex items-center gap-4">
              <img
                src={heroImage}
                alt={siteConfig.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white/10"
              />
              <div>
                <p className="text-xl font-bold text-white sm:text-2xl">{siteConfig.name}</p>
                <p className="text-muted">{siteConfig.title}</p>
              </div>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              {siteConfig.heroHeadline}
            </h1>

            <p className="mt-5 text-lg font-medium text-white/90 sm:text-xl">
              {siteConfig.heroSubtitle}
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ScheduleCallLink />
              <a href="#projects" className="btn-outline">
                View work
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="hero-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume"
              >
                <ResumeIcon />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="profile-frame overflow-hidden rounded-full aspect-square">
              <img
                src={heroImage}
                alt={`${siteConfig.name} — software engineer`}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
