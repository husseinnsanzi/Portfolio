import { projects, publication, type Project } from "../content";
import { ArrowIcon } from "./Icons";

function Tags({ tags, note }: { tags: string[]; note?: string }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {note && (
        <li className="rounded-full border border-brand px-2.5 py-1 text-xs font-semibold text-brand">
          {note}
        </li>
      )}
      {tags.map((tag) => (
        <li key={tag} className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-[0_16px_40px_-28px_rgba(10,79,191,0.9)]"
    >
      <Tags tags={project.tags} note={project.note} />
      <h3 className="mt-4 text-xl font-semibold text-ink group-hover:text-brand">{project.title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
        {project.description.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand">
        {project.action}
        <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5 motion-reduce:transform-none" />
        <span className="sr-only"> (opens in a new tab)</span>
      </span>
    </a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-brand sm:text-5xl">Projects & Research</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Selected research and engineering work on distribution reliability, rural electrification, and transformer monitoring.
        </p>

        <a
          href={publication.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-[0_16px_40px_-28px_rgba(10,79,191,0.9)] sm:p-8"
        >
          <Tags tags={publication.tags} />
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h3 className="font-serif text-2xl tracking-tight text-ink group-hover:text-brand sm:text-3xl">
                {publication.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{publication.description[0]}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand">
              {publication.action}
              <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5 motion-reduce:transform-none" />
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </div>
        </a>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-600">
          More code on{" "}
          <a
            href="https://github.com/husseinnsanzi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand hover:underline"
          >
            github.com/husseinnsanzi
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </div>
    </section>
  );
}
