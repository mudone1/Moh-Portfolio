import Link from "next/link";
import AnimatedHeadline from "./AnimatedHeadline";
import FlowPulse from "./FlowPulse";

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="status-pill">
        <span className="status-pill__dot" aria-hidden="true" />
        Available for remote opportunities
      </div>

      <div className="hero__grid">
        <div>
          <AnimatedHeadline className="display-1 hero__title">
            I build systems that turn complex business processes into simple software.
          </AnimatedHeadline>
          <p className="lede">
            AI automation, backend systems, and integrations for teams that are done running their
            operations by hand — travel and ticketing workflows, WhatsApp-based customer flows,
            application platforms, and the APIs that connect them.
          </p>
          <div className="hero__foot">
            <Link href="#work" className="btn btn--primary">
              View Selected Work <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="#contact" className="btn btn--ghost">
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>

        <div
          className="hero__visual"
          role="img"
          aria-label="Diagram showing a business problem flowing through automation, AI, and an API into a working product"
        >
          <svg viewBox="0 0 420 460" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <line x1="60" y1="40" x2="60" y2="420" className="flow-line" />
            <line x1="60" y1="40" x2="60" y2="420" className="flow-line flow-line--active" strokeDasharray="1 9" />

            <g>
              <rect x="20" y="20" width="200" height="42" rx="3" className="flow-node" />
              <circle cx="60" cy="41" r="4" className="flow-dot" />
              <text x="82" y="45" className="flow-label">BUSINESS PROBLEM</text>
            </g>

            <g>
              <rect x="20" y="102" width="200" height="42" rx="3" className="flow-node" />
              <circle cx="60" cy="123" r="4" className="flow-dot" />
              <text x="82" y="127" className="flow-label">AUTOMATION</text>
            </g>

            <g>
              <rect x="20" y="184" width="200" height="42" rx="3" className="flow-node flow-node--accent" />
              <circle cx="60" cy="205" r="4" className="flow-dot" />
              <text x="82" y="209" className="flow-label">AI LAYER</text>
            </g>

            <g>
              <rect x="20" y="266" width="200" height="42" rx="3" className="flow-node" />
              <circle cx="60" cy="287" r="4" className="flow-dot" />
              <text x="82" y="291" className="flow-label">API</text>
            </g>

            <g>
              <rect x="20" y="348" width="200" height="42" rx="3" className="flow-node" />
              <circle cx="60" cy="369" r="4" className="flow-dot" />
              <text x="82" y="373" className="flow-label">WORKING PRODUCT</text>
            </g>

            <FlowPulse path="M0,0 L0,360" />

            <text x="240" y="45" className="flow-label" fillOpacity="0.5">01</text>
            <text x="240" y="127" className="flow-label" fillOpacity="0.5">02</text>
            <text x="240" y="209" className="flow-label" fillOpacity="0.5">03</text>
            <text x="240" y="291" className="flow-label" fillOpacity="0.5">04</text>
            <text x="240" y="373" className="flow-label" fillOpacity="0.5">05</text>
          </svg>
          <div className="hero__visual-caption">
            <span>system_trace.svg</span>
            <span>live pipeline</span>
          </div>
        </div>
      </div>
    </section>
  );
}
