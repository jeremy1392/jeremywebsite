/* One-off integrator: drop the 4 redesigned SVGs into index.html. */
const fs = require('fs');
const path = require('path');

const here = (p) => path.join(__dirname, p);
const root = (p) => path.join(__dirname, '..', p);

const hero    = fs.readFileSync(here('hero.svg'),    'utf8').trimEnd();
const shield  = fs.readFileSync(here('shield.svg'),  'utf8').trimEnd();
const stream  = fs.readFileSync(here('stream.svg'),  'utf8').trimEnd();
const contact = fs.readFileSync(here('contact.svg'), 'utf8').trimEnd();

let html = fs.readFileSync(root('index.html'), 'utf8');

function swap(html, signature, replacement, name) {
  // signature is a unique substring that identifies the opening of the <svg ...>
  const startTagRe = new RegExp('<svg\\b[^>]*?' + signature + '[^>]*?>', 'm');
  const startMatch = html.match(startTagRe);
  if (!startMatch) {
    throw new Error('Could not find opening <svg> for ' + name + ' (signature: ' + signature + ')');
  }
  const startIdx = startMatch.index;

  // Walk forward, tracking nesting depth of <svg> until we hit the matching </svg>
  let depth = 0;
  let i = startIdx;
  const re = /<svg\b|<\/svg>/g;
  re.lastIndex = startIdx;
  let m;
  let endIdx = -1;
  while ((m = re.exec(html)) !== null) {
    if (m[0] === '</svg>') {
      depth--;
      if (depth === 0) { endIdx = m.index + m[0].length; break; }
    } else {
      depth++;
    }
  }
  if (endIdx === -1) throw new Error('Could not find matching </svg> for ' + name);

  return html.slice(0, startIdx) + replacement + html.slice(endIdx);
}

html = swap(html, 'class="agent-network"', hero,    'hero');
html = swap(html, 'class="orbit-shield"',  shield,  'shield');
html = swap(html, 'class="data-stream"',   stream,  'stream');

// Contact SVG has no distinctive class (just viewBox 0 0 200 240 in contact-visual)
// Use the viewBox as signature.
html = swap(html, 'viewBox="0 0 200 240"', contact, 'contact');

fs.writeFileSync(root('index.html'), html);
console.log('Integrated 4 SVGs into index.html (' + html.length + ' bytes).');
