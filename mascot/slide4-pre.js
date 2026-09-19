(() => {
  const slide = document.querySelector('.mascot-slide');
  if (!slide) return;

  slide.dataset.title = 'HR Exchange Topics';
  slide.classList.add('mascot-bites-slide');
  slide.innerHTML = '<iframe src="../mascot-bites/" title="HR Exchange Topics"></iframe><div id="topicGrid" hidden></div>';

  document.head.insertAdjacentHTML('beforeend', `<style>
    .mascot-slide.mascot-bites-slide{padding:0!important;overflow:hidden!important;background:#f7f4ed!important}
    .mascot-bites-slide iframe{display:block;width:100%;height:100dvh;border:0;background:#f7f4ed}
    .mascot-deck-nav{top:18px!important;right:18px!important;bottom:auto!important;left:auto!important}
    @media(max-width:760px){.mascot-deck-nav{top:10px!important;right:10px!important}}
  </style>`);

  const top = document.querySelector('#top');
  const nav = document.querySelector('#nav');
  const sync = () => {
    const active = slide.classList.contains('active');
    top.style.display = active ? 'none' : '';
    nav.classList.toggle('mascot-deck-nav', active);
  };
  new MutationObserver(sync).observe(slide, {attributes:true, attributeFilter:['class']});
  sync();
})();
