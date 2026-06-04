const iconClass = 'h-7 w-7 shrink-0';

export default function SkillIcon({ skill }) {
  switch (skill) {
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <text x="5" y="17" fontSize="10" fontWeight="700" fill="#000">
            JS
          </text>
        </svg>
      );
    case 'TypeScript':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#3178C6" />
          <text x="4" y="16" fontSize="9" fontWeight="700" fill="#fff">
            TS
          </text>
        </svg>
      );
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="#68A063" aria-hidden="true">
          <path d="M11.5 1.5c-4.2 0-7.5 3.4-7.5 7.6 0 3.3 2.1 6.1 5.1 7.2l-.9 3.3 3.6-1.9c.5.1 1 .1 1.5.1 4.2 0 7.5-3.4 7.5-7.6S15.7 1.5 11.5 1.5z" />
        </svg>
      );
    case 'Express':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#fff" />
          <text x="3" y="16" fontSize="9" fontWeight="700" fill="#000">
            Ex
          </text>
        </svg>
      );
    case 'React':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="#61DAFB" strokeWidth="1.2" aria-hidden="true">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="#38BDF8" aria-hidden="true">
          <path d="M12 6c-2.8 0-5 1.3-5 3s2.2 3 5 3 5-1.3 5-3-2.2-3-5-3zm0 5c-2.8 0-5 1.3-5 3s2.2 3 5 3 5-1.3 5-3-2.2-3-5-3zm-5-8C4.3 3 3 3.9 3 5s1.3 2 4 2 4-.9 4-2-1.3-2-4-2zm10 0c-2.7 0-4 1-4 2s1.3 2 4 2 4-1 4-2-1.3-2-4-2z" />
        </svg>
      );
    case 'Prisma':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="#2D3748" aria-hidden="true">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.5 3.75v7.1L12 18.8l-7.5-3.75v-7.1L12 4.2z" />
        </svg>
      );
    case 'MySQL':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="#00758F" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v8c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
          <path d="M4 10v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" opacity="0.7" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="#13AA52" aria-hidden="true">
          <path d="M12 2C9 6 8 10 8 14c0 3 1.5 6 4 8 0-4 .5-8 2-12 1.5 4 2 8 2 12 2.5-2 4-5 4-8 0-4-1-8-4-12z" />
        </svg>
      );
    case 'HTML5':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="#E34F26" aria-hidden="true">
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4zm14 5H7l.5 3h9.5l-.5 4H8l.5 3h7l4-13z" />
        </svg>
      );
    case 'CSS3':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="#1572B6" aria-hidden="true">
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4zm14 5H7l.5 3h9.5l-.5 4H8l.5 3h7l4-13z" />
        </svg>
      );
    case 'Git':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="#F05032" aria-hidden="true">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2l-1.4 1.4-3.8-3.8-3.8 3.8-1.4-1.4 3.8-3.8-3.8-3.8 1.4-1.4 3.8 3.8 3.8-3.8 1.4 1.4-3.8 3.8 3.8 3.8z" />
        </svg>
      );
    default:
      return (
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/20 text-xs font-bold text-primary"
          aria-hidden="true"
        >
          {skill.slice(0, 2)}
        </span>
      );
  }
}
