"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Splits a headline into words and staggers them in on scroll —
 * used on major section headlines for a bit more "moving text"
 * across the site. Falls back to plain static text when the user
 * prefers reduced motion.
 */
export default function WordReveal({
  text,
  as: Tag = "span",
  className,
}: {
  text: string;
  as?: "span" | "div";
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} style={{ display: "inline-block" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
