import { siteConfig } from '../data/siteConfig.js';

function StepIcon({ type }) {
  const cls = 'h-6 w-6';

  switch (type) {
    case 'discover':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3-3" />
        </svg>
      );
    case 'plan':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case 'build':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
          <path d="M14 4l6 6-10 10H4v-6L14 4z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
          <path d="M12 3v18M5 10l7-7 7 7" />
        </svg>
      );
  }
}

export default function Process() {
  return (
    <section className="animate-on-scroll section-pad border-t border-border-muted bg-bg-secondary/40">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 text-center">
          <p className="text-5xl font-bold text-primary sm:text-6xl">4</p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Step process</h2>
          <p className="section-subtitle mx-auto mt-4">{siteConfig.processIntro}</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.processSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-2xl border border-border bg-bg-card p-6"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <StepIcon type={step.icon} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {step.step}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
