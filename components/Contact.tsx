import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact__grid">
          <Reveal>
            <span className="eyebrow eyebrow--pill">Contact</span>
            <h2 className="display-2 contact__title" style={{ marginTop: 20 }}>
              Have a problem worth automating?
            </h2>
            <p className="lede">
              If you&rsquo;re building a product, improving an operation, or trying to automate
              something that shouldn&rsquo;t be manual, let&rsquo;s talk.
            </p>
            <a href="mailto:muhammedabdulwahab77@gmail.com" className="btn btn--primary" style={{ marginTop: 30 }}>
              Email Muhammed <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="contact__channels">
              <a href="mailto:muhammedabdulwahab77@gmail.com" className="contact__channel">
                <span>
                  <span className="contact__channel-label">EMAIL</span>
                  <span className="contact__channel-value">muhammedabdulwahab77@gmail.com</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/muhammed-abdulwahab-b89762154" target="_blank" rel="noopener noreferrer" className="contact__channel">
                <span>
                  <span className="contact__channel-label">LINKEDIN</span>
                  <span className="contact__channel-value">/in/muhammed-abdulwahab</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com/mudone1" target="_blank" rel="noopener noreferrer" className="contact__channel">
                <span>
                  <span className="contact__channel-label">GITHUB</span>
                  <span className="contact__channel-value">github.com/mudone1</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
