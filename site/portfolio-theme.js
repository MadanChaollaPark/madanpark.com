try {
  const saved = localStorage.getItem('mp-theme');
  if (saved === 'dark' || saved === 'light') document.documentElement.dataset.theme = saved;
} catch {}
