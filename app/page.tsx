import type { Metadata } from "next";
import { lenses, publicLinks } from "./site-data";

export const metadata: Metadata = {
  title: "Madan Park — Five Rooms, One History",
  description:
    "Five audience-specific portfolio versions for Madan Park: operator, creative playground, institutional brief, literary story, and engineering lab.",
};

export default function Home() {
  return (
    <main className="index-site">
      <header className="index-masthead">
        <a href="/" className="index-mark" aria-label="Madan Park home">
          MP
        </a>
        <p>
          Madan Chaolla Park
          <span>Seoul · Brussels · Bologna</span>
        </p>
        <div>
          <a href={publicLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={publicLinks.email}>Email</a>
        </div>
      </header>

      <section className="index-hero">
        <p className="index-kicker">Audience router / 2026</p>
        <h1>
          Five rooms.
          <br />
          One history.
        </h1>
        <div className="index-intro">
          <p>
            Madan builds tools for systems generic software overlooks: public affairs,
            institutional archives, AI workflows, strange markets, and human signals.
          </p>
          <p>
            The facts stay fixed. The proof, language, pace, and visual world change for
            the person entering the room.
          </p>
        </div>
      </section>

      <section className="lens-directory" aria-labelledby="choose-lens">
        <div className="directory-head">
          <span id="choose-lens">Choose the room</span>
          <span>01—05</span>
        </div>
        {lenses.map((lens) => (
          <a className={`lens-card lens-card--${lens.slug}`} href={`/${lens.slug}/`} key={lens.slug}>
            <span className="lens-number">{lens.number}</span>
            <div>
              <p>{lens.audience}</p>
              <h2>{lens.title}</h2>
            </div>
            <div className="lens-card-copy">
              <span>{lens.style}</span>
              <p>{lens.promise}</p>
            </div>
            <span className="lens-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </section>

      <section className="index-note">
        <p>Source posture</p>
        <div>
          <h2>Private history informed the edit. Only public-safe claims made the page.</h2>
          <p>
            Built from the live portfolio source, public work, project archives, and a
            privacy-screened review of personal documents and correspondence. Sensitive
            legal, financial, relationship, and third-party details are deliberately absent.
          </p>
        </div>
      </section>

      <footer className="index-footer">
        <span>© {new Date().getFullYear()} Madan Park</span>
        <span>One person, five useful readings.</span>
      </footer>
    </main>
  );
}
