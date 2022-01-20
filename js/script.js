const btn = document.querySelector('.main-nav__btn');
const playBtn = document.querySelector('.play');
// const pauseBtn = document.querySelector('.pause');
const listBtn = document.querySelector('.main-nav__list');

const sounds = ['colibri', 'drozd', 'icterey', 'sinica', 'snegir'];

const audio = new Audio();
const playSounds = (e) => {
  btn.classList.add('active');
  playBtn.classList.remove('play');
  playBtn.classList.add('pause');
  // if (e.target.getAttribute('data-sound') === 'sinica') {
  //   audio.src = '../assets/audio/sinica.mp3';
  //   audio.play();
  // }
  // if (e.target.getAttribute('data-sound') === 'drozd') {
  //   audio.src = '../assets/audio/drozd.mp3';
  //   audio.play();
  // }
};

const a = (e) => {
  // btn.forEach((el) => console.log(el.getAttribute('data-sound')));
  // if (e.target.getAttribute('data-sound') === 'sinica') {
  //   audio.src = '../assets/audio/sinica.mp3';
  //   audio.play();
  // }
};

// a();

btn.addEventListener('click', playSounds);
