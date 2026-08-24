import Reveal from "./Reveal";

const CAPS = [
  "Understand requests, in natural language",
  "Trigger the right workflow automatically",
  "Communicate with customers directly",
  "Connect the APIs a business already runs on",
  "Process information and route it correctly",
  "Make decisions within clearly defined rules",
  "Remove repetitive operational work",
];

export default function Automation() {
  return (
    <section className="section section--invert" id="automation">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow">05 · AI &amp; Automation</span>
          </div>
        </div>

        <div className="automation__grid">
          <Reveal>
            <h2 className="display-2" style={{ marginBottom: 22 }}>
              The next layer of software is automated.
            </h2>
            <p className="lede" style={{ maxWidth: "52ch" }}>
              Most software still waits for someone to click a button. Muhammed is interested in the
              layer above that — systems that understand a request, trigger the right workflow, and
              complete it without a human relaying every step in between.
            </p>
            <div className="fudur-note">
              This direction is what Muhammed is building toward through <strong>Fudur Automation</strong> —
              turning repetitive business processes into automated systems that connect AI, APIs, and real
              operational workflows.
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
