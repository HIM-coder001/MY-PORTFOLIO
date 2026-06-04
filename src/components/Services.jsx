import { useState } from 'react';
import { siteConfig } from '../data/siteConfig.js';

function ServiceIcon({ type }) {
  const cls = 'h-5 w-5 stroke-current';

  switch (type) {
    case 'backend':
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={cls}>
          <rect x="4" y="5" width="16" height="4" rx="1.5" />
          <rect x="4" y="15" width="16" height="4" rx="1.5" />
        </svg>
      );
    case 'frontend':
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={cls}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M4 9h16" />
        </svg>
      );
    case 'mobile':
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={cls}>
          <rect x="8" y="3" width="8" height="18" rx="2" />
        </svg>
      );
    case 'deployment':
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={cls}>
          <path d="M5 19l7-14 7 14H5Z" />
        </svg>
      );
    case 'performance':
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={cls}>
          <path d="M4 13a8 8 0 1 1 16 0" />
          <path d="M12 13l3-3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={cls}>
          <rect x="4" y="12" width="4" height="8" rx="1" />
          <rect x="10" y="8" width="4" height="12" rx="1" />
          <rect x="16" y="4" width="4" height="16" rx="1" />
        </svg>
      );
  }
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="animate-on-scroll section-pad border-t border-border-muted">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle whitespace-pre-line">{siteConfig.servicesIntro}</p>
        </header>

        <div className="divide-y divide-border-muted rounded-2xl border border-border">
          {siteConfig.services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={service.title}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/[0.02] sm:px-8 sm:py-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ServiceIcon type={service.icon} />
                    </span>
                    <span className="text-lg font-semibold text-white sm:text-xl">
                      {service.title}
                    </span>
                  </div>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-lg font-light transition ${
                      isOpen ? 'rotate-45 border-primary text-primary' : 'text-muted'
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted sm:px-8 sm:pb-8 sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
