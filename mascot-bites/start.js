(() => {
  const bite = Number(new URLSearchParams(window.location.search).get('bite'));
  if (!Number.isInteger(bite) || bite < 1 || bite > 7) return;
  const next = document.querySelector('#next');
  for (let i = 0; i < bite; i += 1) next.click();
})();
