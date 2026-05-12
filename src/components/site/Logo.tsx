import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/logo.png";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img src={logoUrl} alt="NeoFlow Labs logo" className="h-9 w-9 object-contain" />
      <span className="font-display text-lg font-semibold tracking-tight">
        NeoFlow <span className="text-muted-foreground font-normal">Labs</span>
      </span>
    </Link>
  );
}