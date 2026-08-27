"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import WordReveal from "./WordReveal";

const ITEMS = [
  {
    q: "What kind of problems are the best fit?",
    a: "Repetitive operational workflows: manual coordination, WhatsApp-based processes, dashboards, integrations, and business processes that can reasonably be automated. If a workflow can be mapped, it can usually be turned into software.",
  },
  {
    q: "Do you work on the full stack, or just automation?",
    a: "Both. Automation is one of my strongest areas, but I work across the stack when the problem requires it, from frontend interfaces and backend services to databases, APIs, and workflow logic.",
  },
  {
    q: "Do you use AI coding tools like Claude Code?",
    a: "Yes. I use AI coding tools as part of my development workflow, but I don't treat them as a substitute for engineering judgment. I use them to accelerate implementation while I remain responsible for architecture, system design, debugging, testing, integrations, and the business logic being built.",
  },
  {
    q: "Are you available for remote work?",
    a: "Yes. I'm currently open to remote opportunities, particularly roles involving AI automation, backend or full-stack development, integrations, and systems engineering.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "It starts with the problem rather than the technology. I first understand the workflow, identify the bottleneck, design the appropriate system, then build and iterate based on real usage.",
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
            <h2 className="display-2"><WordReveal text="Frequent questions." /></h2>
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
