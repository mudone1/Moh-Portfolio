import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow">01 · About</span>
          </div>
        </div>

        <div className="intro__grid">
          <Reveal className="intro__col">
            <div className="intro__portrait">
              <Image
                src="/muhammed-abdulwahab.jpg"
                alt="Muhammed Abdulwahab"
                fill
                sizes="(max-width: 860px) 60vw, 340px"
                priority
              />
              <div className="intro__portrait-caption">
                <span>M. ABDULWAHAB</span>
                <span>hover for color</span>
              </div>
            </div>
            <div className="intro__statement">
              &ldquo;I don&rsquo;t start with technology. I start with the problem.&rdquo;
            </div>
          </Reveal>
          <Reveal className="intro__body" delay={0.08}>
            <p>
              Muhammed Abdulwahab works at the intersection of business operations and software.
              Before he was writing production code, he was thinking in workflows — where time gets
              lost, where a process breaks down between departments, where a WhatsApp message turns
              into three days of manual follow-up.
            </p>
            <p>
              That background shapes how he builds. Technology, for him, isn&rsquo;t the starting
              point — it&rsquo;s the tool he reaches for once the problem is actually understood. He
              combines business thinking, analytical reasoning, and full-stack engineering to design
              systems that hold up in production, not just in a demo.
            </p>
            <p>
              He has built and maintained real systems for travel and logistics operations,
              application and grant platforms, and AI-assisted customer workflows on WhatsApp —
              software that people use, not portfolio pieces.
            </p>
            <div className="intro__tags">
              <span className="tag">Business thinking</span>
              <span className="tag">Systems design</span>
              <span className="tag">Automation</span>
              <span className="tag">AI integration</span>
              <span className="tag">Product thinking</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
