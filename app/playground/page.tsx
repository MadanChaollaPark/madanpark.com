import type { Metadata } from "next";
import { LensNav, RouteFooter } from "../LensNav";
import { project, publicLinks } from "../site-data";

export const metadata: Metadata = {
  title: "Tiny Useful Machines — Madan Park",
  description:
    "A Japanese-kawaii portfolio for creative technologists, design collaborators, and people who like oddly useful prototypes.",
};

const toys = [project("piano"), project("signchat"), project("whatremains"), project("gptandme")];

export default function PlaygroundPage() {
  return (
    <div className="kawaii-site">
      <LensNav current="playground" />
      <main>
        <header className="kawaii-hero">
          <div className="kawaii-cloud kawaii-cloud--one" aria-hidden="true" />
          <div className="kawaii-cloud kawaii-cloud--two" aria-hidden="true" />
          <p className="kawaii-label"><span lang="ja">ちいさな発明</span> / tiny inventions</p>
          <h1>Madan makes tiny machines for very human problems.</h1>
          <p className="kawaii-lede">
            Maps for finding public pianos. Gestures that become conversations. A one-minute
            world with consequences. Private little counters for our enormous AI habits.
          </p>
          <div className="kawaii-actions">
            <a href="#toybox">Open the toybox <span aria-hidden="true">✿</span></a>
            <a href={publicLinks.email}><span lang="ja">いっしょにつくろう</span> / let&apos;s build</a>
          </div>
          <div className="kawaii-mascot" aria-label="A cheerful code mascot saying hello">
            <span className="mascot-spark mascot-spark--one">✦</span>
            <span className="mascot-spark mascot-spark--two">♡</span>
            <div className="mascot-face">
              <span>•</span><span className="mascot-mouth">ᴗ</span><span>•</span>
            </div>
            <strong>Hello, weird idea!</strong>
            <small>(｡•̀ᴗ-)✧</small>
          </div>
          <div className="kawaii-sticker kawaii-sticker--fast">ship! ship!</div>
          <div className="kawaii-sticker kawaii-sticker--kind">human first ♡</div>
        </header>

        <section className="kawaii-proof-ribbon" aria-label="Recent proof">
          <span aria-hidden="true">🏆</span>
          <p><strong>Back-to-back second places</strong> at OpenAI and ElevenLabs × Zed hackathons in 2026.</p>
          <span aria-hidden="true">✦</span>
        </section>

        <section className="kawaii-toybox" id="toybox">
          <div className="kawaii-section-head">
            <p><span lang="ja">おもちゃ箱</span> / toybox</p>
            <h2>Useful can still feel delightful.</h2>
          </div>
          <div className="toy-grid">
            {toys.map((item, index) => (
              <article className={`toy-card toy-card--${index + 1}`} key={item.id}>
                <div className="toy-icon" aria-hidden="true">
                  {index === 0 ? "♬" : index === 1 ? "☝" : index === 2 ? "✦" : "⌁"}
                </div>
                <span className="toy-number">toy 0{index + 1}</span>
                <h3>{item.name}</h3>
                <p>{item.short}</p>
                <details>
                  <summary>peek inside</summary>
                  <p>{item.detail}</p>
                </details>
                {item.url && <a href={item.url} target="_blank" rel="noreferrer">visit project ↗</a>}
              </article>
            ))}
          </div>
        </section>

        <section className="kawaii-recipe">
          <div className="kawaii-section-head">
            <p><span lang="ja">つくりかた</span> / how we play</p>
            <h2>A tiny recipe for unusual products.</h2>
          </div>
          <div className="recipe-track">
            <article><span>01</span><div aria-hidden="true">?</div><h3>Be curious</h3><p>Ask why the awkward workflow exists before automating it.</p></article>
            <article><span>02</span><div aria-hidden="true">✎</div><h3>Make it visible</h3><p>Sketch the real loop so everyone can point at the same problem.</p></article>
            <article><span>03</span><div aria-hidden="true">⚡</div><h3>Build the plaything</h3><p>Prototype fast enough that the conversation becomes concrete.</p></article>
            <article><span>04</span><div aria-hidden="true">♡</div><h3>Keep the human</h3><p>Local data, clear limits, soft edges, and an honest failure state.</p></article>
          </div>
        </section>

        <section className="kawaii-about">
          <div className="kawaii-postcard">
            <span>from Seoul, with curiosity</span>
            <h2>I&apos;m happiest where design, code, public life, and a slightly ridiculous idea overlap.</h2>
            <p>
              My path runs through Korean, Italian, and Brussels contexts. That makes me
              suspicious of universal defaults—and very interested in tools that help a
              specific person do one meaningful thing better.
            </p>
            <div><span>✿ multimodal play</span><span>✿ public data</span><span>✿ creative code</span></div>
          </div>
        </section>

        <section className="kawaii-cta">
          <div className="cta-face" aria-hidden="true">(づ｡◕‿‿◕｡)づ</div>
          <p>Have an oddly specific problem?</p>
          <h2>Let&apos;s make the useful little thing.</h2>
          <a href={publicLinks.email}>Send it to Madan ♡</a>
        </section>
      </main>
      <RouteFooter current="playground" />
    </div>
  );
}
