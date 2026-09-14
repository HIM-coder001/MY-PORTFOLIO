import { siteConfig } from '../data/siteConfig.js';

export default function About() {
  return (
    <section id="about" className="animate-on-scroll section-pad border-t border-border-muted">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="section-label">About</p>
          <h2 className="section-title">Building with curiosity and purpose.</h2>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
          <p>{siteConfig.aboutIntro}</p>
          <p>
            I am graduating in December 2026 and looking for opportunities to contribute to a thoughtful engineering team, build useful products, and keep growing through real-world work.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">Graduating December 2026</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">Full-stack web development</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">Open to graduate roles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
