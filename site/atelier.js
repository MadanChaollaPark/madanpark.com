/* An original, lightweight line sculpture. No dependencies or network calls. */
const themeButton = document.querySelector('.theme-toggle');
const setTheme = () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton?.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
  themeButton?.setAttribute('aria-pressed', String(dark));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#171916' : '#eeeee6');
};
themeButton?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('mp-theme', next); } catch {}
  setTheme();
});
setTheme();
const lineGroup = document.querySelector('#orbit-lines');
if (lineGroup) {
  const ns = 'http://www.w3.org/2000/svg';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const focusButton = document.querySelector('#shape-toggle');
  const pauseButton = document.querySelector('#motion-toggle');
  const caption = document.querySelector('#shape-caption');
  const sculpture = document.querySelector('.sculpture');
  const paths = Array.from({length: 52}, (_, i) => {
    const path = lineGroup.children[i] || document.createElementNS(ns, 'path');
    path.style.opacity = String(.25 + .55 * (i / 52));
    if (!path.parentNode) lineGroup.append(path);
    return path;
  });
  let focused = false, amount = 0, paused = false, visible = true;
  let rotation = .4, frame = 0, last = 0, pointerX = 0, pointerY = 0;
  const updateMotionControl = () => {
    pauseButton.disabled = reduced.matches;
    pauseButton.setAttribute('aria-pressed', String(paused || reduced.matches));
    pauseButton.setAttribute('aria-label', reduced.matches ? 'Animation off: reduced motion preference' : paused ? 'Resume animation' : 'Pause animation');
    pauseButton.textContent = paused || reduced.matches ? '▷' : 'Ⅱ';
  };
  function draw() {
    const angle = rotation + pointerX * .13;
    const tilt = .93 + pointerY * .13;
    const cosA = Math.cos(angle), sinA = Math.sin(angle);
    const cosT = Math.cos(tilt), sinT = Math.sin(tilt);
    paths.forEach((path, i) => {
      const v = i / paths.length * Math.PI * 2;
      let d = '';
      for (let j = 0; j <= 100; j++) {
        const u = j / 100 * Math.PI * 2;
        const ripple = (1-amount) * (20*Math.sin(3*u + v) + 12*Math.sin(2*v + u));
        const r = 150 + (58+ripple)*Math.cos(v);
        const x = r*Math.cos(u), y = r*Math.sin(u), z = (58+ripple)*Math.sin(v) + (1-amount)*26*Math.sin(3*u);
        const xr = x*cosA-z*sinA, zr = x*sinA+z*cosA;
        const yr = y*cosT-zr*sinT, depth = y*sinT+zr*cosT;
        const perspective = 780 / (780-depth);
        d += `${j ? 'L' : 'M'}${(300+xr*perspective).toFixed(1)},${(280+yr*perspective).toFixed(1)}`;
      }
      path.setAttribute('d', d);
    });
  }
  function animate(time) {
    frame = 0;
    if (!visible || document.hidden) return;
    if (time-last > 40) {
      const dt = Math.min((time-last)/1000,.06); last=time;
      if (!paused && !reduced.matches) rotation += dt*.12;
      amount += ((focused ? 1 : 0)-amount)*.1;
      draw();
    }
    if ((!paused && !reduced.matches) || Math.abs(amount-(focused?1:0))>.002) frame=requestAnimationFrame(animate);
  }
  function start() { if (!frame && visible && !document.hidden) { last=performance.now(); frame=requestAnimationFrame(animate); } }
  focusButton.addEventListener('click', () => {
    focused=!focused;
    focusButton.setAttribute('aria-pressed', String(focused));
    focusButton.innerHTML = focused ? 'Let curiosity wander <span aria-hidden="true">↗</span>' : 'Bring it into focus <span aria-hidden="true">↗</span>';
    caption.textContent = focused ? 'A little structure. A clearer direction.' : 'A little curiosity changes the shape of things.';
    if (reduced.matches) { amount=focused?1:0; draw(); } else start();
  });
  pauseButton.addEventListener('click',()=>{paused=!paused;updateMotionControl();if(!paused)start();});
  sculpture.addEventListener('pointermove', e => {
    if(reduced.matches || paused || e.pointerType==='touch') return;
    const rect=sculpture.getBoundingClientRect();
    pointerX=(e.clientX-rect.left)/rect.width-.5; pointerY=(e.clientY-rect.top)/rect.height-.5;
  });
  sculpture.addEventListener('pointerleave',()=>{pointerX=0;pointerY=0;});
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)start();else{cancelAnimationFrame(frame);frame=0;}},{threshold:0}).observe(sculpture);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)start();else{cancelAnimationFrame(frame);frame=0;}});
  reduced.addEventListener('change',()=>{updateMotionControl();if(reduced.matches){cancelAnimationFrame(frame);frame=0;amount=focused?1:0;draw();}else start();});
  updateMotionControl();draw();start();
}
