import Reveal from "./Reveal";

const GROUPS = [
  {
    num: "01",
    title: "Build",
    desc: "The application layer — full-stack products built to be maintained, not just demoed.",
    tags: ["Node.js", "TypeScript / JavaScript", "React & Next.js", ".NET"],
  },
  {
    num: "02",
    title: "Data",
    desc: "Where the system remembers — modeled correctly so reporting and dashboards are simple.",
    tags: ["PostgreSQL", "Supabase", "Database design", "Data workflows"],
  },
  {
    num: "03",
    title: "Automation",
    desc: "Where the manual work disappears — APIs and workflows that replace repetitive coordination.",
    tags: ["API integrations", "Workflow automation", "WhatsApp automation", "Business process automation"],
  },
  {
    num: "04",
    title: "AI",
    desc: "Where the system starts deciding — understanding requests and routing them correctly.",
    tags: ["LLM integrations", "AI assistants", "Prompt engineering", "AI agents"],
  },
  {
    num: "05",
    title: "Product",
    desc: "Where it all has to fit together — architecture, scope, and problem framing.",
    tags: ["System architecture", "MVP development", "Business analysis", "Problem framing"],
  },
];

export default function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow eyebrow--pill">Capabilities</span>
            <h2 className="display-2">
              What I build, <span style={{ color: "var(--flame)" }}>for your business.</span>
            </h2>
          </div>
        </div>

        <div>
          {GROUPS.map((group, i) => (
            <Reveal key={group.num} delay={i * 0.03}>
              <div className="service-row">
                <span className="service-row__num">{group.num}</span>
                <div className="service-row__title">{group.title}</div>
                <div>
                  <p className="service-row__desc">{group.desc}</p>
                  <div className="service-row__tags">
                    {group.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
