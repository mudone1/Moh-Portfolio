"use client";

import { useReducedMotion } from "framer-motion";

/**
 * A travelling dot along an SVG diagram line, used across the hero's
 * system-trace diagram and the project card diagrams for a consistent
 * "live pipeline" feel. Renders as a static dot (no SMIL animation) when
 * the user prefers reduced motion.
 */
export default function FlowPulse({
  path,
  cx = 60,
  cy = 60,
  r = 3,
  fill,
  duration = 3.2,
  delay = 0,
}: {
  path: string;
  cx?: number;
  cy?: number;
  r?: number;
  fill?: string;
  duration?: number;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <circle cx={cx} cy={cy} r={r} className={fill ? undefined : "flow-dot"} fill={fill} opacity={0.6} />;
  }

  return (
    <circle cx={cx} cy={cy} r={r} className={fill ? undefined : "flow-pulse"} fill={fill}>
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.08;0.92;1"
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" path={path} />
    </circle>
  );
}
