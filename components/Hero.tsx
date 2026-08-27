import Image from "next/image";
import Link from "next/link";
import AnimatedHeadline from "./AnimatedHeadline";
import FlowPulse from "./FlowPulse";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__topbar">
          <div className="status-pill">
            <span className="status-pill__dot" aria-hidden="true" />
            Available for remote opportunities
          </div>
          <p className="mono" style={{ color: "rgba(255,255,255,0.75)" }}>©{new Date().getFullYear()} — Systems Builder</p>
        </div>

        <div className="hero__stage">
          <h1 className="sr-only">
            Bidemi Abdulwahab — AI Automation &amp; Full-Stack Systems Builder
          </h1>

          <div className="hero__name-bg" aria-hidden="true">
            <span>BIDEMI</span>
          </div>

          <div
            className="hero__floating-card hero__floating-card--pipeline"
            role="img"
            aria-label="Diagram showing a business problem flowing through automation, AI, and an API into a working product: the live pipeline"
          >
            <div className="hero__floating-card-label">
              <span>system_trace.svg</span>
              <span>live</span>
            </div>
            <svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <line x1="34" y1="18" x2="34" y2="190" className="flow-line" />
              <line x1="34" y1="18" x2="34" y2="190" className="flow-line flow-line--active" strokeDasharray="1 8" />

              <g>
                <rect x="10" y="8" width="120" height="24" rx="3" className="flow-node" />
                <circle cx="34" cy="20" r="3" className="flow-dot" />
                <text x="48" y="24" className="flow-label">PROBLEM</text>
              </g>
              <g>
                <rect x="10" y="52" width="120" height="24" rx="3" className="flow-node" />
                <circle cx="34" cy="64" r="3" className="flow-dot" />
                <text x="48" y="68" className="flow-label">AUTOMATION</text>
              </g>
              <g>
                <rect x="10" y="96" width="120" height="24" rx="3" className="flow-node flow-node--accent" />
                <circle cx="34" cy="108" r="3" className="flow-dot" />
                <text x="48" y="112" className="flow-label">AI LAYER</text>
              </g>
              <g>
                <rect x="10" y="140" width="120" height="24" rx="3" className="flow-node" />
                <circle cx="34" cy="152" r="3" className="flow-dot" />
                <text x="48" y="156" className="flow-label">API</text>
              </g>
              <g>
                <rect x="10" y="178" width="120" height="24" rx="3" className="flow-node" />
                <circle cx="34" cy="190" r="3" className="flow-dot" />
                <text x="48" y="194" className="flow-label">PRODUCT</text>
              </g>

              <FlowPulse path="M0,0 L0,172" />
            </svg>
          </div>

          <div className="hero__portrait">
            <Image
              src="/muhammed-cutout.png"
              alt="Bidemi Abdulwahab"
              width={1103}
              height={1078}
              priority
            />
          </div>

          <Link href="/#contact" className="hero__floating-card hero__floating-card--contact">
            <div className="hero__floating-card-label">
              <span>Let&rsquo;s talk</span>
              <span aria-hidden="true">✦</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
              <div>
                <div className="hero__floating-card-title">Bidemi</div>
                <div className="hero__floating-card-sub">Systems Builder</div>
              </div>
              <span className="hero__floating-card-link" aria-hidden="true">↗</span>
            </div>
          </Link>

          <div className="hero__firstname" aria-hidden="true">
            <AnimatedHeadline as="h2" className="hero__firstname-inner">
              ABDULWAHAB
            </AnimatedHeadline>
          </div>
        </div>

        <div className="hero__foot">
          <div className="hero__foot-copy">
            <p>
              I design and build AI automation, backend systems, and integrations for teams tired
              of running their operations by hand.
            </p>
          </div>
          <div className="hero__foot-actions">
            <Link href="#work" className="btn btn--on-flame">
              View Selected Work <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="#contact" className="btn btn--ghost-on-flame">
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
