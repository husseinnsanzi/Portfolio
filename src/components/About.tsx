import { aboutParagraphs, education } from "../content";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-brand sm:text-5xl">About Me</h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-slate-700 sm:text-[17px] sm:leading-8 text-center text-justify">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <h3 className="mt-16 font-serif text-3xl tracking-tight text-brand sm:text-4xl">
          Education & Training
        </h3>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <li key={item.title} className="rounded-2xl border border-slate-200 bg-white px-5 py-5">
              <h4 className="text-lg font-semibold text-ink">{item.title}</h4>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
