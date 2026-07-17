"use client";

import { useMemo, useState } from "react";
import type { ProjectProof } from "../site-data";

const filters = [
  ["all", "All systems"],
  ["local-first", "Local-first"],
  ["multimodal", "Multimodal"],
  ["public-data", "Public data"],
  ["agents", "Agents"],
] as const;

export function LabSystems({ items }: { items: ProjectProof[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number][0]>("all");
  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.tags.includes(filter))),
    [filter, items],
  );

  return (
    <>
      <div className="lab-filters" role="group" aria-label="Filter systems">
        {filters.map(([value, label]) => (
          <button
            type="button"
            key={value}
            onClick={() => setFilter(value)}
            aria-pressed={filter === value}
          >
            <span aria-hidden="true">{filter === value ? "●" : "○"}</span> {label}
          </button>
        ))}
      </div>
      <div className="lab-system-grid" aria-live="polite">
        {visible.map((item, index) => (
          <article key={item.id}>
            <div className="lab-card-head">
              <span>SYS-{String(index + 1).padStart(3, "0")}</span>
              <span className={`lab-state lab-state--${item.status.replace(" ", "-")}`}>{item.status}</span>
            </div>
            <h3>{item.name}</h3>
            <p>{item.short}</p>
            <dl>
              <div><dt>INPUT</dt><dd>{item.signal}</dd></div>
              <div><dt>OUTPUT</dt><dd>{item.output}</dd></div>
              <div><dt>BOUNDARY</dt><dd>{item.status === "private" ? "Public architecture; private operations" : "Inspectable public surface"}</dd></div>
            </dl>
            <div className="lab-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noreferrer">OPEN REPOSITORY ↗</a>
            ) : (
              <span className="lab-no-link">DESCRIPTION ONLY / NO PUBLIC REPO</span>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
