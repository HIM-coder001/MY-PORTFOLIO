import { useEffect, useState } from 'react';
import ScheduleCallLink from './ScheduleCallLink.jsx';

export default function ScheduleButton() {
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  if (contactVisible) return null;

  return (
    <ScheduleCallLink className="fixed bottom-4 right-4 z-50 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 sm:bottom-6 sm:right-6" />
  );
}
