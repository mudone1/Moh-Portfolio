"use client";

import { useReducedMotion } from "framer-motion";

/**
 * The travelling dot along the hero's system-trace line.
 * Renders as a static dot (no SMIL animation) when the user
 * prefers reduced motion.
 */
export default function FlowPulse({ path }: { path: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <circle cx="60" cy="60" r="3" className="flow-dot" opacity={0.6} />;
  }

  return (
    <circle cx="60" cy="60" r="3" className="flow-pulse">
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.08;0.92;1"
        dur="3.2s"
        repeatCount="indefinite"
      />
      <animateMotion dur="3.2s" repeatCount="indefinite" path={path} />
    </circle>
  );
}
