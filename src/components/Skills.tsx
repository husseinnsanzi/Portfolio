import { type KeyboardEvent, useState } from "react";
import { professionalSkills, skillGroups } from "../content";

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const current = skillGroups.find((group) => group.id === active) ?? skillGroups[0];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = skillGroups.findIndex((group) => group.id === active);
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? skillGroups[(index + 1) % skillGroups.length]
        : skillGroups[(index - 1 + skillGroups.length) % skillGroups.length];
    setActive(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  }

  return (
    <section id="skills" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-brand sm:text-5xl">Skills</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Power systems, computational tools, and the training I use to investigate electricity distribution, reliability, and energy access.
        </p>

        <div
          role="tablist"
          aria-label="Skill categories"
          className="mt-8 flex flex-wrap gap-3"
          onKeyDown={onKeyDown}
        >
          {skillGroups.map((group) => {
            const selected = group.id === active;
            return (
              <button
                key={group.id}
                id={`tab-${group.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${group.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(group.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  selected
                    ? "bg-brand text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-brand hover:text-brand"
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </div>

        <div
          key={current.id}
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          className="tab-panel mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {current.items.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 transition hover:border-brand"
            >
              <h3 className="font-semibold text-ink">{item.name}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>

        <h3 className="mt-12 text-sm font-semibold tracking-wide text-ink">Professional Skills</h3>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {professionalSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-sm font-medium text-brand"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
