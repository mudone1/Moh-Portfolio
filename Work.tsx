import Link from "next/link";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    index: "01",
    slug: "tdis-logistics",
    role: "Travel & ticketing operations · Automation",
    title: "TDIS Logistics",
    desc: "Systems and automation built around airline ticketing, travel operations, and WhatsApp-based workflows — replacing manual, message-by-message coordination with structured, repeatable processes and reporting.",
    tags: ["WhatsApp automation", "Workflow tooling", "Reporting"],
  },
  {
    index: "02",
    slug: "globetech",
    role: "Application & grant platform · Operations",
    title: "GlobeTech",
    desc: "A functioning operational platform for application workflows, referrals, and staff hierarchy — not a marketing site. Built for dashboards, KPI visibility, and data management across an organisation, not a single user.",
    tags: ["Application workflows", "Dashboards", "Staff hierarchy"],
  },
  {
    index: "03",
    slug: "whatsapp-ai-automation",
    role: "AI-assisted conversations · Automation platform",
    title: "WhatsApp / AI Automation Platform",
    desc: "Backend and AI layer for WhatsApp-based booking and business conversations — the direction of Muhammed's future work through Fudur Automation, turning repetitive business processes into automated systems.",
    tags: ["AI agents", "WhatsApp API", "Booking automation"],
  },
];

function WorkVisual({ slug }: { slug: string }) {
  if (slug === "tdis-logistics") {
    return (
      <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="24" y="30" width="120" height="34" rx="3" className="flow-node" />
        <text x="34" y="51" className="flow-label">BOOKING REQUEST</text>
        <line x1="84" y1="64" x2="84" y2="104" className="flow-line" />
        <rect x="24" y="104" width="120" height="34" rx="3" className="flow-node flow-node--accent" />
        <text x="34" y="125" className="flow-label">AUTOMATION</text>
        <line x1="84" y1="138" x2="84" y2="178" className="flow-line" />
        <rect x="24" y="178" width="120" height="34" rx="3" className="flow-node" />
        <text x="34" y="199" className="flow-label">TICKET / REPORT</text>
        <line x1="144" y1="47" x2="220" y2="47" className="flow-line" />
        <rect x="220" y="30" width="96" height="34" rx="3" className="flow-node" />
        <text x="230" y="51" className="flow-label">WHATSAPP</text>
        <line x1="144" y1="121" x2="220" y2="121" className="flow-line" />
        <rect x="220" y="104" width="96" height="34" rx="3" className="flow-node" />
        <text x="230" y="125" className="flow-label">AIRLINE OPS</text>
      </svg>
    );
  }
  if (slug === "globetech") {
    return (
      <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="140" y="20" width="110" height="34" rx="3" className="flow-node flow-node--accent" />
        <text x="150" y="41" className="flow-label">APPLICANT</text>
        <line x1="195" y1="54" x2="195" y2="94" className="flow-line" />
        <rect x="140" y="94" width="110" height="34" rx="3" className="flow-node" />
        <text x="150" y="115" className="flow-label">WORKFLOW</text>
        <line x1="195" y1="128" x2="90" y2="168" className="flow-line" />
        <line x1="195" y1="128" x2="300" y2="168" className="flow-line" />
        <rect x="35" y="168" width="110" height="34" rx="3" className="flow-node" />
        <text x="45" y="189" className="flow-label">STAFF REVIEW</text>
        <rect x="245" y="168" width="110" height="34" rx="3" className="flow-node" />
        <text x="255" y="189" className="flow-label" fontSize="8.5">DASHBOARD / KPI</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="20" y="112" width="80" height="34" rx="3" className="flow-node" />
      <text x="28" y="133" className="flow-label">USER</text>
      <line x1="100" y1="129" x2="140" y2="129" className="flow-line flow-line--active" />
      <rect x="140" y="112" width="80" height="34" rx="3" className="flow-node flow-node--accent" />
      <text x="148" y="133" className="flow-label">AI LAYER</text>
      <line x1="220" y1="129" x2="260" y2="129" className="flow-line" />
      <rect x="260" y="112" width="60" height="34" rx="3" className="flow-node" />
      <text x="268" y="133" className="flow-label">API</text>
      <line x1="180" y1="112" x2="180" y2="72" className="flow-line" />
      <rect x="130" y="38" width="100" height="34" rx="3" className="flow-node" />
      <text x="140" y="59" className="flow-label">BUSINESS LOGIC</text>
    </svg>
  );
}

export default function Work() {
  return (
    <section className="section section--raised" id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow">02 · Selected Work</span>
            <h2 className="display-2">Three systems, three problems.</h2>
          </div>
          <p className="lede" style={{ margin: 0 }}>
            Not a portfolio of demos — a record of software built to run real operations.
          </p>
        </div>

        <div className="work-list">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <Link href={`/work/${project.slug}`} className="work-item">
                <span className="work-item__index">{project.index}</span>
                <div className="work-item__body">
                  <span className="work-item__role">{project.role}</span>
                  <h3>{project.title}</h3>
                  <p className="work-item__desc">{project.desc}</p>
                  <div className="work-item__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="work-item__visual">
                  <WorkVisual slug={project.slug} />
                  <span className="work-item__link" aria-hidden="true">↗</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
