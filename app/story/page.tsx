import type { Metadata } from "next";
import { LensNav, RouteFooter } from "../LensNav";
import { publicLinks } from "../site-data";

export const metadata: Metadata = {
  title: "Pasta Water — Madan Park",
  description:
    "Madan Park's literary portfolio: a memoir in progress about hunger, paperwork, belonging, politics, and building another language of power.",
};

export default function StoryPage() {
  return (
    <div className="story-site">
      <LensNav current="story" />
      <main>
        <header className="story-hero">
          <div className="story-folio">A memoir in progress · Folio 04</div>
          <div className="story-title-block">
            <p>by Madan Chaolla Park</p>
            <h1>Pasta<br />Water</h1>
            <span>A memoir of hunger, paperwork, and power.</span>
          </div>
          <div className="story-opening">
            <p>
              Before I built software, I learned how institutions decide who becomes legible.
            </p>
            <p>
              I tried to earn belonging through Italian politics. Brussels showed me power
              from the underside. Seoul made me ask what remains when nationality, ambition,
              and home stop meaning the same thing.
            </p>
            <a href="#story-arc">Read the premise ↓</a>
          </div>
        </header>

        <section className="story-premise" id="story-arc">
          <aside><span>01</span><p>The book</p></aside>
          <div>
            <p className="story-dropcap">
              A Korean child raised between countries tries to earn belonging through Italian
              democratic politics. Hunger, class, and paperwork break the future he imagined;
              from Brussels, he begins building another language of power.
            </p>
            <blockquote>
              “Belonging is administered through meals, forms, language, money, and rooms.”
            </blockquote>
            <p>
              <em>Pasta Water</em> is planned as a literary memoir and memoir of ideas—not a
              founder victory story, a technology résumé, or a claim to an identity the record
              does not support. The work is still being written.
            </p>
          </div>
        </section>

        <section className="story-chapters">
          <aside><span>02</span><p>The arc</p></aside>
          <div className="chapter-list">
            <article>
              <span>I</span>
              <div><p>Bologna</p><h2>The country I meant to deserve</h2></div>
              <p>School offices, party rooms, campaigns, class codes, food, and the belief that service could manufacture belonging.</p>
            </article>
            <article>
              <span>II</span>
              <div><p>Brussels</p><h2>Power seen from underneath</h2></div>
              <p>Public affairs, precarity, paperwork, and the moment institutions become both the subject and the antagonist.</p>
            </article>
            <article>
              <span>III</span>
              <div><p>Seoul</p><h2>Building as a replacement language</h2></div>
              <p>Job boards, archives, AI tools, and the unsettled question of whether making systems legible can make a person legible too.</p>
            </article>
          </div>
        </section>

        <section className="story-themes">
          <aside><span>03</span><p>Public conversations</p></aside>
          <div>
            <h2>Stories that travel beyond the book.</h2>
            <div className="theme-grid">
              <article><span>Essay</span><h3>Hunger becomes ambition</h3><p>Food, shame, class mobility, and the private cost of appearing inevitable.</p></article>
              <article><span>Essay</span><h3>The rooms power keeps closed</h3><p>Politics, public affairs, credibility, and how paperwork turns belonging into a performance.</p></article>
              <article><span>Conversation</span><h3>Building after politics</h3><p>Why job boards, knowledge archives, and public-data tools became another way to intervene.</p></article>
              <article><span>Conversation</span><h3>Between Korea and Europe</h3><p>Third-culture identity without the clean ending of a return-home story.</p></article>
            </div>
          </div>
        </section>

        <section className="story-public-proof">
          <aside><span>04</span><p>Public voice</p></aside>
          <div>
            <h2>The writing did not begin with the memoir.</h2>
            <div className="story-proof-list">
              <a href="https://www.linkedin.com/posts/madanpark_dear-europe-my-startup-is-leaving-its-activity-7310211843535323136-bqKU" target="_blank" rel="noreferrer">
                <span>2025 / Essay</span>
                <strong>Dear Europe, my startup is leaving</strong>
                <p>A public founder postmortem that became a 352-comment argument about Europe, ambition, and institutional friction.</p>
              </a>
              <a href="https://youtu.be/r6wo9XiqkeI" target="_blank" rel="noreferrer">
                <span>2024 / Interview</span>
                <strong>AI, technology, government, lobbying, and law</strong>
                <p>A published SVIC Podcast conversation connecting the policy and technology threads.</p>
              </a>
              <a href="https://www.youtube.com/channel/UCq3kVmjP1ZrvBFBoDjTZyyA" target="_blank" rel="noreferrer">
                <span>2021 / Community</span>
                <strong>Bologna BookClub</strong>
                <p>Organized conversations with Ivan Krastev, Emily Tamkin, Philippe Van Parijs, Johan Schot, and other serious thinkers.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="story-bio">
          <aside><span>05</span><p>Short biography</p></aside>
          <div>
            <p>
              Madan Chaolla Park, known professionally as Madan Park, is a Korean builder and
              writer shaped by Italy, Brussels, and Seoul. His work moves between public affairs,
              AI tools, specialist job markets, and the modernization of institutional archives.
              He writes about ambition, access, paperwork, failure, and what power is for.
            </p>
            <div>
              <a href={publicLinks.email}>Editorial and media enquiries</a>
              <a href={publicLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </section>

        <section className="story-contact">
          <p>For editors, agents, journalists, podcast hosts, and careful readers.</p>
          <h2>The archive is large. The story is becoming specific.</h2>
          <a href={publicLinks.email}>Write to Madan →</a>
        </section>

        <aside className="story-note">
          <span>Author&apos;s note</span>
          <p>
            This public page deliberately omits private relationships, unresolved legal detail,
            unsupported financial claims, and scenes not yet ready for publication.
          </p>
        </aside>
      </main>
      <RouteFooter current="story" />
    </div>
  );
}
