"use client";

import * as React from "react";

/**
 * Chatbot v2 (Phase 4 restyle).
 *
 * Behaviour unchanged from v1 — same 14-entry knowledge base, same
 * accessibility (ESC, focus trap), same "no data leaves this page" framing.
 *
 * Restyle only:
 * - Header background: pmt-purple-900 (was forest teal)
 * - Pulse icon + send button: gold accent (unchanged otherwise)
 * - Trigger button FAB: fully rounded, purple-900 with gold pulse icon
 * - Suggested-question chips: rounded-full pill, purple-900 border on light
 */

type Message = {
  role: "bot" | "user";
  text: string;
  link?: { href: string; label: string };
};

type KnowledgeEntry = {
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
      "You can reach PMT at: Windhoek 081 342 1056 (or landline +264 61 250 976) · Rundu 081 721 8099 · Ongwediva 081 395 9524. Email: hello@pmt-healthcare.org. The Windhoek campus is at No. 12, Sauerbruch Street, Windhoek West.",
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
      "The gallery shows real photos from PMT's graduations, oath ceremonies, classrooms, skills lab, and campus life across Windhoek, Rundu, and Ongwediva.",
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

  let best: { entry: KnowledgeEntry; score: number } | null = null;
  for (const entry of knowledge) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) score += kw.length;
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

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping]);

  React.useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
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

    setTimeout(() => {
      const reply = findAnswer(text);
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 400 + Math.random() * 300);
  }

  function handleQuickPrompt(prompt: string) {
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
      {/* Trigger — fully rounded purple FAB with gold pulse icon */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open PMT assistant"
        aria-expanded={open}
        aria-controls="chatbot-panel"
        className={`btn-physics fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 bg-pmt-purple-900 text-pmt-cream rounded-full pl-4 pr-5 py-3 shadow-[0_8px_30px_-8px_rgba(46,31,82,0.5)] hover:bg-pmt-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pmt-gold ${
          open ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M2 12h4l2-6 4 12 2-6h8"
            stroke="#C9972B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-mono text-xs uppercase tracking-wider">
          Ask PMT
        </span>
      </button>

      {open && (
        <div
          id="chatbot-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-title"
          className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 sm:w-[400px] sm:max-w-[calc(100vw-2.5rem)] z-50 flex flex-col bg-pmt-cream sm:rounded-2xl border border-pmt-purple-900/20 shadow-2xl overflow-hidden"
        >
          {/* Header — purple-900 */}
          <div className="bg-pmt-purple-900 text-pmt-cream px-5 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span
                className="inline-flex w-9 h-9 rounded-full bg-pmt-cream/10 items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 12h4l2-6 4 12 2-6h8"
                    stroke="#C9972B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <h2 id="chatbot-title" className="font-display text-lg leading-none">
                  PMT Assistant
                </h2>
                <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-cream/60 mt-0.5">
                  Online · Answers from verified facts
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close PMT assistant"
              className="btn-physics inline-flex w-8 h-8 items-center justify-center rounded-full hover:bg-pmt-cream/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pmt-gold"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
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
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-pmt-cream"
            style={{ maxHeight: "60vh", minHeight: "280px" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] ${
                    msg.role === "user"
                      ? "bg-pmt-gold text-pmt-ink rounded-2xl rounded-br-md"
                      : "bg-white text-pmt-ink rounded-2xl rounded-bl-md border border-pmt-purple-900/10"
                  } px-4 py-2.5`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  {msg.link && (
                    <a
                      href={msg.link.href}
                      className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-pmt-gold hover:underline underline-offset-2"
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
                <div className="bg-white border border-pmt-purple-900/10 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1" aria-label="Assistant is typing">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-pmt-purple-500/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-pmt-purple-500/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-pmt-purple-500/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                    <span className="sr-only">Assistant is typing…</span>
                  </div>
                </div>
              </div>
            )}

            {messages.length <= 1 && !isTyping && (
              <div className="pt-2">
                <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                  Try one of these
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleQuickPrompt(prompt)}
                      className="btn-physics text-xs bg-white border border-pmt-purple-900/30 text-pmt-purple-900 px-3 py-1.5 rounded-full hover:bg-pmt-purple-900 hover:text-pmt-cream hover:border-pmt-purple-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pmt-gold"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-pmt-purple-900/10 bg-pmt-cream p-3 flex items-center gap-2"
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
              className="flex-1 bg-white border border-pmt-purple-900/15 px-4 py-2.5 text-sm rounded-full focus:border-pmt-purple-500 focus:outline-none focus:ring-2 focus:ring-pmt-gold/40 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="btn-physics inline-flex w-10 h-10 items-center justify-center bg-pmt-gold text-pmt-ink rounded-full hover:bg-pmt-gold-soft disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pmt-gold"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
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

          <div className="bg-pmt-purple-900/[0.03] border-t border-pmt-purple-900/10 px-4 py-2">
            <p className="font-mono text-[10px] text-pmt-ink-soft text-center">
              Self-contained · No data leaves this page · Tap ESC to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
