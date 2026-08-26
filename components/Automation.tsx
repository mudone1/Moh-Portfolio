import Reveal from "./Reveal";

const CAPS = [
  "Understand requests",
  "Trigger workflows",
  "Communicate with customers",
  "Connect APIs",
  "Process information",
  "Route tasks",
  "Apply predefined business rules and AI-assisted logic",
  "Reduce repetitive operational work",
];

export default function Automation() {
  return (
    <section className="section section--invert" id="automation">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow eyebrow--pill">AI &amp; Automation</span>
          </div>
        </div>

        <div className="automation__grid">
          <Reveal>
            <h2 className="display-2" style={{ marginBottom: 22 }}>
              The next layer of software is automated.
            </h2>
            <p className="lede" style={{ maxWidth: "52ch" }}>
              Most business software still requires people to manually move information from one
              place to another. Muhammed is interested in building systems where AI, APIs, and
              business rules work together to handle more of that coordination automatically.
            </p>
            <div className="fudur-note">
              This is the direction behind <strong>Fudur Automation</strong>, a platform Muhammed is
              currently building to turn repetitive business processes into reusable AI-powered
              workflows.
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="capability-pills">
              {CAPS.map((cap) => (
                <div key={cap}>
                  <span className="i">→</span> {cap}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
