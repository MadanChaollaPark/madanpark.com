import type { Metadata } from "next";
import { LensNav, RouteFooter } from "../LensNav";
import { history, project, publicLinks } from "../site-data";

export const metadata: Metadata = {
  title: "The Unreasonable Operator — Madan Park",
  description:
    "A brutalist portfolio for founders, investors, and operators evaluating Madan Park's ability to enter overlooked markets and ship.",
};

const proof = [project("eujobs"), project("gptandme"), project("lobbyear"), project("vanipedia")];

export default function OperatorPage() {
  return (
    <div className="operator-site">
      <LensNav current="operator" />

      <main>
        <header className="operator-hero">
          <div className="operator-stamp">FOR FOUNDERS / INVESTORS / OPERATORS</div>
          <h1>Give me the market everybody else calls too weird.</h1>
          <div className="operator-hero-bottom">
            <p>
              I enter systems with hidden rules, ugly data, and real users—then turn the
              mess into a product people can inspect, use, and hand off.
            </p>
            <div className="operator-actions">
              <a href="#operator-proof">Read the receipts</a>
              <a href={publicLinks.email}>Start a conversation</a>
            </div>
          </div>
          <aside className="operator-ticket" aria-label="Operator profile summary">
            <span>MCP / OP-01</span>
            <strong>Founder · Builder · Systems operator</strong>
            <dl>
              <div><dt>Territory</dt><dd>Overlooked markets</dd></div>
              <div><dt>Method</dt><dd>Enter · map · ship</dd></div>
              <div><dt>Base</dt><dd>Seoul / Europe</dd></div>
            </dl>
          </aside>
        </header>

        <section className="operator-signal-bar" aria-label="Selected externally supported signals">
          <article>
            <strong>2× second place</strong>
            <span>OpenAI and ElevenLabs × Zed hackathons · May–June 2026</span>
          </article>
          <article>
            <strong>20.8K clicks</strong>
            <span>EUJobs organic search · 2.33M impressions · May 2026</span>
          </article>
          <article>
            <strong>352 comments</strong>
            <span>“Dear Europe, my startup is leaving” public debate</span>
          </article>
        </section>

        <div className="operator-marquee" aria-hidden="true">
          <span>POLICY × AI × ARCHIVES × JOBS × PUBLIC DATA × STRANGE MARKETS ×</span>
          <span>POLICY × AI × ARCHIVES × JOBS × PUBLIC DATA × STRANGE MARKETS ×</span>
        </div>

        <section className="operator-proof" id="operator-proof">
          <div className="operator-section-title">
            <span>01 / Proof</span>
            <h2>Not one industry. One repeatable move.</h2>
          </div>
          <div className="operator-proof-grid">
            {proof.map((item, index) => (
              <article key={item.id}>
                <div className="operator-proof-meta">
                  <span>0{index + 1}</span>
                  <span>{item.status}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.short}</p>
                <p className="operator-proof-detail">{item.detail}</p>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer">Inspect public proof ↗</a>
                ) : (
                  <span className="operator-private">Public-safe description</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="operator-pattern">
          <div className="operator-section-title">
            <span>02 / Pattern</span>
            <h2>How the work compounds.</h2>
          </div>
          <ol>
            <li><span>ENTER</span><p>Learn the rules from the people living inside the workflow.</p></li>
            <li><span>MODEL</span><p>Separate the real constraint from the story the institution tells about it.</p></li>
            <li><span>SHIP</span><p>Build the smallest complete surface that makes the leverage visible.</p></li>
            <li><span>LEAVE PROOF</span><p>Sources, states, tests, and handoff matter more than demo magic.</p></li>
          </ol>
        </section>

        <section className="operator-history">
          <div className="operator-section-title">
            <span>03 / Arc</span>
            <h2>Three cities. The same question.</h2>
          </div>
          <div className="operator-history-grid">
            {history.map((step, index) => (
              <article key={step.place}>
                <span>0{index + 1}</span>
                <h3>{step.place}</h3>
                <strong>{step.label}</strong>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="operator-cta">
          <p>Best fit</p>
          <h2>A strange market, a serious deadline, and permission to get specific.</h2>
          <div>
            <a href={publicLinks.email}>Back, hire, or build with Madan</a>
            <a href={publicLinks.github} target="_blank" rel="noreferrer">Open GitHub ↗</a>
            <a href="https://www.linkedin.com/posts/madanpark_dear-europe-my-startup-is-leaving-its-activity-7310211843535323136-bqKU" target="_blank" rel="noreferrer">Read “Dear Europe” ↗</a>
          </div>
        </section>
      </main>

      <RouteFooter current="operator" />
    </div>
  );
}
