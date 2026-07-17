import type { Metadata } from "next";
import { LensNav, RouteFooter } from "../LensNav";
import { project, publicLinks } from "../site-data";

export const metadata: Metadata = {
  title: "Tiny Useful Machines — Madan Park",
  description:
    "A glossy Japanese-kawaii portfolio for creative technologists, design collaborators, and people who like oddly useful prototypes.",
};

const toys = [project("piano"), project("signchat"), project("whatremains"), project("gptandme")];
const toyCharms = ["♬", "☝", "✦", "⌁"];
const toyNotes = ["map magic", "gesture play", "tiny story", "private + local"];

export default function PlaygroundPage() {
  return (
    <div className="kawaii-site">
      <LensNav current="playground" />
      <main>
        <header className="kawaii-hero">
          <div className="kawaii-petal-field" aria-hidden="true">
            <span>✿</span><span>♡</span><span>✦</span><span>✿</span><span>♡</span>
          </div>

          <aside className="kawaii-collage-card kawaii-collage-card--left" aria-hidden="true">
            <span>tiny machine 01</span>
            <strong>find a piano</strong>
            <small>tap tap ♫</small>
          </aside>
          <aside className="kawaii-collage-card kawaii-collage-card--right" aria-hidden="true">
            <span>studio note</span>
            <strong>human first</strong>
            <small>always ♡</small>
          </aside>

          <div className="kawaii-hero-copy">
            <p className="kawaii-label"><span aria-hidden="true">♡</span> <span lang="ja">ちいさな発明</span> / tiny inventions <span aria-hidden="true">♡</span></p>

            <figure className="kawaii-cameo" aria-label="Sakura Studio, a pink anime creator and robot cat making audio together">
              <img
                src="/kawaii-sakura-studio.webp"
                width={1672}
                height={941}
                alt="Pink Sakura Studio scene with an anime creator, microphone, cherry blossoms, and a robot cat"
              />
              <figcaption><span>MP</span> tiny machine club</figcaption>
              <i className="kawaii-cameo-bow" aria-hidden="true">୨୧</i>
              <i className="kawaii-cameo-heart" aria-hidden="true">♥</i>
            </figure>

            <h1>
              <span>Madan makes</span>
              <strong>tiny machines</strong>
              <span>for very human problems.</span>
            </h1>
            <p className="kawaii-lede">
              Maps for finding public pianos. Gestures that become conversations. A one-minute
              world with consequences. Private little counters for our enormous AI habits.
            </p>
            <div className="kawaii-actions">
              <a href="#toybox">Open the toybox <span aria-hidden="true">♥</span></a>
              <a href={publicLinks.email}><span lang="ja">いっしょにつくろう</span> / let&apos;s build</a>
            </div>
            <p className="kawaii-whisper">made in Seoul with curiosity, code &amp; too many pink tabs ✿</p>
          </div>

          <img
            className="kawaii-concierge"
            src="/kawaii-concierge.webp"
            width={1024}
            height={1536}
            alt="A cheerful pink-haired anime concierge holding a phone and project clipboard"
          />

          <div className="kawaii-sticker kawaii-sticker--spark" aria-hidden="true">so cute!<br />so useful!</div>
          <div className="kawaii-sticker kawaii-sticker--ribbon" aria-hidden="true">୨୧<br /><span>new idea!</span></div>
        </header>

        <section className="kawaii-proof-ribbon" aria-label="Recent proof">
          <span aria-hidden="true">♥</span>
          <p><strong>Back-to-back second places</strong> at OpenAI and ElevenLabs × Zed hackathons in 2026.</p>
          <span aria-hidden="true">✦</span>
          <small>proof, but make it pink</small>
        </section>

        <section className="kawaii-toybox" id="toybox">
          <div className="kawaii-section-head">
            <p><span aria-hidden="true">୨୧</span> <span lang="ja">おもちゃ箱</span> / toybox</p>
            <h2>Useful can still feel <em>delightful.</em></h2>
            <span>Four little things made with real people in mind ♡</span>
          </div>
          <div className="toy-grid">
            {toys.map((item, index) => (
              <article className={`toy-card toy-card--${index + 1}`} key={item.id}>
                <div className="toy-gloss" aria-hidden="true" />
                <div className="toy-card-topline">
                  <span className="toy-number">tiny machine 0{index + 1}</span>
                  <span className="toy-note">{toyNotes[index]}</span>
                </div>
                <div className="toy-icon" aria-hidden="true">{toyCharms[index]}</div>
                <h3>{item.name}</h3>
                <p>{item.short}</p>
                <details>
                  <summary>unwrap the story <span aria-hidden="true">♡</span></summary>
                  <p>{item.detail}</p>
                </details>
                {item.url && <a href={item.url} target="_blank" rel="noreferrer">take a look <span aria-hidden="true">↗</span></a>}
                <span className="toy-corner-charm" aria-hidden="true">{index % 2 === 0 ? "✿" : "♥"}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="kawaii-recipe">
          <div className="kawaii-section-head">
            <p><span aria-hidden="true">♡</span> <span lang="ja">つくりかた</span> / how we play</p>
            <h2>A tiny recipe for unusual products.</h2>
            <span>No magic wand required—although one is welcome ✦</span>
          </div>
          <div className="recipe-track">
            <article><span>step 01</span><div aria-hidden="true">?</div><h3>Be curious</h3><p>Ask why the awkward workflow exists before automating it.</p></article>
            <article><span>step 02</span><div aria-hidden="true">✎</div><h3>Make it visible</h3><p>Sketch the real loop so everyone can point at the same problem.</p></article>
            <article><span>step 03</span><div aria-hidden="true">⚡</div><h3>Build the plaything</h3><p>Prototype fast enough that the conversation becomes concrete.</p></article>
            <article><span>step 04</span><div aria-hidden="true">♡</div><h3>Keep the human</h3><p>Local data, clear limits, soft edges, and an honest failure state.</p></article>
          </div>
        </section>

        <section className="kawaii-about">
          <div className="kawaii-postcard">
            <div className="kawaii-postcard-bow" aria-hidden="true">୨୧</div>
            <span>love letter from Seoul ♡</span>
            <h2>I&apos;m happiest where design, code, public life, and a slightly ridiculous idea overlap.</h2>
            <p>
              My path runs through Korean, Italian, and Brussels contexts. That makes me
              suspicious of universal defaults—and very interested in tools that help a
              specific person do one meaningful thing better.
            </p>
            <div><span>✿ multimodal play</span><span>♡ public data</span><span>୨୧ creative code</span></div>
          </div>
        </section>

        <section className="kawaii-cta">
          <div className="cta-face" aria-hidden="true">୨୧ (｡•̀ᴗ-)✧ ♡</div>
          <p>Have an oddly specific problem?</p>
          <h2>Let&apos;s make the useful little thing.</h2>
          <a href={publicLinks.email}>Send it to Madan <span aria-hidden="true">♥</span></a>
          <small>あなたの変なアイデア、大歓迎です / weird ideas very welcome</small>
        </section>
      </main>
      <RouteFooter current="playground" />
    </div>
  );
}
