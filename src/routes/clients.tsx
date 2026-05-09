import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — NeoFlow Labs" },
      { name: "description", content: "Trusted by businesses across Sri Lanka — restaurants, clinics, service centres, and more." },
      { property: "og:title", content: "Clients — NeoFlow Labs" },
      { property: "og:description", content: "Real partnerships across hospitality, healthcare, education, and services." },
    ],
  }),
  component: ClientsPage,
});

const SECTORS = ["Hospitality", "Healthcare", "Automotive", "Education", "Retail", "Logistics", "Services", "F&B"];

const TESTIMONIALS = [
  { quote: "NeoFlow rebuilt our ordering flow and our kitchen finally runs in sync. Sales up, mistakes down.", who: "Operations Lead", where: "Pizza Restaurant" },
  { quote: "They didn't just deliver a system — they understood the problem better than we did.", who: "Owner", where: "Vehicle Service Centre" },
  { quote: "From sensors to dashboards, the whole IoT setup just works. Reliable and well-documented.", who: "Facility Manager", where: "Manufacturing" },
];

function ClientsPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Client success</p>
          <h1 className="text-5xl md:text-7xl">Trusted by businesses across <span className="font-display-italic text-gradient-accent">Sri Lanka</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            From restaurants to clinics, service centres to burger chains — we build systems that work in the real world.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SECTORS.map((s) => (
            <div key={s} className="rounded-xl border border-border bg-card py-6 text-center text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors">
              {s}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure key={t.quote} className="rounded-2xl border border-border bg-card p-7 flex flex-col">
              <Quote className="text-primary mb-4" size={22} />
              <blockquote className="text-base leading-relaxed text-foreground/90 flex-1">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium">{t.who}</div>
                <div className="text-muted-foreground">{t.where}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl">Be our next <span className="font-display-italic text-gradient-accent">success story</span></h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Tell us what you're building. We'll come back with a clear path forward.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)]">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}