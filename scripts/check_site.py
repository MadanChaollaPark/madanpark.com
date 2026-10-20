from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json,xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[1]/'site'
class Page(HTMLParser):
 def __init__(self,s):
  super().__init__();self.links=[];self.ids=[];self.h1=0;self.title=False;self.desc=False;self.canonical=False;self.feed(s)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if tag=='h1':self.h1+=1
  if tag=='title':self.title=True
  if tag=='meta' and a.get('name')=='description':self.desc=bool(a.get('content'))
  if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href','').startswith('https://madanpark.com/')
  if tag=='img':assert 'alt' in a,'Image missing alt'
  if tag in ['a','link'] and a.get('href'):self.links.append(a['href'])
  if tag in ['img','script'] and a.get('src'):self.links.append(a['src'])
pages={f:Page(f.read_text()) for f in root.rglob('*.html')}
links=0
for f,p in pages.items():
 assert p.h1==1 and p.title and p.desc and p.canonical,f'{f}: missing document metadata or one h1'
 assert len(p.ids)==len(set(p.ids)),f'{f}: duplicate IDs'
 for href in p.links:
  u=urlsplit(href)
  if u.scheme or u.netloc:continue
  links+=1
  target=(root/unquote(u.path).lstrip('/')) if u.path.startswith('/') else (f.parent/unquote(u.path)) if u.path else f
  if target.is_dir():target=target/'index.html'
  assert target.is_file(),f'{f}: broken link {href}'
  if u.fragment:assert u.fragment in pages[target].ids,f'{f}: missing anchor {href}'
manifest=json.loads((root/'site.webmanifest').read_text())
for icon in manifest['icons']:assert (root/icon['src'].lstrip('/')).exists()
ET.parse(root/'sitemap.xml')
assert 'mailto:' not in ''.join(f.read_text() for f in pages),'Email contact forbidden by user'
assert len(json.loads((root.parent/'design-references.json').read_text()))==10
print(f'PASS: {len(pages)} HTML pages; {links} local link/asset references; metadata, anchors, manifest, sitemap; 10 design references; no public email addresses.')
references=json.loads((root.parent/'design-references.json').read_text())
for ref in references:
 assert len(ref['evidence'])==5,ref['reference']
 assert len({x['publisher'] for x in ref['evidence']})==5,ref['reference']
 assert len({urlsplit(x['url']).netloc for x in ref['evidence']})==5,ref['reference']
directions=json.loads((root.parent/'directions.json').read_text())
for d in directions:
 content=(root/'directions'/d['slug']/'index.html').read_text()
 assert 'Reference research is being verified' not in content
 assert content.count('<li>')==(50 if d['slug'] in ['mosaic','patina'] else 5),d['slug']
 assert all(x in content for x in ['OpenAI','Zed','ElevenLabs','EUJobs','x.com/mcpark','github.com/MadanChaollaPark'])
assert len(directions)==12
print('PASS: 10 original directions plus Mosaic and Patina; 50 original recognition records reused in the combined version; required portfolio content.')
