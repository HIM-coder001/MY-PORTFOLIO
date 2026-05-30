import { techRowOne, techRowTwo } from '../data/techStack.js';

function TechBadge({ label }) {
  return (
    <span className="mx-2 inline-flex shrink-0 items-center rounded-md border border-border-slate bg-slate-card px-4 py-2 font-mono text-xs font-medium text-slate-200 sm:text-sm">
      <span
        className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-accent"
        aria-hidden="true"
      />
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
  const trackClass =
    direction === 'ltr' ? 'marquee-track-ltr' : 'marquee-track-rtl';

  return (
    <div className="marquee-mask relative w-full overflow-hidden py-2">
      <div className={`flex w-max ${trackClass}`}>
        <MarqueeSequence items={items} idPrefix={`${direction}-a`} />
        <MarqueeSequence items={items} idPrefix={`${direction}-b`} />
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="w-full space-y-1" aria-label="Technical skills">
      <MarqueeRow items={techRowOne} direction="ltr" />
      <MarqueeRow items={techRowTwo} direction="rtl" />
    </div>
  );
}
