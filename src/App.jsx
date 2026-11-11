import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar.jsx';
import ScheduleButton from './components/ScheduleButton.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;
    window.dispatchEvent(new Event('portfolio:lenis-ready'));

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  // Reveal-on-scroll for whichever route is mounted.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll('.animate-on-scroll:not(.is-visible)')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  // Scroll management on route change: land below the fixed navbar, or jump to a
  // requested section when arriving from another route.
  useEffect(() => {
    const target = location.state?.scrollTo;
    const rafId = requestAnimationFrame(() => {
      if (target) {
        const el = document.getElementById(target);
        if (el && window.lenis) window.lenis.scrollTo(el, { offset: -80 });
        else if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(rafId);
  }, [location.pathname, location.state]);

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="relative z-0 flex min-h-svh flex-col items-center bg-bg text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ScheduleButton />
      </div>
    </>
  );
}