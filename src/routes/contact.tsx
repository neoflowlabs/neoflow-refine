import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send, Instagram, Music2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NeoFlow Labs" },
      { name: "description", content: "Get in touch with NeoFlow Labs. Tell us what you're building and we'll come back with a precise plan." },
      { property: "og:title", content: "Contact NeoFlow Labs" },
      { property: "og:description", content: "Start a conversation about your next automation, IoT, or software project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/manpwyng", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("We'll get in touch shortly.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Get in touch</p>
          <h1 className="text-5xl md:text-7xl">Let's <span className="font-display-italic text-gradient-accent">build</span> something</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Share a few details about your project. We'll respond within one business day with next steps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-[1fr_1.5fr] gap-10">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3"><MapPin className="text-primary" size={18} /><span className="font-medium">Location</span></div>
            <p className="text-sm text-muted-foreground mt-2">Colombo, Sri Lanka — working with clients globally.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3"><Mail className="text-primary" size={18} /><span className="font-medium">Email</span></div>
            <p className="text-sm text-muted-foreground mt-2">neoflowlabs@gmail.com</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3"><Phone className="text-primary" size={18} /><span className="font-medium">Response time</span></div>
            <p className="text-sm text-muted-foreground mt-2">Within 1 business day, Mon–Fri.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3"><Phone className="text-primary" size={18} /><span className="font-medium">Phone</span></div>
            <a href="tel:+94779138604" className="text-sm text-muted-foreground mt-2 block hover:text-primary">0779138604</a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3"><Instagram className="text-primary" size={18} /><span className="font-medium">Social</span></div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="https://www.instagram.com/neoflow_labs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Instagram size={14} /> @neoflow_labs
              </a>
              <a href="https://www.tiktok.com/@neoflow.labs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Music2 size={14} /> @neoflow.labs
              </a>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <Field label="Company" name="company" placeholder="Where do you work?" />
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Project type</label>
            <select name="project-type" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary">
              <option>Automation / Internal Tools</option>
              <option>IoT / Connected Hardware</option>
              <option>Data & AI</option>
              <option>EduTech Platform</option>
              <option>POS / Booking System</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Tell us about your project</label>
            <textarea name="message" rows={5} placeholder="Goals, timeline, current systems..." className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={16} /> {sending ? "Sending..." : "Send message"}
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}