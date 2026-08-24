import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact__grid">
          <Reveal>
            <span className="eyebrow">09 · Contact</span>
            <h2 className="display-2 contact__title" style={{ marginTop: 20 }}>
              Have a problem worth automating?
            </h2>
            <p className="lede">
              If you&rsquo;re building a product, improving an operation, or trying to automate
              something that shouldn&rsquo;t be manual — let&rsquo;s talk.
            </p>
            <a href="mailto:hello@example.com" className="btn btn--primary" style={{ marginTop: 30 }}>
              Email Muhammed <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="contact__channels">
              <a href="mailto:hello@example.com" className="contact__channel">
                <span>
                  <span className="contact__channel-label">EMAIL</span>
                  <span className="contact__channel-value">hello@example.com</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="contact__channel">
                <span>
                  <span className="contact__channel-label">LINKEDIN</span>
                  <span className="contact__channel-value">/in/muhammed-abdulwahab</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="contact__channel">
                <span>
                  <span className="contact__channel-label">GITHUB</span>
                  <span className="contact__channel-value">github.com/[username]</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="mono" style={{ color: "var(--ink-faint)", marginTop: 16, fontSize: 11.5 }}>
              Placeholder contact details — replace email, LinkedIn and GitHub links with real ones
              before launch. Add WhatsApp only if you want it listed publicly.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
