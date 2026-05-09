import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gradient-accent)] shadow-[var(--shadow-glow)]">
        <span className="absolute inset-[3px] rounded-full bg-background" />
        <span className="relative h-2 w-2 rounded-full bg-primary" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        NeoFlow <span className="text-muted-foreground font-normal">Labs</span>
      </span>
    </Link>
  );
}