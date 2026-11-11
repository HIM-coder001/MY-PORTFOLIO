import { siteConfig } from '../data/siteConfig.js';

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
    </svg>
  );
}

export default function ScheduleCallLink({ className = '' }) {
  return (
    <a
      href={siteConfig.calUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`schedule-call-pill ${className}`}
    >
      <span>Schedule call</span>
      <span className="schedule-call-icon">
        <ArrowIcon />
      </span>
    </a>
  );
}