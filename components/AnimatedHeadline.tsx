"use client";

import { useEffect, useRef } from "react";

/**
 * Signature font animation: the headline "materialises" from a casual,
 * humanist letterform into a systemised, semi-monospace one on load —
 * business language becoming code — using the Recursive variable font's
 * MONO/CASL/weight axes. Hovering nudges it further toward MONO.
 * A single CSS transition; skipped entirely for reduced-motion users
 * via the .headline-anim base state already being fully legible.
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
