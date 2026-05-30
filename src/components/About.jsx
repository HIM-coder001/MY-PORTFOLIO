import { siteConfig } from '../data/siteConfig.js';

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border-slate/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center sm:mb-12 lg:text-left">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-accent">
            About
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {siteConfig.name}
          </h2>
          <p className="mt-2 font-mono text-sm text-slate-500">{siteConfig.tagline}</p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-4 lg:col-span-3">
            {siteConfig.about.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed text-slate-400 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
            <p className="font-mono text-xs text-emerald-accent sm:text-sm">
              {siteConfig.availability}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Focus areas
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex gap-3 text-sm text-slate-300 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-emerald-accent before:content-['']"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
