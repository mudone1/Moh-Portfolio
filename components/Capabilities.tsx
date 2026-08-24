import Reveal from "./Reveal";

const GROUPS = [
  {
    label: "Build",
    items: ["Node.js", "TypeScript / JavaScript", "React & Next.js", ".NET"],
    note: "The application layer.",
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Supabase", "Database design", "Data workflows"],
    note: "Where the system remembers.",
  },
  {
    label: "Automation",
    items: ["API integrations", "Workflow automation", "WhatsApp automation", "Business process automation"],
    note: "Where the manual work disappears.",
  },
  {
    label: "AI",
    items: ["LLM integrations", "AI assistants", "Prompt engineering", "AI agents"],
    note: "Where the system starts deciding.",
  },
  {
    label: "Product",
    items: ["System architecture", "MVP development", "Business analysis", "Problem framing"],
    note: "Where it all has to fit together.",
  },
];

export default function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow">03 · Capabilities</span>
            <h2 className="display-2">What he can build, grouped by what it does.</h2>
          </div>
        </div>

        <Reveal>
          <div className="cap-grid">
            {GROUPS.map((group) => (
              <div className="cap-cell" key={group.label}>
                <span className="cap-cell__label">{group.label}</span>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="cap-cell__note">{group.note}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
