import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Globe2, BarChart3, GraduationCap, Boxes, Sparkles, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NeoFlow Labs" },
      { name: "description", content: "Automation, IoT, Data & AI, EduTech, and custom software — engineered end-to-end for your business." },
      { property: "og:title", content: "Services — NeoFlow Labs" },
      { property: "og:description", content: "From POS to predictive dashboards, we build precision systems for how you actually operate." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: <Cpu />, title: "Process Automation", desc: "Workflow intelligence that eliminates repetitive work and connects every step of your operation.", points: ["Custom internal tools", "Workflow & approval flows", "Integrations with existing software"] },
  { icon: <Globe2 />, title: "IoT Solutions", desc: "Hardware-to-cloud platforms for monitoring, controlling, and optimising physical infrastructure.", points: ["Sensor & device integration", "Real-time dashboards", "Edge + cloud architectures"] },
  { icon: <BarChart3 />, title: "Data & AI", desc: "Turn operational data into clear answers with dashboards, forecasts, and embedded ML.", points: ["Reporting & analytics", "Forecasting models", "AI assistants & chatbots"] },
  { icon: <GraduationCap />, title: "EduTech Platforms", desc: "Learning, assessment, and engagement systems for institutions, creators, and training providers.", points: ["LMS & content delivery", "Assessment engines", "Student analytics"] },
  { icon: <Boxes />, title: "Custom Business Software", desc: "POS, booking, and management systems engineered around how your business actually runs.", points: ["POS & kitchen display", "Booking & scheduling", "Multi-outlet management"] },
  { icon: <Sparkles />, title: "Product Engineering", desc: "End-to-end product builds — from discovery to launch and iteration.", points: ["Web & mobile apps", "API & backend systems", "Design & UX"] },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">What we build</p>
          <h1 className="text-5xl md:text-7xl">Services <span className="font-display-italic text-gradient-accent">crafted</span> for your operation</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're digitising a workflow, deploying sensors, or launching a product — we cover the full stack of engineering, design, and infrastructure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/50 transition-colors">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">{s.icon}</div>
              <h3 className="text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
          <h2 className="text-3xl md:text-4xl">Not sure which service fits? <span className="font-display-italic text-gradient-accent">Let's scope it together.</span></h2>
          <div className="md:text-right">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)]">
              Book a discovery call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}