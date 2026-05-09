import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Globe2, BarChart3, Sparkles, GraduationCap, Boxes } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeoFlow Labs — Engineering the Future of Industry" },
      { name: "description", content: "Intelligent automation, IoT systems, and EduTech platforms — precision-engineered in Sri Lanka." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-dot opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" /> Sri Lanka · Technology Lab
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl leading-[1.05]">
              Engineering the<br />
              <span className="font-display-italic text-gradient-accent">Future</span> of Industry
            </h1>
            <p className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
              NeoFlow Labs designs and builds intelligent automation, IoT systems, and EduTech platforms — precision-engineered for businesses that demand more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-primary/60">
                Our Story
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-3 max-w-lg">
              {[
                { k: "4+", v: "Service Areas" },
                { k: "8+", v: "Live Projects" },
                { k: "100%", v: "Custom Built" },
                { k: "LK", v: "Sri Lanka" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-border/60 bg-card/40 p-3 text-center">
                  <div className="font-display text-2xl text-primary">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating service cards */}
          <div className="relative h-[420px] hidden md:block">
            <FloatingCard className="top-0 left-8" icon={<Cpu />} title="Process Automation" sub="End-to-end workflow intelligence" />
            <FloatingCard className="top-32 right-0" icon={<Globe2 />} title="IoT Ecosystem" sub="Connect · Monitor · Optimise" />
            <FloatingCard className="bottom-0 left-16" icon={<BarChart3 />} title="Data & AI" sub="Actionable insights from your data" />
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                <path d="M120 80 Q200 200 280 160" stroke="oklch(0.72 0.19 45 / 0.3)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M280 160 Q220 280 140 340" stroke="oklch(0.72 0.19 45 / 0.3)" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">What we do</p>
            <h2 className="text-4xl md:text-5xl max-w-2xl">Systems that work in the <span className="font-display-italic text-gradient-accent">real world</span></h2>
          </div>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2">
            All services <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: <Cpu />, title: "Automation", desc: "Smart product and process automation tailored to your operational needs and scale." },
            { icon: <Globe2 />, title: "IoT Solutions", desc: "Connected systems to monitor, control, and optimise your entire infrastructure." },
            { icon: <Sparkles />, title: "Problem Solving", desc: "From concept to deployment — we transform complex challenges into elegant technology." },
            { icon: <BarChart3 />, title: "Data & AI", desc: "Turn raw operational data into dashboards, forecasts, and decisions you can act on." },
            { icon: <GraduationCap />, title: "EduTech", desc: "Platforms for learning, assessment, and engagement — built for institutions and creators." },
            { icon: <Boxes />, title: "Custom Software", desc: "POS, booking, and management systems engineered around how your business actually runs." },
          ].map((c) => (
            <div key={c.title} className="group relative rounded-2xl border border-border/60 bg-card p-7 transition-all hover:border-primary/50 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">{c.icon}</div>
              <h3 className="text-xl mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 bg-hero">
          <div className="absolute inset-0 grid-dot opacity-50" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl">Have a complex problem? <span className="font-display-italic text-gradient-accent">Let's engineer it.</span></h2>
            </div>
            <div className="md:text-right">
              <p className="text-muted-foreground max-w-md md:ml-auto mb-6">
                Tell us what you're building. We'll come back with a precise plan, timeline, and the right tech stack.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)]">
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FloatingCard({ className = "", icon, title, sub }: { className?: string; icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className={`absolute w-64 rounded-2xl border border-border/70 bg-card/90 backdrop-blur-md p-5 shadow-[var(--shadow-card)] ${className}`}>
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary mb-3">{icon}</div>
      <div className="font-medium text-sm">{title}</div>
      <div className="text-xs text-muted-foreground mt-1">{sub}</div>
    </div>
  );
}
