import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Skills from './components/Skills.jsx';
import ContactFooter from './components/ContactFooter.jsx';
import ScheduleButton from './components/ScheduleButton.jsx';

export default function App() {
  useEffect(() => {
    // Initialize Lenis
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

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Initialize reveal on scroll observer
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

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="flex min-h-svh flex-col items-center bg-bg text-white relative z-0">
        <Navbar />

        <main className="w-full max-w-[1200px] px-5 pt-24">
          <Hero />
          <ProjectShowcase />
          <Services />
          <Process />
          <Skills />
        </main>

        <ContactFooter />
        <ScheduleButton />
      </div>
    </>
  );
}
