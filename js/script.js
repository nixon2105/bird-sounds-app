const logo = document.querySelector('.header-logo');
const listBtn = document.querySelector('.main-nav__list');
const btn = document.querySelector('.main-nav__btn');
const playBtn = document.querySelector('.play');
const item = document.querySelector('.main-nav__item');
const main = document.querySelector('.main');

const addActiveBtn = (e) => {
  listBtn
    .querySelectorAll('.main-nav__btn')
    .forEach((el) => el.classList.remove('active'));
  e.target.classList.add('active');
};

const audio = new Audio();

const playSounds = (e) => {
  playBtn.classList.remove('play');
  playBtn.classList.add('pause');
  audio.play();
};

const toggleBtnSounds = () => {
  if (playBtn.classList.toggle('play')) {
    audio.pause();
  }
  if (playBtn.classList.toggle('pause')) {
    audio.currentTime = 0;
    audio.play();
  }
};

listBtn.addEventListener('click', (e) => {
  if (e.target.closest('.main-nav__btn')) {
    let action = e.target.getAttribute('data-item');
    if (action === 'solovey') {
      audio.src = '../assets/audio/solovey.mp3';
      main.style.backgroundImage = 'url(../assets/images/solovey.jpg)';
      logo.style.backgroundImage = 'url(../assets/images/icon-solovey.png)';
    }
    if (action === 'drozd') {
      audio.src = '../assets/audio/drozd.mp3';
      main.style.backgroundImage = 'url(../assets/images/drozd.jpg)';
      logo.style.backgroundImage = 'url(../assets/images/icon-drozd.png)';
    }
    if (action === 'malinovka') {
      audio.src = '../assets/audio/zarynka.mp3';
      main.style.backgroundImage = 'url(../assets/images/zarynka.jpg)';
      logo.style.backgroundImage = 'url(../assets/images/icon-malinovka.png)';
    }
    if (action === 'javoronok') {
      audio.src = '../assets/audio/javoronok.mp3';
      main.style.backgroundImage = 'url(../assets/images/javoronok.jpg)';
      logo.style.backgroundImage = 'url(../assets/images/iconn-zarynka.png)';
    }
    if (action === 'slavka') {
      audio.src = '../assets/audio/slavka.mp3';
      main.style.backgroundImage = 'url(../assets/images/slavka.jpg)';
      logo.style.backgroundImage = 'url(../assets/images/icon-slavka.png)';
    }
    playSounds();
  }
});

playBtn.addEventListener('click', toggleBtnSounds);
listBtn.addEventListener('click', addActiveBtn);
