import Image from "next/image";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import TiltCard from "./TiltCard";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow eyebrow--pill">About</span>
            <h2 className="display-2"><WordReveal text="The problem comes first." /></h2>
          </div>
          <p className="mono" style={{ color: "var(--ink-faint)" }}>©{new Date().getFullYear()} — Scroll to explore</p>
        </div>

        <div className="gallery-strip" style={{ marginBottom: "clamp(56px, 8vw, 96px)" }}>
          <Reveal delay={0}>
            <TiltCard className="gallery-tile">
              <Image
                src="/muhammed-abdulwahab.jpg"
                alt="Bidemi"
                width={600}
                height={800}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <span className="gallery-tile-cap">BIDEMI</span>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.08}>
            <TiltCard className="gallery-tile gallery-tile--flame">
              <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="100" cy="80" r="30" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                <circle cx="100" cy="80" r="4" fill="#fff" />
                <line x1="100" y1="110" x2="100" y2="170" stroke="rgba(255,255,255,0.5)" strokeDasharray="3 6" />
                <rect x="55" y="170" width="90" height="30" rx="3" fill="none" stroke="rgba(255,255,255,0.7)" />
                <text x="66" y="189" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#fff">SYSTEMS</text>
              </svg>
              <span className="gallery-tile-cap">DESIGN</span>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.16}>
            <TiltCard className="gallery-tile gallery-tile--dark">
              <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="40" y="50" width="120" height="26" rx="3" fill="none" stroke="#5a5048" />
                <text x="52" y="67" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#cfc7bd">BUSINESS</text>
                <line x1="100" y1="76" x2="100" y2="106" stroke="#5a5048" />
                <rect x="40" y="106" width="120" height="26" rx="3" fill="none" stroke="var(--flame-light)" strokeWidth="1.4" />
                <text x="55" y="123" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#fff">AUTOMATION</text>
                <line x1="100" y1="132" x2="100" y2="162" stroke="#5a5048" />
                <rect x="40" y="162" width="120" height="26" rx="3" fill="none" stroke="#5a5048" />
                <text x="72" y="179" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#cfc7bd">CODE</text>
              </svg>
              <span className="gallery-tile-cap">HOW I WORK</span>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.24}>
            <TiltCard className="gallery-tile" style={{ background: "var(--bg-raised)" }}>
              <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                <p className="mono" style={{ color: "var(--ink-soft)", textAlign: "center", fontSize: 12.5, lineHeight: 1.7 }}>
                  &ldquo;Technology is the tool. The problem comes first.&rdquo;
                </p>
              </div>
              <span className="gallery-tile-cap" style={{ background: "none", color: "var(--ink-faint)" }}>PHILOSOPHY</span>
            </TiltCard>
          </Reveal>
        </div>

        <div className="intro__grid">
          <Reveal className="intro__statement">
            &ldquo;I don&rsquo;t start with technology. I start with the problem.&rdquo;
          </Reveal>
          <Reveal className="intro__body" delay={0.08}>
            <p>
              Bidemi approaches software from a business and problem-solving perspective. Before
              writing code, he wants to understand how a process actually works: where people lose
              time, where information gets lost between people, and what can reasonably be
              automated.
            </p>
            <p>
              That background, in business development, operations, and analytical
              problem-solving, shapes how he builds. He moved from there into full-stack
              development and automation, building real systems around travel operations,
              application platforms, dashboards, WhatsApp workflows, and AI-assisted business
              processes.
            </p>
            <p>
              He doesn&rsquo;t build software to prove he can code. He builds it because something
              needed to work better.
            </p>
            <div className="intro__tags">
              <span className="tag tag--flame">Business thinking</span>
              <span className="tag">Systems design</span>
              <span className="tag">Automation</span>
              <span className="tag">AI integration</span>
              <span className="tag">Product thinking</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
