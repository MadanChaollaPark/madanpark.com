const toggle = document.querySelector('.theme-toggle');
function syncTheme() {
  const dark = document.documentElement.dataset.theme === 'dark';
  toggle?.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
  toggle?.setAttribute('aria-pressed', String(dark));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#1b201d' : '#f2f0e8');
}
toggle?.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('mp-theme', theme); } catch {}
  syncTheme();
});
syncTheme();
