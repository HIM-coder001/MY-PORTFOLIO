import { techRowOne, techRowTwo } from '../data/techStack.js';
import SkillIcon from './SkillIcon.jsx';

function TechBadge({ label }) {
  return (
    <span className="mx-3 inline-flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 hover:border-white/20">
      <SkillIcon skill={label} />
      {label}
    </span>
  );
}

function MarqueeSequence({ items, idPrefix }) {
  return (
    <div className="flex w-max shrink-0 items-center">
      {items.map((item) => (
        <TechBadge key={`${idPrefix}-${item}`} label={item} />
      ))}
    </div>
  );
}

function MarqueeRow({ items, direction = 'ltr' }) {
  const trackClass = direction === 'ltr' ? 'marquee-track-ltr' : 'marquee-track-rtl';

  return (
    <div className="marquee-mask relative w-full overflow-hidden py-3">
      <div className={`flex w-max ${trackClass}`}>
        <MarqueeSequence items={items} idPrefix={`${direction}-a`} />
        <MarqueeSequence items={items} idPrefix={`${direction}-b`} />
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="w-full space-y-2" aria-label="Technical skills">
      <MarqueeRow items={techRowOne} direction="ltr" />
      <MarqueeRow items={techRowTwo} direction="rtl" />
    </div>
  );
}
