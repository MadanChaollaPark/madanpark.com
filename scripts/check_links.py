from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
errors = []


class LinkParser(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.source = source

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ("href", "src"):
            value = attrs.get(key)
            if not value or value.startswith(("#", "mailto:", "tel:", "data:")):
                continue
            parsed = urlparse(value)
            if parsed.scheme in ("http", "https"):
                continue
            path = parsed.path
            if path.startswith("/"):
                target = ROOT / path.lstrip("/")
            else:
                target = self.source.parent / path
            if path.endswith("/") or target.is_dir():
                target = target / "index.html"
            if not target.exists():
                errors.append(f"{self.source.relative_to(ROOT)} -> {value}")


for html in ROOT.rglob("*.html"):
    LinkParser(html).feed(html.read_text(encoding="utf-8"))

if errors:
    print("Broken internal links:")
    print("\n".join(errors))
    raise SystemExit(1)

print("All internal links resolve.")
