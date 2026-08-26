import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section className="section section--raised section--tight" id="resume">
      <div className="wrap">
        <Reveal>
          <div className="resume-panel">
            <div className="resume-panel__left">
              <span className="eyebrow eyebrow--pill" style={{ marginBottom: 14 }}>Resume</span>
              <h3>The short version, on paper.</h3>
              <p>Role, tools, and the systems behind them, in a single file.</p>
            </div>
            <div className="resume-panel__actions">
              <a href="/resume.pdf" className="btn btn--primary" download>
                Download CV <span className="btn__arrow" aria-hidden="true">↓</span>
              </a>
              <a href="/resume.pdf" className="btn btn--ghost-on-flame" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
