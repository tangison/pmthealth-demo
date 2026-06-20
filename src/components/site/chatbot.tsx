"use client";

import * as React from "react";

/**
 * Chatbot — self-contained, deterministic Q&A for PMT Health Care Institution.
 *
 * Design constraints:
 * - No external API, no API key, no backend
 * - Uses keyword matching against a small knowledge base of real PMT facts
 * - Matches the brand system (teal + ochre, Fraunces + Work Sans + IBM Plex Mono)
 * - Accessible: ESC to close, focus trap inside the panel, ARIA roles, keyboard navigable
 * - Reduced-motion respected
 * - Appears on every page (mounted in layout.tsx)
 *
 * The chatbot is intentionally limited — it cannot answer questions outside
 * PMT's verified facts. When it doesn't know, it offers to direct the user
 * to the relevant page or to a campus phone number.
 */

type Message = {
  role: "bot" | "user";
  text: string;
  // Optional link shown under the message
  link?: { href: string; label: string };
};

type KnowledgeEntry = {
  // Keywords that trigger this answer (lowercased, matched against user input)
  keywords: string[];
  answer: string;
  link?: { href: string; label: string };
};

const knowledge: KnowledgeEntry[] = [
  {
    keywords: ["accredit", "hpcna", "nqa", "legit", "real", "genuine", "verified", "approve", "registered"],
    answer:
      "PMT is fully accredited. The Health Professions Council of Namibia (HPCNA) granted approval on 10 September 2021, and the Diploma in Enrolled Nursing and Midwifery Science is accredited by NQA at NQF Level 6. Both are matters of public record.",
    link: { href: "/accreditation", label: "See the Accreditation page" },
  },
  {
    keywords: ["apply", "application", "admission", "enrol", "enroll", "join", "intake"],
    answer:
      "Applications are open for the next intake. The fastest way to apply is to call the campus closest to you. PMT accepts both NSFAF-funded and self-funded applicants.",
    link: { href: "/admissions", label: "See the Admissions page" },
  },
  {
    keywords: ["nsfaf", "fund", "funding", "loan", "bursary", "finance", "pay", "fees", "fee"],
    answer:
      "Yes — PMT accepts NSFAF (Namibia Students Financial Assistance Fund) funding, alongside self-funded applicants. Both paths lead to the same qualification.",
    link: { href: "/admissions", label: "Funding paths explained" },
  },
  {
    keywords: ["programme", "program", "course", "diploma", "qualification", "nqf", "level", "study", "midwifer", "nursing"],
    answer:
      "PMT offers the Diploma in Enrolled Nursing and Midwifery Science at NQF Level 6. The programme combines classroom theory, skills lab, and clinical placement, ending with the formal nursing oath the night before graduation.",
    link: { href: "/programmes", label: "See the Programmes page" },
  },
  {
    keywords: ["duration", "how long", "years", "months", "start", "when"],
    answer:
      "The exact duration and intake dates are confirmed with each cohort — they aren't hard-coded because they rotate. Call your nearest campus to confirm the current window.",
    link: { href: "/admissions", label: "See intake calendar" },
  },
  {
    keywords: ["entry", "requirement", "grade", "subject", "matric", "nssc", "eligible", "qualify", "qualifications"],
    answer:
      "Specific entry requirements are confirmed with each intake. The typical framework for an NQF Level 6 nursing diploma is a Grade 12 / NSSC certificate with passes in relevant subjects. Confirm the current list with PMT directly.",
    link: { href: "/programmes", label: "See entry requirements" },
  },
  {
    keywords: ["campus", "where", "location", "address", "directions", "find"],
    answer:
      "PMT has three campuses — Windhoek (No. 12, Sauerbruch Street, Windhoek West), Rundu, and Ongwediva. The Windhoek address is published; for Rundu and Ongwediva, call the campus directly for directions.",
    link: { href: "/campuses", label: "See all campuses" },
  },
  {
    keywords: ["phone", "call", "contact", "number", "email", "reach", "whatsapp", "tel"],
    answer:
      "You can reach PMT at: Windhoek 081 342 1056 · Rundu 081 721 8099 · Ongwediva 081 395 9524. The Windhoek campus is at No. 12, Sauerbruch Street, Windhoek West.",
    link: { href: "/contact", label: "See Contact page" },
  },
  {
    keywords: ["oath", "pledge", "ceremony", "graduat", "graduate"],
    answer:
      "The oath is the heart of PMT. The day before graduation, students recite the formal nursing oath — a public pledge to serve with skill and integrity. It is the moment training becomes vocation.",
    link: { href: "/about", label: "Read the founder story" },
  },
  {
    keywords: ["founder", "rutendo", "zvidza", "priscilla", "tendo", "pmt", "name", "history", "founded", "story"],
    answer:
      "PMT was founded in 2019 by Sister (SR) Rutendo T. Zvidza. The institution is named after Priscilla Monica Tendo, who inspired Sister Rutendo to become a nurse. PMT carries that name into every classroom and every graduation.",
    link: { href: "/about", label: "Read the founder story" },
  },
  {
    keywords: ["icare", "i-care", "mou", "partner", "articulation", "cross-credit"],
    answer:
      "PMT signed a memorandum of understanding with I-Care Health Training Institute on 22 August 2023 covering articulation and cross-crediting — opening additional pathways for nursing students.",
    link: { href: "/news", label: "See News" },
  },
  {
    keywords: ["gallery", "photo", "image", "picture", "video"],
    answer:
      "The gallery is being populated with real photos from PMT's graduations, oath ceremonies, and campus life. Branded placeholders appear until each photo is supplied.",
    link: { href: "/gallery", label: "See Gallery" },
  },
  {
    keywords: ["news", "update", "latest", "announcement"],
    answer:
      "Recent announcements include the March 2026 intake (applications open), the 2025 graduation ceremony, NSFAF funding acceptance, and the I-Care MOU partnership signed 22 August 2023.",
    link: { href: "/news", label: "See News" },
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings"],
    answer:
      "Hello — I'm PMT's assistant. I can answer questions about accreditation, admissions, the programme, campuses, the oath, and the founder's story. What would you like to know?",
  },
  {
    keywords: ["thank", "thanks", "cheers", "appreciate"],
    answer:
      "You're welcome. If you have any other questions, just type them here — or call the campus closest to you for anything urgent.",
  },
];

