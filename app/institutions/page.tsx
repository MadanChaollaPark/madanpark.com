import type { Metadata } from "next";
import { LensNav, RouteFooter } from "../LensNav";
import { history, project, publicLinks } from "../site-data";

export const metadata: Metadata = {
  title: "The Evidence Brief — Madan Park",
  description:
    "A Swiss editorial portfolio for policy teams, foundations, public-affairs leaders, and mission-driven institutions.",
};

const briefs = [project("lobbyear"), project("eujobs"), project("vanipedia")];

export default function InstitutionsPage() {
  return (
    <div className="institution-site">
      <LensNav current="institutions" />
      <main>
        <header className="institution-hero">
          <div className="institution-issue">
            <span>BRIEF 03</span><span>13 JUL 2026</span><span>SEOUL / BRUSSELS</span>
          </div>
          <div className="institution-hero-grid">
            <div>
              <p className="institution-kicker">Technology for public and mission-driven systems</p>
              <h1>Software for institutions with consequences.</h1>
            </div>
            <div className="institution-abstract">
              <span>Abstract</span>
              <p>
                Madan Park builds source-aware software for policy work, public data,
                specialist hiring, and knowledge archives—contexts where an elegant answer
                is worthless if nobody can inspect where it came from. No AI theatre; the
                records, permissions, and human decision stay visible.
              </p>
              <a href="#evidence-briefs">Review the briefs ↓</a>
            </div>
          </div>
        </header>

        <section className="institution-signals" aria-label="Selected evidence signals">
          <article><span>A</span><strong>20.8K organic clicks</strong><p>EUJobs · Google Search Console · May 2026</p></article>
          <article><span>B</span><strong>2.33M impressions</strong><p>EUJobs · Google Search Console · May 2026</p></article>
          <article><span>C</span><strong>European + Korean contexts</strong><p>Campaigns, public affairs, research, and institutional technology</p></article>
          <article><span>D</span><strong>Published interview</strong><p>AI, technology, government, lobbying, and law · 2024</p></article>
        </section>

        <section className="institution-thesis">
          <div className="institution-section-label"><span>01</span> Mandate</div>
          <div>
            <h2>Every institution has rules before it has APIs.</h2>
            <p>
              The strongest systems do not hide complexity behind AI. They make sources,
              permissions, uncertainty, and the next human decision easier to see.
            </p>
          </div>
        </section>

        <section className="institution-briefs" id="evidence-briefs">
          <div className="institution-section-label"><span>02</span> Selected evidence</div>
          <div className="brief-list">
            {briefs.map((item, index) => (
              <article key={item.id}>
                <div className="brief-index">A.{index + 1}</div>
                <div className="brief-title"><span>{item.tags[0]}</span><h3>{item.name}</h3></div>
                <p>{item.detail}</p>
                <dl>
                  <div><dt>Signal</dt><dd>{item.signal}</dd></div>
                  <div><dt>Surface</dt><dd>{item.output}</dd></div>
                  <div><dt>State</dt><dd>{item.status}</dd></div>
                </dl>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer">Open public evidence ↗</a>
                ) : (
                  <span className="brief-boundary">Operational detail withheld</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="institution-method">
          <div className="institution-section-label"><span>03</span> Working method</div>
          <div className="method-matrix">
            <article><span>1</span><h3>Map the rulebook</h3><p>Who decides, what counts as evidence, and where the real exceptions live.</p></article>
            <article><span>2</span><h3>Stabilize the source</h3><p>Inventory, provenance, rights, recovery, and a clear boundary around uncertainty.</p></article>
            <article><span>3</span><h3>Build the decision surface</h3><p>Search, filters, evidence clips, workflows, and handoff—not a decorative chatbot.</p></article>
            <article><span>4</span><h3>Leave an accountable system</h3><p>Explicit states, logs, limits, and a path that still works when the model does not.</p></article>
          </div>
        </section>

        <section className="institution-experience">
          <div className="institution-section-label"><span>04</span> Field context</div>
          <div className="experience-grid">
            {history.map((step) => (
              <article key={step.place}>
                <h3>{step.place}</h3>
                <span>{step.label}</span>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="institution-offer">
          <div>
            <p>Engagement format</p>
            <h2>Evidence Sprint</h2>
          </div>
          <div>
            <p>
              A focused mapping of a market, corpus, workflow, event, or public-data problem,
              ending in a source room, a decision surface, and a practical next-step plan.
            </p>
            <ul>
              <li>Source and stakeholder map</li>
              <li>Trust and failure-state ledger</li>
              <li>Prototype or workflow brief</li>
              <li>Build / buy / stop recommendation</li>
            </ul>
            <a href={publicLinks.email}>Commission a first conversation →</a>
          </div>
        </section>

        <aside className="institution-disclosure">
          <strong>Evidence boundary</strong>
          <p>
            Roles, affiliations, outcomes, and project states are described conservatively.
            Private correspondence informed selection but is not used as public proof.
          </p>
        </aside>
      </main>
      <RouteFooter current="institutions" />
    </div>
  );
}
