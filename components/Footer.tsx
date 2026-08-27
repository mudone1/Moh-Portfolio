export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <div className="footer__name">Bidemi Abdulwahab</div>
          <div className="footer__role">AI Automation &amp; Full-Stack Systems Builder</div>
        </div>
        <div className="footer__links">
          <a href="https://github.com/mudone1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/muhammed-abdulwahab-b89762154" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:muhammedabdulwahab77@gmail.com">Email</a>
        </div>
      </div>
      <div className="wrap footer__copy">© {new Date().getFullYear()} Bidemi Abdulwahab. Built with intent.</div>
    </footer>
  );
}
