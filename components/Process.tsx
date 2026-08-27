import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

const STEPS = [
  { num: "01", title: "Understand the problem", desc: "Before writing code, understand what is actually slowing the business down." },
  { num: "02", title: "Map the workflow", desc: "Understand what people do today, including the messy parts that don't appear in documentation." },
  { num: "03", title: "Design the system", desc: "Design software around the real workflow, rather than forcing the business into a generic template." },
  { num: "04", title: "Automate the repetitive parts", desc: "Identify the work that can be handled consistently by software." },
  { num: "05", title: "Build", desc: "Ship working software in stages, not one all-or-nothing release." },
  { num: "06", title: "Test", desc: "Test against real usage and the edge cases people don't mention upfront." },
  { num: "07", title: "Improve", desc: "Use real-world feedback to keep improving the system." },
];

export default function Process() {
  return (
    <section className="section section--raised">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow eyebrow--pill">How I Think</span>
            <h2 className="display-2">
              <WordReveal text="I don't just write software." />
              <br /><WordReveal text="I solve systems." />
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
