export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <div className="footer__name">Muhammed Abdulwahab</div>
          <div className="footer__role">AI Automation &amp; Full-Stack Systems Builder</div>
        </div>
        <div className="footer__links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </div>
      <div className="wrap footer__copy">© {new Date().getFullYear()} Muhammed Abdulwahab. Built with intent.</div>
    </footer>
  );
}
