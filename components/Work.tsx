import Link from "next/link";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    index: "01",
    slug: "tdis-logistics",
    role: "Travel & Ticketing · Automation",
    title: "TDIS Logistics",
    desc: "Operational software built around a real travel and ticketing business: automation, reporting, and WhatsApp-based processes that replaced repetitive manual coordination.",
    tone: "flame" as const,
  },
  {
    index: "02",
    slug: "globetech",
    role: "Application Platform · Workflow Automation",
    title: "GlobeTech",
    desc: "An operational platform for application workflows, referrals, staff hierarchy, and administrative dashboards, designed around the process being run, not just a website presenting it.",
    tone: "dark" as const,
  },
  {
    index: "03",
    slug: "whatsapp-ai-automation",
    role: "AI Automation · WhatsApp · Backend Systems",
    title: "WhatsApp / AI Automation",
    desc: "AI-assisted conversation handling and backend logic for WhatsApp-based bookings and business workflows, the foundation for Fudur Automation.",
    tone: "flame" as const,
  },
];

function WorkVisual({ slug, tone }: { slug: string; tone: "flame" | "dark" }) {
  const nodeFill = tone === "flame" ? "#fff" : "#1d1712";
  const lineStroke = tone === "flame" ? "rgba(255,255,255,0.55)" : "#3a332b";
  const activeStroke = "#ffffff";
  const labelFill = tone === "flame" ? "rgba(20,10,5,0.8)" : "#cfc7bd";

  if (slug === "tdis-logistics") {
    return (
      <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="24" y="30" width="120" height="34" rx="3" fill={nodeFill} stroke={lineStroke} />
        <text x="34" y="51" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>BOOKING REQUEST</text>
        <line x1="84" y1="64" x2="84" y2="104" stroke={lineStroke} />
        <rect x="24" y="104" width="120" height="34" rx="3" fill={nodeFill} stroke={activeStroke} strokeWidth="1.6" />
        <text x="34" y="125" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>AUTOMATION</text>
        <line x1="84" y1="138" x2="84" y2="178" stroke={lineStroke} />
        <rect x="24" y="178" width="120" height="34" rx="3" fill={nodeFill} stroke={lineStroke} />
        <text x="34" y="199" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>TICKET / REPORT</text>
        <line x1="144" y1="47" x2="220" y2="47" stroke={lineStroke} />
        <rect x="220" y="30" width="96" height="34" rx="3" fill={nodeFill} stroke={lineStroke} />
        <text x="230" y="51" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>WHATSAPP</text>
        <line x1="144" y1="121" x2="220" y2="121" stroke={lineStroke} />
        <rect x="220" y="104" width="96" height="34" rx="3" fill={nodeFill} stroke={lineStroke} />
        <text x="230" y="125" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>AIRLINE OPS</text>
      </svg>
    );
  }
  if (slug === "globetech") {
    return (
      <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="140" y="20" width="110" height="34" rx="3" fill={nodeFill} stroke={activeStroke} strokeWidth="1.6" />
        <text x="150" y="41" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>APPLICANT</text>
        <line x1="195" y1="54" x2="195" y2="94" stroke={lineStroke} />
        <rect x="140" y="94" width="110" height="34" rx="3" fill={nodeFill} stroke={lineStroke} />
        <text x="150" y="115" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>WORKFLOW</text>
        <line x1="195" y1="128" x2="90" y2="168" stroke={lineStroke} />
        <line x1="195" y1="128" x2="300" y2="168" stroke={lineStroke} />
        <rect x="35" y="168" width="110" height="34" rx="3" fill={nodeFill} stroke={lineStroke} />
        <text x="45" y="189" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>STAFF REVIEW</text>
        <rect x="245" y="168" width="110" height="34" rx="3" fill={nodeFill} stroke={lineStroke} />
        <text x="255" y="189" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill={labelFill}>DASHBOARD / KPI</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="20" y="112" width="80" height="34" rx="3" fill={nodeFill} stroke={lineStroke} />
      <text x="28" y="133" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>USER</text>
      <line x1="100" y1="129" x2="140" y2="129" stroke={activeStroke} strokeDasharray="4 5" />
      <rect x="140" y="112" width="80" height="34" rx="3" fill={nodeFill} stroke={activeStroke} strokeWidth="1.6" />
      <text x="148" y="133" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>AI LAYER</text>
      <line x1="220" y1="129" x2="260" y2="129" stroke={lineStroke} />
      <rect x="260" y="112" width="60" height="34" rx="3" fill={nodeFill} stroke={lineStroke} />
      <text x="268" y="133" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>API</text>
      <line x1="180" y1="112" x2="180" y2="72" stroke={lineStroke} />
      <rect x="130" y="38" width="100" height="34" rx="3" fill={nodeFill} stroke={lineStroke} />
      <text x="140" y="59" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={labelFill}>BUSINESS LOGIC</text>
    </svg>
  );
}

export default function Work() {
  return (
    <section className="section section--raised" id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow eyebrow--pill">Selected Work</span>
            <h2 className="display-2">Three systems, three problems.</h2>
          </div>
          <p className="lede" style={{ margin: 0 }}>
            Not a portfolio of demos. A record of software built to run real operations.
          </p>
        </div>

        <div className="work-grid">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <Link href={`/work/${project.slug}`} className="work-card">
                <div
                  className="work-card__visual"
                  style={{ background: project.tone === "flame" ? "var(--flame)" : "var(--invert-bg)" }}
                >
                  <WorkVisual slug={project.slug} tone={project.tone} />
                </div>
                <div className="work-card__body">
                  <span className="work-card__tag">
                    <span className="mono">{project.index}</span> {project.role}
                  </span>
                  <div className="work-card__title">{project.title}</div>
                  <p className="work-card__desc">{project.desc}</p>
                  <div className="work-card__foot">
                    <span className="mono" style={{ color: "var(--ink-faint)" }}>View case study</span>
                    <span className="work-card__link" aria-hidden="true">↗</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
