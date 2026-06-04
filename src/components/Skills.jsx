import { siteConfig } from '../data/siteConfig.js';
import TechMarquee from './TechMarquee.jsx';

export default function Skills() {
  return (
    <section className="animate-on-scroll section-pad border-t border-border-muted">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">{siteConfig.skillsIntro}</p>
        </header>

        <TechMarquee />
      </div>
    </section>
  );
}
