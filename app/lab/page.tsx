import type { Metadata } from "next";
import { LensNav, RouteFooter } from "../LensNav";
import { project, publicLinks } from "../site-data";
import { LabSystems } from "./LabClient";

export const metadata: Metadata = {
  title: "Inspectable Systems — Madan Park",
  description:
    "A deep-tech portfolio for AI labs, engineering teams, and product leaders who want inputs, outputs, trust boundaries, and inspectable proof.",
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
            <span><i /> MCP_LAB ONLINE</span><span>2× HACKATHON 2ND · 2026</span><span>BUILD 2026.07</span>
          </div>
          <div className="lab-hero-grid">
            <div className="lab-hero-copy">
              <p>ENGINEERING PORTFOLIO / TRUST-AWARE SYSTEMS</p>
              <h1>Messy inputs.<br />Inspectable outputs.</h1>
              <p className="lab-lede">
                AI products are systems, not model calls. I work on capture, retrieval,
                interfaces, queues, approvals, recovery, and the source trail users need
                when the answer matters.
              </p>
              <div className="lab-actions">
                <a href="#systems">Inspect systems</a>
                <a href={publicLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
            <div className="lab-console" aria-label="System principles console">
              <div><span>mcp@lab:~$</span> profile --mode systems</div>
              <p>ROLE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product engineer / systems operator</p>
              <p>INPUTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;video · corpora · browser · public records</p>
              <p>CONSTRAINTS&nbsp;privacy · evidence · legacy · permission</p>
              <p>OUTPUTS&nbsp;&nbsp;&nbsp;&nbsp;tools people can inspect and operate</p>
              <div><span>mcp@lab:~$</span> <b className="lab-cursor" aria-hidden="true" /></div>
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
          <div><span>VERIFIED</span><strong>OpenAI hackathon · 2nd place</strong><small>Organizer-confirmed · June 2026</small></div>
          <div><span>VERIFIED</span><strong>ElevenLabs × Zed · 2nd place</strong><small>Organizer-confirmed · May 2026</small></div>
          <div><span>SHIPPED</span><strong>GPTandme Chrome extension</strong><small>Public repository + store surface</small></div>
        </section>

        <section className="lab-systems" id="systems">
          <div className="lab-section-head">
            <div><span>01</span><p>SYSTEM INDEX</p></div>
            <h2>Selected machinery</h2>
            <p>Filter by the kind of signal or trust boundary you care about.</p>
          </div>
          <LabSystems items={systems} />
        </section>

        <section className="lab-architecture">
          <div className="lab-section-head">
            <div><span>02</span><p>OPERATING MODEL</p></div>
            <h2>The unglamorous stack</h2>
            <p>The layers that determine whether an AI demo becomes a usable system.</p>
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
            <div><span>03</span><p>RANGE</p></div>
            <h2>Comfortable across the seam</h2>
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
          <div><span>READY</span><h2>Bring the corpus, workflow, recording, or system nobody has made legible yet.</h2></div>
          <a href={publicLinks.email}>INITIATE CONVERSATION →</a>
        </section>
      </main>
      <RouteFooter current="lab" />
    </div>
  );
}
