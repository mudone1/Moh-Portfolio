import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";

export default function CaseStudyShell({
  eyebrow,
  title,
  lede,
  meta,
  nextHref,
  nextTitle,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  meta: { k: string; v: string }[];
  nextHref: string;
  nextTitle: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>
        <section className="section cs-hero">
          <div className="wrap">
            <Link href="/#work" className="cs-hero__back">← Back to selected work</Link>
            <span className="eyebrow eyebrow--pill">{eyebrow}</span>
            <h1 className="display-1" style={{ marginTop: 18 }}>{title}</h1>
            <p className="lede" style={{ marginTop: 20 }}>{lede}</p>

            <div className="cs-hero__meta">
              {meta.map((m) => (
                <div key={m.k}>
                  <span className="k">{m.k}</span>
                  <span className="v">{m.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {children}

        <section className="section section--tight">
          <div className="wrap cs-next">
            <div>
              <span className="eyebrow eyebrow--pill">Next</span>
              <div className="cs-next__title" style={{ marginTop: 10 }}>{nextTitle}</div>
            </div>
            <Link href={nextHref} className="btn btn--primary">
              View case study <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
