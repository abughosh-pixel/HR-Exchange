(() => {
  document.querySelectorAll('img[src="assets/fine-logo.png"], img[src="assets/hr-exchange-registration-qr.png"]').forEach((image) => {
    image.src = `../${image.getAttribute('src')}`;
  });
  document.querySelectorAll('#mascotArt img').forEach((image) => {
    image.src = image.src.replace(/\.png$/, '.webp');
  });
  const sessions = [
    ['01', 'The True Role of HR', 'Dima Haddadin', 'right'],
    ['02', 'Creating an Outstanding Employee & Candidate Experience', 'Tamara Marar', 'left'],
    ['03', 'Measuring Success', 'Fadi Aranki', 'up'],
    ['04', 'Understanding Our Reward Framework', 'Fadi Aranki', 'down'],
    ['05', 'The Art of Recruitment', 'Tamara Marar', 'right'],
    ['06', 'Meet Our New AI Agent', 'Nadi Khleif', 'left'],
    ['07', 'Performance Management Done Right', 'Tamara Ajlouni', 'up'],
    ['08', 'Oracle HCM Hands-On', 'Majed M. Alshomali', 'down']
  ];
  const title = document.querySelector('#journeyTitle');
  if (!title) return;
  const facilitator = document.querySelector('#journeyFacilitator');
  const number = document.querySelector('#journeyNo');
  const count = document.querySelector('#journeyCount');
  const copy = document.querySelector('#journeyCopy');
  const mascot = document.querySelector('#mascotArt');
  const lines = document.querySelector('#journeyLines');
  let index = 0;
  sessions.forEach((_, i) => {
    const line = document.createElement('i');
    line.dataset.index = i;
    lines.append(line);
  });
  function render(next) {
    index = (next + sessions.length) % sessions.length;
    const [no, name, host, pose] = sessions[index];
    copy.classList.add('changing');
    mascot.classList.add('moving');
    window.setTimeout(() => {
      number.textContent = `${no} / 08`;
      count.textContent = no;
      title.textContent = name;
      facilitator.textContent = `Facilitated by ${host}`;
      mascot.dataset.pose = pose;
      [...lines.children].forEach((line, lineIndex) => line.classList.toggle('active', lineIndex === index));
      copy.classList.remove('changing');
      mascot.classList.remove('moving');
    }, 190);
  }
  document.querySelector('#journeyPrev').addEventListener('click', () => render(index - 1));
  document.querySelector('#journeyNext').addEventListener('click', () => render(index + 1));
  render(0);
})();
