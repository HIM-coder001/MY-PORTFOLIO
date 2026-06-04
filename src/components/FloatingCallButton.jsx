import { siteConfig } from '../data/siteConfig.js';

export default function FloatingCallButton() {
  return (
    <a
      href={siteConfig.contactFormEndpoint?.trim() ? siteConfig.contactFormEndpoint : `mailto:${siteConfig.email}`}
      target={siteConfig.contactFormEndpoint?.trim() ? '_blank' : undefined}
      rel={siteConfig.contactFormEndpoint?.trim() ? 'noopener noreferrer' : undefined}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[#3b29ff]/30 bg-[#3b29ff]/95 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-30px_rgba(59,41,255,0.8)] transition hover:-translate-y-1 hover:bg-[#3b29ff]"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </span>
      Contact me
    </a>
  );
}
