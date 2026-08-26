import Reveal from "./Reveal";

const REPOS = [
  {
    name: "Tdislogistics",
    desc: "Travel-operations dashboard: airline wallet balances, ticket availability, client records, and a Playwright-based connector service.",
    lang: "TypeScript",
    url: "https://github.com/mudone1/Tdislogistics",
  },
  {
    name: "Globe-Tech",
    desc: "Application and referral platform with staff hierarchy, automated Sheets sync, and email workflows.",
    lang: "TypeScript",
    url: "https://github.com/mudone1/Globe-Tech",
  },
  {
    name: "fudur",
    desc: "Full-stack mobility platform connecting riders and drivers, the foundation for Fudur Automation.",
    lang: "TypeScript",
    url: "https://github.com/mudone1/fudur",
  },
];

export default function GithubSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="eyebrow eyebrow--pill">Open Work</span>
            <h2 className="display-2">Open work. Real systems.</h2>
          </div>
          <a className="text-link" href="https://github.com/mudone1" target="_blank" rel="noopener noreferrer">
            View GitHub profile ↗
          </a>
        </div>
        <p className="lede" style={{ marginBottom: 44 }}>
          The repositories behind the three projects above are public. Some parts are still evolving,
          same as most production systems.
        </p>

        <Reveal>
          <div className="repo-grid">
            {REPOS.map((repo) => (
              <a className="repo-card" key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer">
                <span className="repo-card__name">
                  {repo.name} <span className="mono" style={{ color: "var(--ink-faint)" }}>↗</span>
                </span>
                <p className="repo-card__desc">{repo.desc}</p>
                <span className="repo-card__meta">
                  <span>
                    <span className="lang-dot" />
                    {repo.lang}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
