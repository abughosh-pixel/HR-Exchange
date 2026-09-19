(() => {
  const slide = document.querySelector('.mascot-slide');
  if (!slide) return;
  document.head.insertAdjacentHTML('beforeend', `<style>
    .mascot-slide.mascot-bites-slide{padding:0!important;overflow:hidden!important;background:#f7f4ed!important}
    .mascot-bites-slide iframe{display:block;width:100%;height:100dvh;border:0;background:#f7f4ed}
  </style>`);
  slide.className = 'slide mascot-slide mascot-bites-slide';
  slide.innerHTML = '<iframe src="../mascot-bites/" title="HR Exchange Learning Bites"></iframe>';
  const top = document.querySelector('#top');
  const sync = () => { top.style.display = slide.classList.contains('active') ? 'none' : ''; };
  new MutationObserver(sync).observe(slide, { attributes: true, attributeFilter: ['class'] });
  sync();
})();
