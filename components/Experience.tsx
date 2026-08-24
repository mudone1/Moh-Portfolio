import Reveal from "./Reveal";

const ITEMS = [
  {
    period: "[Add dates]",
    title: "Systems & Automation",
    org: "TDIS Logistics",
    desc: "Designed and built automation and reporting systems around airline ticketing and travel operations, including WhatsApp-based workflows that replaced manual, message-by-message coordination.",
  },
  {
    period: "[Add dates]",
    title: "Platform Development",
    org: "GlobeTech",
    desc: "Built an operational platform covering application workflows, referral tracking, staff hierarchy, and administrative dashboards — used to run a real process, not to market one.",
  },
  {
    period: "Ongoing",
    title: "Founder, Building in Public",
    org: "Fudur Automation",
    desc: "Developing AI-driven automation for WhatsApp and business-process workflows — the next stage of the systems work started with TDIS and GlobeTech.",
  },
  {
    period: "[Add dates]",
    title: "[Add role] — Business Development & Operations",
    org: "[Add company / context]",
    desc: "[Add a short, specific description of this role — scope, responsibilities, and what it taught you about how businesses actually run. This is a placeholder; replace with real detail before publishing.]",
  },
];

export default function Experience() {
  return (
    <section className="section section--raised" id="experience">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow">06 · Experience</span>
            <h2 className="display-2">Business and technology, together.</h2>
          </div>
        </div>

        <Reveal>
          <div className="timeline">
            {ITEMS.map((item) => (
              <div className="timeline-item" key={item.title}>
                <span className="timeline-item__period">{item.period}</span>
                <div>
                  <h4>{item.title}</h4>
                  <span className="timeline-item__org">{item.org}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
