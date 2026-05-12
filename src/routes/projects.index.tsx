import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — NeoFlow Labs" },
      { name: "description", content: "Selected work from NeoFlow Labs — POS, booking, IoT, and management systems built for real businesses." },
      { property: "og:title", content: "Projects — NeoFlow Labs" },
      { property: "og:description", content: "Custom-built systems for restaurants, clinics, service centres, and beyond." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Selected work</p>
          <h1 className="text-5xl md:text-7xl">Real systems, <span className="font-display-italic text-gradient-accent">running today</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A snapshot of what we've shipped recently — each one custom-built for the people who use it every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl border border-border bg-card p-7 hover:border-primary/50 transition-all hover:-translate-y-1 block"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs uppercase tracking-widest text-primary">{String(i + 1).padStart(2, "0")} · {p.tag}</span>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {p.chips.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">{c}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)]">
            Start your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}