export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Developer terminal illustration"
    >
      <defs>
        <linearGradient id="hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#141b22" />
          <stop offset="100%" stopColor="#090d10" />
        </linearGradient>
        <linearGradient id="hero-glow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
        <pattern
          id="grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="#1e293b"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      <rect width="400" height="500" fill="url(#hero-bg)" />
      <rect width="400" height="500" fill="url(#grid)" opacity="0.4" />
      <ellipse cx="200" cy="80" rx="160" ry="100" fill="url(#hero-glow)" />

      {/* Terminal window */}
      <rect
        x="32"
        y="72"
        width="336"
        height="356"
        rx="10"
        fill="#0c1218"
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      <rect x="32" y="72" width="336" height="36" rx="10" fill="#141b22" />
      <rect x="32" y="96" width="336" height="12" fill="#141b22" />

      <circle cx="56" cy="90" r="5" fill="#ef4444" opacity="0.85" />
      <circle cx="76" cy="90" r="5" fill="#eab308" opacity="0.85" />
      <circle cx="96" cy="90" r="5" fill="#10b981" opacity="0.85" />
      <text
        x="200"
        y="94"
        textAnchor="middle"
        fill="#64748b"
        fontFamily="ui-monospace, monospace"
        fontSize="11"
      >
        joseph@portfolio ~ full-stack
      </text>

      {/* Code lines */}
      <g fontFamily="ui-monospace, monospace" fontSize="13">
        <text x="52" y="140" fill="#64748b">
          // stack.config.ts
        </text>
        <text x="52" y="168" fill="#10b981">
          const
        </text>
        <text x="98" y="168" fill="#e2e8f0">
          {' '}
          stack = [
        </text>
        <text x="68" y="196" fill="#94a3b8">
          &quot;React&quot;,
        </text>
        <text x="68" y="224" fill="#94a3b8">
          &quot;Node.js&quot;,
        </text>
        <text x="68" y="252" fill="#94a3b8">
          &quot;Express&quot;,
        </text>
        <text x="68" y="280" fill="#94a3b8">
          &quot;Prisma&quot;,
        </text>
        <text x="68" y="308" fill="#94a3b8">
          &quot;MySQL&quot;,
        </text>
        <text x="52" y="336" fill="#e2e8f0">
          ];
        </text>

        <text x="52" y="372" fill="#64748b">
          // ship()
        </text>
        <text x="52" y="400" fill="#10b981">
          await
        </text>
        <text x="108" y="400" fill="#e2e8f0">
          {' '}
          build(scalable);
        </text>
      </g>

      {/* Decorative nodes */}
      <circle cx="320" cy="420" r="28" fill="#10b981" fillOpacity="0.08" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="320" cy="420" r="6" fill="#10b981" />

      <rect x="48" y="430" width="120" height="6" rx="3" fill="#1e293b" />
      <rect x="48" y="430" width="88" height="6" rx="3" fill="#10b981" fillOpacity="0.7" />

      {/* Bracket accents */}
      <path
        d="M 12 200 L 12 300 M 12 200 L 22 200 M 12 300 L 22 300"
        stroke="#10b981"
        strokeWidth="2"
        strokeOpacity="0.35"
        fill="none"
      />
      <path
        d="M 388 180 L 388 260 M 388 180 L 378 180 M 388 260 L 378 260"
        stroke="#10b981"
        strokeWidth="2"
        strokeOpacity="0.25"
        fill="none"
      />
    </svg>
  );
}
