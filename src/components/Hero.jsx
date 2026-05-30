import { siteConfig } from '../data/siteConfig.js';
import heroImage from '../assets/hero.jpg';
import TechMarquee from './TechMarquee.jsx';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-6 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, color-mix(in srgb, #10b981 12%, transparent), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-5 lg:items-center lg:gap-10">
          <p className="order-1 text-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-accent sm:text-sm lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:text-left">
            {siteConfig.availability}
          </p>

          <div className="order-2 max-w-2xl text-center lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:text-left">
            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.65rem] lg:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-lg font-semibold text-slate-300 sm:text-xl">
              {siteConfig.title}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              {siteConfig.headline}
            </p>
            <p className="mt-2 font-mono text-xs text-slate-500 sm:text-sm">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="order-3 flex w-full justify-center lg:order-none lg:col-span-2 lg:col-start-4 lg:row-start-1 lg:row-end-5 lg:justify-end lg:self-center">
            <div className="profile-frame relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-lg sm:max-w-xs lg:max-w-sm">
              <img
                src={heroImage}
                alt={`${siteConfig.name} — portfolio`}
                className="h-full w-full object-cover object-top"
                width={400}
                height={500}
                loading="eager"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="order-4 flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4 lg:col-span-3 lg:col-start-1 lg:row-start-3 lg:justify-start">
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-accent bg-emerald-accent px-6 py-2.5 text-sm font-semibold text-obsidian transition hover:border-emerald-dim hover:bg-emerald-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-accent"
            >
              Download Resume
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-slate bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition hover:border-emerald-accent hover:text-emerald-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-accent"
            >
              View GitHub
            </a>
          </div>

          <div className="order-5 w-full lg:col-span-3 lg:col-start-1 lg:row-start-4">
            <TechMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
