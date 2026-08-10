export function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.5"
      >
        <circle cx="32" cy="32" r="30" strokeWidth="1" />
        <path d="M16 40 L16 26 L23 33 L32 20 L41 33 L48 26 L48 40 Z" strokeLinejoin="round" />
        <line x1="16" y1="44" x2="48" y2="44" />
      </svg>
      <span
        className={`font-display text-lg font-bold tracking-tight sm:text-xl ${
          dark ? "text-ink-foreground" : "text-foreground"
        }`}
      >
        Edu<span className="text-gold">rown</span>
      </span>
    </span>
  );
}
