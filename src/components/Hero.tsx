import { heroIntro, resumePath } from "../content";
import { FileIcon } from "./Icons";

export function Hero() {
  return (
    <section id="home" className="hero-grid scroll-mt-20 overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.72fr)] lg:gap-14">
        <div>
          <h1 className="font-serif text-5xl tracking-tight text-ink sm:text-6xl">
            Hi, I&apos;m <span className="text-brand">Hussein</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-[17px] sm:leading-8">
            {heroIntro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              <FileIcon className="h-4 w-4" />
              My Resume
              <span className="sr-only"> (opens PDF in a new tab)</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-brand px-5 py-2.5 text-sm font-semibold text-brand hover:bg-brand hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
        <img
          src="/images/hussein-about.jpg"
          alt="Hussein Nsanzimfura at the Nuclear Energy Innovation Summit for Africa in Kigali"
          className="mx-auto aspect-square w-full max-w-xs rounded-full object-cover object-center shadow-[0_24px_50px_-28px_rgba(10,79,191,0.8)] sm:max-w-sm lg:max-w-[22rem]"
        />
      </div>
    </section>
  );
}
