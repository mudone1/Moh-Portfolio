import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow eyebrow--pill">About</span>
            <h2 className="display-2">The problem comes first.</h2>
          </div>
          <p className="mono" style={{ color: "var(--ink-faint)" }}>©2026 — Scroll to explore</p>
        </div>

        <Reveal>
          <div className="gallery-strip" style={{ marginBottom: "clamp(56px, 8vw, 96px)" }}>
            <div className="gallery-tile">
              <Image
                src="/muhammed-abdulwahab.jpg"
                alt="Muhammed Abdulwahab"
                width={600}
                height={800}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <span className="gallery-tile-cap">M. ABDULWAHAB</span>
            </div>

            <div className="gallery-tile gallery-tile--flame">
              <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="100" cy="80" r="30" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                <circle cx="100" cy="80" r="4" fill="#fff" />
                <line x1="100" y1="110" x2="100" y2="170" stroke="rgba(255,255,255,0.5)" strokeDasharray="3 6" />
                <rect x="55" y="170" width="90" height="30" rx="3" fill="none" stroke="rgba(255,255,255,0.7)" />
                <text x="66" y="189" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#fff">SYSTEMS</text>
              </svg>
              <span className="gallery-tile-cap">DESIGN</span>
            </div>

            <div className="gallery-tile gallery-tile--dark">
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
            </div>

            <div className="gallery-tile" style={{ background: "var(--bg-raised)" }}>
              <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                <p className="mono" style={{ color: "var(--ink-soft)", textAlign: "center", fontSize: 12.5, lineHeight: 1.7 }}>
                  &ldquo;Technology is the tool. The problem comes first.&rdquo;
                </p>
              </div>
              <span className="gallery-tile-cap" style={{ background: "none", color: "var(--ink-faint)" }}>PHILOSOPHY</span>
            </div>
          </div>
        </Reveal>

        <div className="intro__grid">
          <Reveal className="intro__statement">
            &ldquo;I don&rsquo;t start with technology. I start with the problem.&rdquo;
          </Reveal>
          <Reveal className="intro__body" delay={0.08}>
            <p>
              Muhammed Abdulwahab works at the intersection of business operations and software.
              Before he was writing production code, he was thinking in workflows — where time gets
              lost, where a process breaks down between departments, where a WhatsApp message turns
              into three days of manual follow-up.
            </p>
            <p>
              That background shapes how he builds. Technology, for him, isn&rsquo;t the starting
              point — it&rsquo;s the tool he reaches for once the problem is actually understood. He
              combines business thinking, analytical reasoning, and full-stack engineering to design
              systems that hold up in production, not just in a demo.
            </p>
            <p>
              He has built and maintained real systems for travel and logistics operations,
              application and grant platforms, and AI-assisted customer workflows on WhatsApp —
              software that people use, not portfolio pieces.
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
