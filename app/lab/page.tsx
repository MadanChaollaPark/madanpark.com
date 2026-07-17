import type { Metadata } from "next";
import { LensNav, RouteFooter } from "../LensNav";
import { project, publicLinks } from "../site-data";
import { LabSystems } from "./LabClient";

export const metadata: Metadata = {
  title: "Signal Intelligence — Madan Park",
  description:
    "An OSINT-inspired engineering portfolio for teams that want queryable systems, evidence trails, trust boundaries, and inspectable proof.",
};

const systems = [
  project("gptandme"),
  project("lobbyear"),
  project("signchat"),
  project("vanipedia"),
  project("learnhermes"),
  project("argus"),
  project("piano"),
];

export default function LabPage() {
  return (
    <div className="lab-site">
      <LensNav current="lab" />
      <main>
        <header className="lab-hero">
          <div className="lab-statusbar">
            <span><i /> MCP_INTEL ONLINE</span><span>MODE: PASSIVE_OSINT</span><span>PUBLIC + USER-OWNED DATA ONLY</span>
          </div>
          <div className="lab-hero-grid">
            <div className="lab-hero-copy">
              <p>PORTFOLIO INTELLIGENCE / STATIC CASE INDEX</p>
              <h1>Query the<br />messy systems.</h1>
              <p className="lab-lede">
                Seven case files. Public evidence. No simulated breaches. Search the capture,
                retrieval, interface, permission, and recovery decisions that turn AI demos
                into systems people can inspect.
              </p>
              <div className="lab-actions">
                <a href="#systems">Run case index ↓</a>
                <a href={publicLinks.github} target="_blank" rel="noreferrer">View source ↗</a>
              </div>
            </div>
            <div className="lab-session" aria-label="Portfolio intelligence session">
              <div className="lab-session-head"><span>SESSION 05</span><span>READ_ONLY</span></div>
              <div className="lab-session-query"><span>mcpql&gt;</span> scope:portfolio evidence:public trust:inspectable</div>
              <pre>{`[OK] dataset mounted\n[OK] 7 case files indexed\n[OK] private operations redacted\n[OK] public links verified`}</pre>
              <dl>
                <div><dt>INPUTS</dt><dd>video / corpora / browser / public records</dd></div>
                <div><dt>METHODS</dt><dd>capture / normalize / retrieve / verify</dd></div>
                <div><dt>OUTPUTS</dt><dd>operable tools / evidence trails / handoff</dd></div>
              </dl>
              <div className="lab-session-ready"><span>READY</span><b className="lab-cursor" aria-hidden="true" /></div>
            </div>
          </div>
          <div className="lab-signal-strip">
            <span>CAPTURE</span><i />
            <span>INDEX</span><i />
            <span>RETRIEVE</span><i />
            <span>INSPECT</span><i />
            <span>ACT</span>
          </div>
        </header>

        <section className="lab-verification-strip" aria-label="Verification status">
          <div><span>CLASSIFICATION: VERIFIED</span><strong>OpenAI hackathon · 2nd place</strong><small>Organizer-confirmed · June 2026</small></div>
          <div><span>CLASSIFICATION: VERIFIED</span><strong>ElevenLabs × Zed · 2nd place</strong><small>Organizer-confirmed · May 2026</small></div>
          <div><span>CLASSIFICATION: SHIPPED</span><strong>GPTandme Chrome extension</strong><small>Public repository + store surface</small></div>
        </section>

        <aside className="lab-reference-note">
          <span>INTERFACE STUDY</span>
          <p>Visual grammar adapted from a real threat-intelligence workspace; all records below are Madan&apos;s own portfolio data, not live threat telemetry.</p>
          <a href="https://viz.greynoise.io/" target="_blank" rel="noreferrer">GREYNOISE VISUALIZER ↗</a>
        </aside>

        <section className="lab-systems" id="systems">
          <div className="lab-section-head">
            <div><span>01</span><p>CASE INDEX</p></div>
            <h2>Query the archive</h2>
            <p>Run a field filter. Every result exposes its input, output, trust boundary, tags, and public surface.</p>
          </div>
          <LabSystems items={systems} />
        </section>

        <section className="lab-architecture">
          <div className="lab-section-head">
            <div><span>02</span><p>PIPELINE TRACE</p></div>
            <h2>Signal to decision</h2>
            <p>The observable layers that determine whether an AI demo survives contact with a real workflow.</p>
          </div>
          <div className="architecture-stack">
            <article><span>05</span><h3>Human decision</h3><p>Clear next action, visible limits, reversible handoff.</p></article>
            <article><span>04</span><h3>Interface</h3><p>Search, state, evidence, permissions, and failure copy.</p></article>
            <article><span>03</span><h3>Agent / model</h3><p>Planning, tools, bounded autonomy, and evaluation.</p></article>
            <article><span>02</span><h3>Retrieval</h3><p>Indexes, filters, timestamps, identifiers, citations.</p></article>
            <article><span>01</span><h3>Source + operations</h3><p>Rights, capture, cleanup, recovery, cost, and monitoring.</p></article>
          </div>
        </section>

        <section className="lab-range">
          <div className="lab-section-head">
            <div><span>03</span><p>CAPABILITY FACETS</p></div>
            <h2>Field surface</h2>
          </div>
          <div className="lab-range-grid">
            <article><span>PRODUCT</span><p>Problem framing, IA, flows, prototypes, user-facing trust states.</p></article>
            <article><span>APPLICATION</span><p>TypeScript, React, Next.js, Node, Python, APIs, browser extensions.</p></article>
            <article><span>DATA</span><p>Scrapers, public records, MediaWiki, search, transcripts, normalization.</p></article>
            <article><span>AGENTS</span><p>Tools, memory, queues, approvals, provider integration, local-first state.</p></article>
            <article><span>OPERATIONS</span><p>Deployments, legacy systems, backups, observability, handoff.</p></article>
            <article><span>COMMUNICATION</span><p>Public affairs context, technical writing, demos, source-backed briefs.</p></article>
          </div>
        </section>

        <section className="lab-cta">
          <div><span>NEW CASE / AUTHORIZED SCOPE ONLY</span><h2>Bring the corpus, workflow, recording, or system nobody has made legible yet.</h2></div>
          <a href={publicLinks.email}>OPEN SECURE CHANNEL →</a>
        </section>
      </main>
      <RouteFooter current="lab" />
    </div>
  );
}
