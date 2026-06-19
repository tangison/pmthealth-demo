"use client";

import * as React from "react";
import { campuses } from "@/lib/site-data";

/**
 * ContactForm — demo form, non-functional in this build.
 *
 * IMPORTANT: This form is non-functional in the demo. Submission does not
 * send an email, store data, or trigger any backend. It demonstrates the
 * intended UX only. When the site goes live, wire `handleSubmit` to the
 * institution's chosen email service or form backend (e.g. Resend, Formspree,
 * or a server action writing to a database).
 *
 * The form is accessible: every field has a label, error states are
 * announced, and the submit button has a visible loading state.
 */
export function ContactForm() {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name) newErrors.name = "Please enter your name.";
    if (!email) newErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email address.";
    if (!message) newErrors.message = "Please enter a message.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      // Focus first errored field
      const firstError = Object.keys(newErrors)[0];
      const el = document.getElementById(firstError);
      el?.focus();
      return;
    }

    setStatus("submitting");
    // Demo: simulate a network call. No data is stored or sent.
    setTimeout(() => {
      setStatus("success");
    }, 800);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="bg-card border border-forest-teal/30 p-7 sm:p-8 text-center"
      >
        <div className="inline-flex w-12 h-12 rounded-full bg-forest-teal text-warm-off-white items-center justify-center mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10L8 14L16 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-forest-teal mb-2">
          Message received (demo)
        </h3>
        <p className="text-sm text-charcoal-soft leading-relaxed max-w-sm mx-auto">
          This is a demo confirmation — your message was not actually sent.
          For a real enquiry, please call the relevant campus directly.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setErrors({});
          }}
          className="mt-6 font-mono text-xs uppercase tracking-wider text-warm-ochre hover:underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-card border border-border p-7 sm:p-8"
      aria-labelledby="contact-form-title"
    >
      <h2
        id="contact-form-title"
        className="font-display text-xl text-forest-teal mb-6"
      >
        Send a message
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-1">
          <label
            htmlFor="name"
            className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
          >
            Name <span className="text-warm-ochre">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full bg-warm-off-white border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-forest-teal focus:outline-none focus:ring-2 focus:ring-warm-ochre/40 transition-colors"
            placeholder="Your full name"
          />
          {errors.name && (
            <p
              id="name-error"
              role="alert"
              className="mt-1.5 text-xs text-deep-maroon"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="sm:col-span-1">
          <label
            htmlFor="email"
            className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
          >
            Email <span className="text-warm-ochre">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full bg-warm-off-white border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-forest-teal focus:outline-none focus:ring-2 focus:ring-warm-ochre/40 transition-colors"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              className="mt-1.5 text-xs text-deep-maroon"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone (optional) */}
        <div className="sm:col-span-1">
          <label
            htmlFor="phone"
            className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
          >
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full bg-warm-off-white border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-forest-teal focus:outline-none focus:ring-2 focus:ring-warm-ochre/40 transition-colors"
            placeholder="081 ..."
          />
        </div>

        {/* Campus select */}
        <div className="sm:col-span-1">
          <label
            htmlFor="campus"
            className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
          >
            Nearest campus
          </label>
          <select
            id="campus"
            name="campus"
            defaultValue=""
            className="w-full bg-warm-off-white border border-border px-4 py-3 text-sm text-foreground focus:border-forest-teal focus:outline-none focus:ring-2 focus:ring-warm-ochre/40 transition-colors"
          >
            <option value="" disabled>
              Select a campus
            </option>
            {campuses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.city}
              </option>
            ))}
            <option value="general">General enquiry</option>
          </select>
        </div>

        {/* Subject */}
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full bg-warm-off-white border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-forest-teal focus:outline-none focus:ring-2 focus:ring-warm-ochre/40 transition-colors"
            placeholder="e.g. Admissions enquiry for March 2026 intake"
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
          >
            Message <span className="text-warm-ochre">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full bg-warm-off-white border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-forest-teal focus:outline-none focus:ring-2 focus:ring-warm-ochre/40 transition-colors resize-y"
            placeholder="Your message..."
          />
          {errors.message && (
            <p
              id="message-error"
              role="alert"
              className="mt-1.5 text-xs text-deep-maroon"
            >
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          <span className="text-warm-ochre">*</span> Required
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider text-xs px-7 py-4 rounded-sm bg-warm-ochre text-charcoal hover:bg-warm-ochre-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-ochre"
        >
          {status === "submitting" ? (
            <>
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeOpacity="0.3"
                  strokeWidth="3"
                />
                <path
                  d="M12 2a10 10 0 0 1 10 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </button>
      </div>
    </form>
  );
}
