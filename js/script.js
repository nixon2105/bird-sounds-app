const listBtn = document.querySelector('.main-nav__list');
const btn = document.querySelector('.main-nav__btn');
const playBtn = document.querySelector('.play');
const item = document.querySelector('.main-nav__item');
const main = document.querySelector('.main');

const sounds = ['colibri', 'drozd', 'icterey', 'sinica', 'snegir'];

const audio = new Audio();

const playSounds = (e) => {
  playBtn.classList.toggle('pause');
  audio.play();
};

const pauseSounds = (e) => {
  // playBtn.classList.add('pause');
  // playBtn.classList.add('play');
  audio.pause();
};

const loadImage = () => {};

listBtn.addEventListener('click', (e) => {
  if (e.target.closest('.main-nav__btn')) {
    let action = e.target.getAttribute('data-item');
    if (action === 'solovey') {
      audio.src = '../assets/audio/solovey.mp3';
      main.style.backgroundImage = 'url(../assets/images/solovey.jpg)';
    }
    if (action === 'drozd') {
      audio.src = '../assets/audio/drozd.mp3';
      main.style.backgroundImage = 'url(../assets/images/drozd.jpg)';
    }
    if (action === 'malinovka') {
      audio.src = '../assets/audio/zarynka.mp3';
      main.style.backgroundImage = 'url(../assets/images/zarynka.jpg)';
    }
    if (action === 'javoronok') {
      audio.src = '../assets/audio/javoronok.mp3';
      main.style.backgroundImage = 'url(../assets/images/javoronok.jpg)';
    }
    if (action === 'slavka') {
      audio.src = '../assets/audio/slavka.mp3';
      main.style.backgroundImage = 'url(../assets/images/slavka.jpg)';
    }
    playSounds();
    // loadImage();
  }
});

playBtn.addEventListener('click', pauseSounds);
