import Reveal from "./Reveal";

const REPOS = [
  { name: "[repo-name-one]", desc: "[Add a one-line description of what this repository does and why it's worth looking at.]", lang: "TypeScript" },
  { name: "[repo-name-two]", desc: "[Add a one-line description of what this repository does and why it's worth looking at.]", lang: "Node.js" },
  { name: "[repo-name-three]", desc: "[Add a one-line description of what this repository does and why it's worth looking at.]", lang: "Python" },
];

export default function GithubSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow">07 · Open Work</span>
            <h2 className="display-2">Open work. Real systems.</h2>
          </div>
          {/* TODO: replace href with the real GitHub profile URL */}
          <a className="text-link" href="https://github.com/" target="_blank" rel="noopener noreferrer">
            View GitHub profile ↗
          </a>
        </div>
        <p className="lede" style={{ marginBottom: 44 }}>
          Selected repositories and experiments are public. Only the strongest work is listed here —
          the rest stays private, same as most production systems.
        </p>

        <Reveal>
          <div className="repo-grid">
            {REPOS.map((repo) => (
              <div className="repo-card" key={repo.name}>
                <span className="repo-card__name">
                  {repo.name} <span className="mono" style={{ color: "var(--ink-faint)" }}>↗</span>
                </span>
                <p className="repo-card__desc">{repo.desc}</p>
                <span className="repo-card__meta">
                  <span>
                    <span className="lang-dot" />
                    {repo.lang}
                  </span>
                  <span>[Add stars]</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="mono" style={{ color: "var(--ink-faint)", marginTop: 18 }}>
          These three cards are placeholders — swap in real repositories, or wire this section to the
          GitHub API to pull them automatically.
        </p>
      </div>
    </section>
  );
}
