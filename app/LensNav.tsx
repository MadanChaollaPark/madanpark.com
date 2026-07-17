import { lenses } from "./site-data";

export function LensNav({ current }: { current?: string }) {
  return (
    <nav className="lens-nav" aria-label="Five portfolio versions">
      <a className="lens-brand" href="/" aria-label="Madan Park — five portfolio versions">
        <span>MP</span>
        <strong>Five lenses</strong>
      </a>
      <div className="lens-links">
        {lenses.map((lens) => (
          <a
            key={lens.slug}
            href={`/${lens.slug}/`}
            aria-current={current === lens.slug ? "page" : undefined}
            title={lens.audience}
          >
            <span>{lens.number}</span>
            {lens.slug}
          </a>
        ))}
      </div>
      <a className="lens-contact" href="mailto:chaollapark@gmail.com">
        Email
      </a>
    </nav>
  );
}

export function RouteFooter({ current }: { current: string }) {
  const index = lenses.findIndex((lens) => lens.slug === current);
  const next = lenses[(index + 1) % lenses.length];

  return (
    <footer className="route-footer">
      <div>
        <span>Same history, another room</span>
        <strong>{next.title}</strong>
      </div>
      <a href={`/${next.slug}/`}>
        Open {next.number} <span aria-hidden="true">→</span>
      </a>
    </footer>
  );
}