const fallback: Message = {
  role: "bot",
  text: "I don't have a verified answer for that — I only respond using PMT's confirmed facts. Try asking about accreditation, admissions, the programme, campuses, the oath, or the founder. For anything urgent, please call the campus closest to you.",
  link: { href: "/contact", label: "Campus contact numbers" },
};

const quickPrompts = [
  "Is PMT accredited?",
  "How do I apply?",
  "What programme is offered?",
  "Where are the campuses?",
  "What is the oath?",
];

function findAnswer(input: string): Message {
  const lower = input.toLowerCase().trim();
  if (!lower) return fallback;

  // Score each knowledge entry by counting keyword matches
  let best: { entry: KnowledgeEntry; score: number } | null = null;
  for (const entry of knowledge) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) score += kw.length; // longer matches score higher
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score };
    }
  }

  if (!best) return fallback;
  return {
    role: "bot",
    text: best.entry.answer,
    link: best.entry.link,
  };
}

export function Chatbot() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "bot",
      text: "Hello — I'm PMT's assistant. I can answer questions about accreditation, admissions, the programme, campuses, the oath, and the founder's story. How can I help?",
    },
  ]);
  const [isTyping, setIsTyping] = React.useState(false);

  const panelRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  // Auto-scroll to latest message
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping]);

  // Focus management when opening / closing
  React.useEffect(() => {
    if (open) {
      // small delay so the panel is mounted
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  // ESC to close + focus trap
  React.useEffect(() => {
    if (!open) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        // Simple focus trap
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate brief "thinking" delay for natural feel
    setTimeout(() => {
      const reply = findAnswer(text);
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 400 + Math.random() * 300);
  }

  function handleQuickPrompt(prompt: string) {
    setInput(prompt);
    // Submit immediately
    const userMsg: Message = { role: "user", text: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const reply = findAnswer(prompt);
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 400 + Math.random() * 300);
  }

  return (
    <>
      {/* Trigger button — floating, bottom-right */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open PMT assistant"
        aria-expanded={open}
        aria-controls="chatbot-panel"
        className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 bg-forest-teal text-warm-off-white rounded-full pl-4 pr-5 py-3 shadow-lg hover:bg-forest-teal-deep transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-ochre ${
          open ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100"
        }`}
      >
        {/* Pulse icon — small heartbeat glyph */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 12h4l2-6 4 12 2-6h8"
            stroke="#D98E2B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-mono text-xs uppercase tracking-wider">
          Ask PMT
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div
          id="chatbot-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-title"
          className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 sm:w-[400px] sm:max-w-[calc(100vw-2.5rem)] z-50 flex flex-col bg-warm-off-white sm:rounded-lg border border-border shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-forest-teal text-warm-off-white px-5 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span
                className="inline-flex w-9 h-9 rounded-full bg-warm-off-white/10 items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 12h4l2-6 4 12 2-6h8"
                    stroke="#D98E2B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <h2
                  id="chatbot-title"
                  className="font-display text-lg leading-none"
                >
                  PMT Assistant
                </h2>
                <p className="font-mono text-[10px] uppercase tracking-widest text-warm-off-white/60 mt-0.5">
                  Online · Answers from verified facts
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close PMT assistant"
              className="inline-flex w-8 h-8 items-center justify-center rounded-sm hover:bg-warm-off-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-ochre"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4L14 14M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={panelRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-warm-off-white"
            style={{ maxHeight: "60vh", minHeight: "280px" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] ${
                    msg.role === "user"
                      ? "bg-warm-ochre text-charcoal rounded-lg rounded-br-sm"
                      : "bg-warm-off-white-2 text-charcoal rounded-lg rounded-bl-sm border border-border"
                  } px-4 py-2.5`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  {msg.link && (
                    <a
                      href={msg.link.href}
                      className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-warm-ochre hover:underline underline-offset-2"
                    >
                      {msg.link.label}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-warm-off-white-2 border border-border rounded-lg rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1" aria-label="Assistant is typing">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-forest-teal/60 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-forest-teal/60 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-forest-teal/60 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                    <span className="sr-only">Assistant is typing…</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick prompts — show only when few messages */}
            {messages.length <= 1 && !isTyping && (
              <div className="pt-2">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Try one of these
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleQuickPrompt(prompt)}
                      className="text-xs bg-warm-off-white-2 border border-border text-forest-teal px-3 py-1.5 rounded-full hover:bg-forest-teal hover:text-warm-off-white hover:border-forest-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-ochre"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-border bg-warm-off-white p-3 flex items-center gap-2"
          >
            <label htmlFor="chatbot-input" className="sr-only">
              Type your question
            </label>
            <input
              ref={inputRef}
              id="chatbot-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              autoComplete="off"
              className="flex-1 bg-warm-off-white-2 border border-border px-3 py-2.5 text-sm rounded-sm focus:border-forest-teal focus:outline-none focus:ring-2 focus:ring-warm-ochre/40 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="inline-flex w-10 h-10 items-center justify-center bg-warm-ochre text-charcoal rounded-sm hover:bg-warm-ochre-soft transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-ochre"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9L16 2L9 16L7.5 10.5L2 9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          {/* Footer — privacy note */}
          <div className="bg-forest-teal/[0.03] border-t border-border px-4 py-2">
            <p className="font-mono text-[10px] text-muted-foreground text-center">
              Self-contained · No data leaves this page · Tap ESC to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
