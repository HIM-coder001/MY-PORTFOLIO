import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiGit,
} from 'react-icons/si';

const iconClass = 'h-6 w-6 shrink-0';

export default function SkillIcon({ skill }) {
  switch (skill) {
    case 'JavaScript':
      return <SiJavascript className={iconClass} color="#F7DF1E" title="JavaScript" />;
    case 'TypeScript':
      return <SiTypescript className={iconClass} color="#3178C6" title="TypeScript" />;
    case 'Node.js':
      return <SiNodedotjs className={iconClass} color="#339933" title="Node.js" />;
    case 'Express':
      return <SiExpress className={iconClass} color="#ffffff" title="Express" />;
    case 'React':
      return <SiReact className={iconClass} color="#61DAFB" title="React" />;
    case 'Tailwind CSS':
      return <SiTailwindcss className={iconClass} color="#06B6D4" title="Tailwind CSS" />;
    case 'Prisma':
      return <SiPrisma className={iconClass} color="#ffffff" title="Prisma" />;
    case 'MySQL':
      return <SiMysql className={iconClass} color="#4479A1" title="MySQL" />;
    case 'MongoDB':
      return <SiMongodb className={iconClass} color="#47A248" title="MongoDB" />;
    case 'HTML5':
      return <SiHtml5 className={iconClass} color="#E34F26" title="HTML5" />;
    case 'CSS3':
      return <SiCss className={iconClass} color="#1572B6" title="CSS3" />;
    case 'Git':
      return <SiGit className={iconClass} color="#F05032" title="Git" />;
    default:
      return (
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/20 text-xs font-bold text-primary"
          aria-hidden="true"
        >
          {skill.slice(0, 2)}
        </span>
      );
  }
}
