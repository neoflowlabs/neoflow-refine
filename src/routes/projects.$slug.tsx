import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = getProjectBySlug(params.slug);
    const title = p ? `${p.title} — NeoFlow Labs` : "Project — NeoFlow Labs";
    const description = p?.desc ?? "Project case study from NeoFlow Labs.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-4xl mb-4">Project not found</h1>
      <Link to="/projects" className="text-primary underline">Back to projects</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl mb-4">Something went wrong</h1>
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  const isYouTube = project.videoUrl && /youtube\.com|youtu\.be/.test(project.videoUrl);
  const isVimeo = project.videoUrl && /vimeo\.com/.test(project.videoUrl);
  const isEmbed = isYouTube || isVimeo;

  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-12">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft size={16} /> All projects
          </Link>
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{project.tag}</p>
          <h1 className="text-4xl md:text-6xl">{project.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{project.longDesc ?? project.desc}</p>
          <div className="flex gap-2 flex-wrap mt-6">
            {project.chips.map((c) => (
              <span key={c} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="aspect-video w-full bg-background">
            {project.videoUrl ? (
              isEmbed ? (
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video src={project.videoUrl} controls className="w-full h-full object-contain" />
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center text-center px-8">
                <div>
                  <p className="text-sm uppercase tracking-widest text-primary mb-3">Video coming soon</p>
                  <p className="text-muted-foreground max-w-md">
                    A walkthrough of {project.title} will appear here. Add the video URL to this project to embed it.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-2xl mb-6">More projects</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {otherProjects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-widest text-primary mb-2">{p.tag}</p>
              <h3 className="text-lg">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}