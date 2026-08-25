"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const ITEMS = [
  {
    q: "What kind of problems are the best fit?",
    a: "Anything where a business process is still running through manual coordination — spreadsheets, repeated WhatsApp messages, staff re-typing the same information more than once. If a workflow can be mapped, it can usually be automated or turned into software.",
  },
  {
    q: "Do you work on the full stack, or just automation?",
    a: "Both, depending on what the problem needs. Some projects are pure automation and API work; others need a full application — frontend, backend, and the database underneath it. The starting point is always the workflow, not the tech stack.",
  },
  {
    q: "Do you use AI coding tools like Claude Code?",
    a: "Yes, actively — as an engineering accelerator. Architecture, product decisions, system design, and testing stay under direct ownership; AI tools speed up implementation, they don't replace the thinking around it.",
  },
  {
    q: "Are you available for remote work?",
    a: "Yes — currently available for remote opportunities, contract or full-time. See the Contact section below to get in touch.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Understand the problem and map the current workflow first, then design the system, build it in stages, and test against real usage rather than a demo scenario. The exact shape depends on scope — worth a conversation.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section section--raised">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow eyebrow--pill">FAQ</span>
            <h2 className="display-2">Frequent questions.</h2>
          </div>
        </div>

        <div className="faq-list">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className="faq-item" key={item.q}>
                <button
                  className="faq-item__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>
                    <span className="faq-item__q-num">{String(i + 1).padStart(2, "0")}</span>
                    {item.q}
                  </span>
                  <span className="faq-item__icon" aria-hidden="true">+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      className="faq-item__a"
                      initial={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      animate={prefersReducedMotion ? undefined : { height: "auto", opacity: 1 }}
                      exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
