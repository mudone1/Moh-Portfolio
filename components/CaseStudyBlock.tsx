import Reveal from "./Reveal";

export default function CaseStudyBlock({
  num,
  title,
  raised = false,
  children,
}: {
  num: string;
  title: string;
  raised?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`section ${raised ? "section--raised" : ""}`}>
      <div className="wrap">
        <Reveal>
          <div className="cs-block">
            <div className="cs-block__label">
              <span className="num">{num}</span>
              <h2>{title}</h2>
            </div>
            <div className="cs-block__body">{children}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
