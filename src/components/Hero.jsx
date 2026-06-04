import { siteConfig } from '../data/siteConfig.js';
import heroImage from '../assets/hero.jpg';

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
              <a href="#contact" className="btn-primary">
                Get started
              </a>
              <a href="#projects" className="btn-outline">
                My work
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="profile-frame overflow-hidden rounded-3xl">
              <img
                src={heroImage}
                alt={`${siteConfig.name} — software engineer`}
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
