import { conferences } from "../content";

export function Conferences() {
  return (
    <section id="conferences" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <h2 className="font-serif text-4xl tracking-tight text-brand sm:text-5xl">Conferences & Events</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Summits and public forums on energy access, reliability, and sustainable power in Africa.
        </p>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {conferences.map((event) => (
            <li key={event.title} className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {event.image ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <img
                    src={event.image}
                    alt={event.imageAlt}
                    className={`h-full w-full object-cover ${event.imageClass ?? "object-center"}`}
                    loading="lazy"
                  />
                  {event.year && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand">
                      {event.year}
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex aspect-[16/10] flex-col justify-between bg-mist px-5 py-5">
                  <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand ring-1 ring-brand/15">
                    {event.year}
                  </span>
                  <p className="max-w-[12rem] font-serif text-3xl leading-tight text-brand">{event.mark}</p>
                </div>
              )}
              <div className="flex flex-1 flex-col px-5 py-5">
                <h3 className="text-lg font-semibold leading-snug text-ink">{event.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{event.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
