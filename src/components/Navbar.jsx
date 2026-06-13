import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    if (window.lenis) {
      window.lenis.scrollTo(el, { offset: -80 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="relative z-10"
      aria-hidden="true"
    >
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState('hero');
  const ticking = useRef(false);

  useEffect(() => {
    const sectionIds = ['hero', ...navLinks.map((l) => l.id)];

    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        // Find which section's top is closest to (but not past) 30% down the viewport
        const threshold = window.innerHeight * 0.3;
        let current = sectionIds[0];

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top <= threshold) {
            current = id;
          }
        }

        setActiveId(current);
        ticking.current = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-6">
      <nav
        className="pointer-events-auto flex h-14 max-w-[calc(100vw-48px)] items-center justify-center rounded-full border border-white/[0.04] px-1.5 py-5 backdrop-blur-[11px]"
        style={{ backgroundColor: 'rgba(28, 28, 28, 0.62)' }}
        aria-label="Main navigation"
      >
        <div className="flex items-center overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className={`relative flex shrink-0 items-center justify-center whitespace-nowrap px-4 py-3 text-sm transition-colors duration-300 ${activeId === 'hero' ? 'text-gray-900' : 'text-white hover:text-gray-300'
              }`}
            aria-label="Home"
            aria-current={activeId === 'hero' ? 'page' : undefined}
          >
            {activeId === 'hero' && (
              <motion.span
                layoutId="activeNav"
                className="absolute inset-0 rounded-full bg-white"
                style={{ zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                aria-hidden="true"
              />
            )}
            <HomeIcon />
          </button>

          <div className="flex shrink-0 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`relative flex shrink-0 items-center justify-center whitespace-nowrap px-4 py-3 text-sm transition-colors duration-300 ${activeId === link.id ? 'text-gray-900' : 'text-white hover:text-gray-300'
                  }`}
                aria-current={activeId === link.id ? 'page' : undefined}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-white"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 font-medium">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
