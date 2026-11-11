import { techRowOne, techRowTwo } from '../data/techStack.js';
import SkillIcon from './SkillIcon.jsx';

function TechBadge({ label }) {
  return (
    <span className="mx-1.5 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/90 shadow-xl backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 sm:mx-3 sm:gap-3 sm:px-6 sm:py-3 sm:text-sm">
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
