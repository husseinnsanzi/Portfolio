import { useEffect, useState } from "react";
import { navLinks, resumePath } from "../content";
import { BoltIcon, CloseIcon, FileIcon, MenuIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    function onScroll() {
      const marker = window.scrollY + 140;
      let current: string = navLinks[0].id;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = link.id;
      }
      setActive(current);
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur ${
        scrolled ? "border-slate-200 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-brand px-3.5 py-1.5 text-sm font-semibold text-brand">
          <BoltIcon className="h-4 w-4" />
          Hussein
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 rounded-full bg-slate-100 p-1 lg:block"
        >
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-current={active === link.id ? "location" : undefined}
                  className={`block rounded-full px-3 py-1.5 text-sm font-medium ${
                    active === link.id
                      ? "bg-white text-brand shadow-sm"
                      : "text-slate-600 hover:text-brand"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark lg:inline-flex"
        >
          <FileIcon className="h-4 w-4" />
          Resume
          <span className="sr-only"> (opens PDF in a new tab)</span>
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-base font-medium text-ink hover:bg-mist hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white"
          >
            <FileIcon className="h-4 w-4" />
            Resume
            <span className="sr-only"> (opens PDF in a new tab)</span>
          </a>
        </nav>
      )}
    </header>
  );
}
