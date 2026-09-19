(() => {
  const original = document.querySelector('.mascot-slide');
  if (!original) return;
  const titles = [
    'The True Role of HR',
    'Creating an Outstanding Employee & Candidate Experience',
    'Measuring Success',
    'Understanding Our Reward Framework',
    'The Art of Recruitment',
    'Meet Our New AI Agent',
    'Performance Management Done Right',
    'Oracle HCM Hands-On'
  ];
  const slides = titles.map((title, index) => `<section class="slide mascot-bites-slide" data-title="${title}"><iframe src="../mascot-bites/?bite=${index}" title="Learning Bite ${index + 1}: ${title}"></iframe></section>`).join('');
  original.outerHTML = slides;
  document.head.insertAdjacentHTML('beforeend', `<style>.mascot-bites-slide{padding:0!important;overflow:hidden!important;background:#f7f4ed!important}.mascot-bites-slide iframe{display:block;width:100%;height:100dvh;border:0;background:#f7f4ed}</style>`);
  const top = document.querySelector('#top');
  const syncHeader = () => { top.style.display = document.querySelector('.mascot-bites-slide.active') ? 'none' : ''; };
  new MutationObserver(syncHeader).observe(document.querySelector('#slides'), {subtree:true, attributes:true, attributeFilter:['class']});
  syncHeader();
})();
