"use client";

import { useMemo, useState } from "react";
import type { ProjectProof } from "../site-data";

const filters = [
  ["all", "All records", "scope:portfolio"],
  ["local-first", "Local-first", "storage:local-first"],
  ["multimodal", "Multimodal", "signal:multimodal"],
  ["public-data", "Public data", "source:public-data"],
  ["agents", "Agents", "method:agents"],
] as const;

export function LabSystems({ items }: { items: ProjectProof[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number][0]>("all");
  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.tags.includes(filter))),
    [filter, items],
  );
  const activeQuery = filters.find(([value]) => value === filter)?.[2] ?? "scope:portfolio";

  return (
    <div className="lab-workbench">
      <div className="lab-querybar">
        <div className="lab-query-label"><span>QUERY</span><small>MCPQL / READ ONLY</small></div>
        <output><span aria-hidden="true">&gt;</span>{activeQuery} evidence:inspectable<b className="lab-cursor" aria-hidden="true" /></output>
        <div className="lab-query-meta"><span>{visible.length} MATCHES</span><span>STATIC DATASET · 2026.07</span></div>
      </div>

      <div className="lab-workbench-grid">
        <aside className="lab-facet-rail">
          <div className="lab-facet-head"><span>FIELD FILTERS</span><span>{items.length} TOTAL</span></div>
          <div className="lab-filters" role="group" aria-label="Filter systems">
            {filters.map(([value, label], index) => {
              const count = value === "all" ? items.length : items.filter((item) => item.tags.includes(value)).length;
              return (
                <button
                  type="button"
                  key={value}
                  onClick={() => setFilter(value)}
                  aria-pressed={filter === value}
                >
                  <span className="lab-filter-command" aria-hidden="true">F{index + 1}</span>
                  <span>{label}</span>
                  <b>{String(count).padStart(2, "0")}</b>
                  <i aria-hidden="true"><span style={{ width: `${(count / items.length) * 100}%` }} /></i>
                </button>
              );
            })}
          </div>
          <div className="lab-facet-boundary">
            <span>SCOPE BOUNDARY</span>
            <p>Passive research. Public or user-owned inputs. No visitor scanning. No live target data.</p>
          </div>
        </aside>

        <section className="lab-results" aria-label="Portfolio intelligence results">
          <header className="lab-results-head">
            <div><span>RESULT SET</span><strong>{String(visible.length).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</strong></div>
            <div><span>ORDER</span><strong>RELEVANCE ↓</strong></div>
            <div><span>CLASS</span><strong>PORTFOLIO EVIDENCE</strong></div>
          </header>

          <div className="lab-system-grid" aria-live="polite">
            {visible.map((item, index) => (
              <article key={item.id}>
                <div className="lab-card-head">
                  <span>CASE-{String(index + 1).padStart(3, "0")}</span>
                  <span className={`lab-state lab-state--${item.status.replace(" ", "-")}`}>&gt; {item.status}</span>
                </div>
                <div className="lab-record-id">{item.id.toUpperCase()}-{String(index + 1).padStart(2, "0")}</div>
                <h3>{item.name}</h3>
                <p>{item.short}</p>
                <div className="lab-activity" aria-label="Static build trace motif">
                  <span>BUILD TRACE</span>
                  <div aria-hidden="true">
                    {Array.from({ length: 18 }, (_, tick) => (
                      <i key={tick} className={(tick + index) % 5 === 0 ? "is-hot" : (tick + index) % 3 === 0 ? "is-warm" : ""} />
                    ))}
                  </div>
                </div>
                <dl>
                  <div><dt>INPUT</dt><dd>{item.signal}</dd></div>
                  <div><dt>OUTPUT</dt><dd>{item.output}</dd></div>
                  <div><dt>BOUNDARY</dt><dd>{item.status === "private" ? "Public architecture; private operations" : "Inspectable public surface"}</dd></div>
                </dl>
                <div className="lab-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer">OPEN EVIDENCE ↗</a>
                ) : (
                  <span className="lab-no-link">REDACTED / NO PUBLIC REPOSITORY</span>
                )}
              </article>
            ))}
          </div>

          <footer className="lab-results-foot">
            <span>END OF RESULT SET</span>
            <span>QUERY HASH: MCP-{visible.length}{items.length}-PUBLIC</span>
          </footer>
        </section>
      </div>
    </div>
  );
}
