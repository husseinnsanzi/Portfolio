import { type FormEvent, useState } from "react";
import { email, socials } from "../content";
import { SocialIcon } from "./Icons";

const reasons = [
  "Research or collaboration",
  "Project discussion",
  "Training",
  "General inquiry",
];

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [reason, setReason] = useState(reasons[0]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !from.trim() || !subject.trim() || !message.trim()) {
      setError("Please complete every field.");
      setSent(false);
      return;
    }
    if (!from.includes("@")) {
      setError("Enter an email address so I can reply.");
      setSent(false);
      return;
    }

    const body = `Name: ${name.trim()}\nEmail: ${from.trim()}\nReason: ${reason}\n\n${message.trim()}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`;
    setError("");
    setSent(true);
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-slate-500 focus:border-brand";

  return (
    <section id="contact" className="scroll-mt-20 bg-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-serif text-4xl tracking-tight text-brand sm:text-5xl">Get in Touch</h2>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-700">
            I welcome conversations with engineers, researchers, and collaborators working toward a more reliable and sustainable energy future.
          </p>
          <a href={`mailto:${email}`} className="mt-6 inline-block text-lg font-semibold text-brand hover:underline">
            {email}
          </a>
          <ul className="mt-8 space-y-3">
            {socials.map((item) => {
              const external = !item.href.startsWith("mailto:");
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-3 font-medium text-ink hover:text-brand"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand ring-1 ring-slate-200">
                      <SocialIcon label={item.label} className="h-4 w-4" />
                    </span>
                    {item.label}
                    {external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink">
              Name
              <input className={fieldClass} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Your name" />
            </label>
            <label className="block text-sm font-medium text-ink">
              Email
              <input className={fieldClass} type="email" value={from} onChange={(e) => setFrom(e.target.value)} autoComplete="email" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium text-ink">
            Reason for contact
            <select className={fieldClass} value={reason} onChange={(e) => setReason(e.target.value)}>
              {reasons.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            Subject
            <input className={fieldClass} value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Brief overview of your message" />
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            Message
            <textarea className={`${fieldClass} min-h-36 resize-y`} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me more about your inquiry..." />
          </label>
          {error && (
            <p role="alert" className="mt-4 text-sm font-medium text-red-700">
              {error}
            </p>
          )}
          {sent && (
            <p className="mt-4 text-sm text-slate-600">
              Your email app should open with this message. If it does not, write directly to {email}.
            </p>
          )}
          <button type="submit" className="mt-6 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
            Send Message
          </button>
        </form>
      </div>

      <footer className="border-t border-slate-200">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-slate-600">
          © {new Date().getFullYear()} Hussein Nsanzimfura. Electrical Power Engineering.
        </p>
      </footer>
    </section>
  );
}
