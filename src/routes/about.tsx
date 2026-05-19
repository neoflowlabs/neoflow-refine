import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Lightbulb, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "IoT & Automation Company — About NeoFlow Labs" },
      { name: "description", content: "A Sri Lankan technology lab building automation, IoT, and EduTech systems for businesses around the world." },
      { property: "og:title", content: "IoT & Automation Company — About NeoFlow Labs" },
      { property: "og:description", content: "Engineers, designers, and problem solvers building precision software and hardware." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">About NeoFlow Labs</p>
          <h1 className="text-5xl md:text-7xl">A lab where ideas become <span className="font-display-italic text-gradient-accent">working systems</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a small team of engineers, designers, and operators based in Sri Lanka. We partner with businesses to design intelligent automation, connected IoT platforms, and EduTech experiences that perform in the real world — not just on paper.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Our story</p>
          <h2 className="text-4xl">Built by makers, for makers</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>NeoFlow Labs started with a simple observation: most businesses don't need more software — they need the <span className="text-foreground">right</span> software, deeply tailored to how they actually operate.</p>
            <p>So we built a lab. One that blends product engineering, embedded systems, and data infrastructure under one roof. From a single POS terminal in a burger kitchen to multi-outlet IoT dashboards, every project is custom-built and shipped with care.</p>
            <p>Today we work with restaurants, clinics, service centres, and educational institutions across Sri Lanka — and we're just getting started.</p>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            { icon: <Target />, title: "Precision over hype", desc: "We measure twice, cut once. Boring engineering, exceptional outcomes." },
            { icon: <Lightbulb />, title: "First-principles thinking", desc: "We start with the problem, not the trend. The right tool wins." },
            { icon: <ShieldCheck />, title: "Production-grade by default", desc: "Reliability, observability, and security baked into every build." },
            { icon: <Users />, title: "Real partnerships", desc: "We embed with your team — not as a vendor, but as a co-builder." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/15 text-primary flex items-center justify-center">{v.icon}</div>
              <div>
                <h3 className="text-lg">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl">Want to see how we work?</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Browse our recent projects or get in touch with a brief — we'll come back with a clear path forward.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)]">View Projects <ArrowRight size={16} /></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:border-primary/60">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
