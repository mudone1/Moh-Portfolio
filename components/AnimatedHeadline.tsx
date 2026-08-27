"use client";

import { useEffect, useRef } from "react";

/**
 * Signature font animation: the headline "materialises" on load using
 * Bodoni Moda's variable optical-size and weight axes, moving from a
 * lighter, smaller-optical-size cut into the full display cut. Hovering
 * nudges it further toward the bold display weight.
 * A single CSS transition; the base state is already fully legible for
 * reduced-motion users (the transition itself is skipped via prefers-
 * reduced-motion in globals.css).
 */
export default function AnimatedHeadline({
  as = "h1",
  className,
  children,
}: {
  as?: "h1" | "h2";
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = window.setTimeout(() => el.classList.add("is-loaded"), 180);
    return () => window.clearTimeout(id);
  }, []);

  const combinedClassName = `headline-anim ${className ?? ""}`;

  if (as === "h2") {
    return (
      <h2 ref={ref} className={combinedClassName}>
        {children}
      </h2>
    );
  }

  return (
    <h1 ref={ref} className={combinedClassName}>
      {children}
    </h1>
  );
}
