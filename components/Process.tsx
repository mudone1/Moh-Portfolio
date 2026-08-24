import Reveal from "./Reveal";

const STEPS = [
  { num: "01", title: "Understand the problem", desc: "Before any code, the actual bottleneck: who's doing what manually, and why it hurts." },
  { num: "02", title: "Map the workflow", desc: "Every step a task actually takes today — not the version described in a meeting." },
  { num: "03", title: "Design the system", desc: "Architecture that fits the workflow, not a workflow forced onto someone else's template." },
  { num: "04", title: "Automate the repetitive parts", desc: "Anything done the same way twice becomes a candidate for automation, not a permanent chore." },
  { num: "05", title: "Build", desc: "Working software, shipped in stages — not a single all-or-nothing release." },
  { num: "06", title: "Test", desc: "Against how the system is actually used, including the edge cases people don't mention upfront." },
  { num: "07", title: "Improve", desc: "Systems keep changing shape once real usage starts. So does the software behind them." },
];

export default function Process() {
  return (
    <section className="section section--raised">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow">04 · How I Think</span>
            <h2 className="display-2">
              I don&rsquo;t just write software.
              <br />I solve systems.
            </h2>
          </div>
        </div>

        <div className="process-list">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.03}>
              <div className="process-item">
                <span className="process-item__num">{step.num}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
