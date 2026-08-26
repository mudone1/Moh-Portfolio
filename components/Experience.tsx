import Reveal from "./Reveal";

const ITEMS = [
  {
    period: null,
    title: "Systems & Automation",
    org: "TDIS Logistics",
    desc: "Designed and built automation and reporting systems around airline ticketing and travel operations, including WhatsApp-based workflows that replaced manual, message-by-message coordination.",
  },
  {
    period: null,
    title: "Platform Development",
    org: "GlobeTech",
    desc: "Built an operational platform covering application workflows, referral tracking, staff hierarchy, and administrative dashboards, used to run a real process, not to market one.",
  },
  {
    period: "Ongoing",
    title: "Founder, Building in Public",
    org: "Fudur Automation",
    desc: "Developing AI-driven automation for WhatsApp and business-process workflows, the next stage of the systems work started with TDIS and GlobeTech.",
  },
  {
    period: null,
    title: "Business Development & Operations",
    org: "One Acre Fund Nigeria",
    desc: "Worked on field-level business development, expansion, and operational execution, coordinating with stakeholders and using data-driven analysis to identify inefficiencies. The same problem-first approach now shapes how he builds software.",
  },
];

export default function Experience() {
  return (
    <section className="section section--raised" id="experience">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow eyebrow--pill">Experience</span>
            <h2 className="display-2">Business and technology, together.</h2>
          </div>
        </div>

        <Reveal>
          <div className="timeline">
            {ITEMS.map((item) => (
              <div className="timeline-item" key={item.title}>
                {item.period ? <span className="timeline-item__period">{item.period}</span> : <span aria-hidden="true" />}
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
