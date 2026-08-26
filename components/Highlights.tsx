import Reveal from "./Reveal";

export default function Highlights() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="bento">
            <div className="bento-cell bento-cell--flame bento-cell--wide">
              <span className="bento-cell__label">Selected work</span>
              <div>
                <div className="bento-cell__value">3 systems, built for real operations</div>
              </div>
            </div>

            <div className="bento-cell">
              <span className="bento-cell__label">Status</span>
              <div>
                <div className="bento-cell__value">Open to opportunities</div>
                <p className="bento-cell__note">Remote-ready</p>
              </div>
            </div>

            <div className="bento-cell bento-cell--dark bento-cell--tall">
              <span className="bento-cell__label">Focus</span>
              <div>
                <div className="bento-cell__value">AI + Automation</div>
                <p className="bento-cell__note">Where most of the current work is heading.</p>
              </div>
            </div>

            <div className="bento-cell bento-cell--wide">
              <span className="bento-cell__label">Currently building</span>
              <div>
                <div className="bento-cell__value">Fudur Automation</div>
                <p className="bento-cell__note">Turning repetitive business processes into AI-powered workflows.</p>
              </div>
            </div>

            <div className="bento-cell">
              <span className="bento-cell__label">Approach</span>
              <div>
                <div className="bento-cell__value">Problem first</div>
                <p className="bento-cell__note">Technology second.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
