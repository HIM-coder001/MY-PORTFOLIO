import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const roles = [
  { label: 'frontend developer', className: 'text-accent-frontend' },
  { label: 'backend developer', className: 'text-accent-backend' },
  { label: 'full-stack developer', className: 'text-accent-fullstack' },
];

export default function RotatingRole() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(
      () => setIndex((value) => (value + 1) % roles.length),
      2400
    );
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <p className="rotating-role flex w-full flex-wrap items-baseline justify-center gap-x-2 text-center text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
      <span className="sr-only">
        I&apos;m Joseph Maina, a full-stack developer.
      </span>
      <span className="text-white" aria-hidden="true">
        I&apos;m Joseph Maina, a
      </span>
      <span className="relative inline-flex h-[1.3em] items-baseline justify-center overflow-hidden" aria-hidden="true">
        {reduceMotion ? (
          <span className="text-accent-fullstack">full-stack developer</span>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={index}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.2, 0.65, 0.3, 0.9] }}
              className={`whitespace-nowrap ${roles[index].className}`}
            >
              {roles[index].label}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
    </p>
  );
}