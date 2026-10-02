import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'about', label: 'About' },
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

  useEffect(() => {
    const sectionIds = ['hero', ...navLinks.map((l) => l.id)];

    function updateActiveSection(scrollPosition = window.scrollY) {
      const threshold = window.innerHeight * 0.3;
      const currentPosition = scrollPosition + threshold;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= currentPosition) current = id;
      }

      setActiveId((activeId) => (activeId === current ? activeId : current));
    }

    function subscribeToLenis() {
      if (window.lenis) {
        const handleLenisScroll = ({ scroll }) => updateActiveSection(scroll);
        window.lenis.on('scroll', handleLenisScroll);
        updateActiveSection(window.lenis.scroll);
        return () => window.lenis?.off('scroll', handleLenisScroll);
      }

      window.addEventListener('scroll', updateActiveSection, { passive: true });
      return () => window.removeEventListener('scroll', updateActiveSection);
    }

    let unsubscribe = subscribeToLenis();
    const handleLenisReady = () => {
      unsubscribe();
      unsubscribe = subscribeToLenis();
    };

    window.addEventListener('portfolio:lenis-ready', handleLenisReady);
    updateActiveSection();

    return () => {
      unsubscribe();
      window.removeEventListener('portfolio:lenis-ready', handleLenisReady);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-6 sm:pt-6">
      <nav
        className="pointer-events-auto flex h-12 w-full max-w-sm items-center justify-center rounded-full border border-white/[0.04] px-1 backdrop-blur-[11px] sm:h-14 sm:w-auto sm:max-w-[calc(100vw-48px)] sm:px-1.5"
        style={{ backgroundColor: 'rgba(28, 28, 28, 0.62)' }}
        aria-label="Main navigation"
      >
        <div className="flex w-full items-center justify-between sm:w-auto sm:justify-center">
          {/* Home button */}
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className={`relative flex shrink-0 items-center justify-center rounded-full px-3 py-2.5 transition-colors duration-300 sm:px-4 sm:py-3 ${
              activeId === 'hero' ? 'text-gray-900' : 'text-white hover:text-gray-300'
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

          {/* Nav links */}
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className={`relative flex shrink-0 items-center justify-center rounded-full px-3 py-2.5 text-xs font-medium transition-colors duration-300 sm:px-4 sm:py-3 sm:text-sm ${
                activeId === link.id ? 'text-gray-900' : 'text-white hover:text-gray-300'
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
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
