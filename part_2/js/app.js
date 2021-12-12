'use strict'

const arrayImgs = [
  './images/chamomile.jpeg',
  './images/little_prince.jpeg',
  './images/nature.jpeg',
  './images/shipbuilder.jpeg',
  './images/yin-and-yang.jpeg',
];

let currentSlide = 0;
let intervalId;

function setSlideImages () {
  const slideElem = document.getElementById('slide');
  slideElem.src = arrayImgs[currentSlide];
}
setSlideImages();

function changeSlide(iteration = 1) {
  currentSlide += iteration;
  if (currentSlide === arrayImgs.length) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = arrayImgs.length - 1;
  }
  console.log(currentSlide);
  setSlideImages();
}

function sliderTimer () {
  intervalId = setInterval (changeSlide, 3000);
}
sliderTimer();

document.getElementsByClassName('btn-prev')[0].addEventListener('click', function() {
  clearInterval(intervalId)
  changeSlide(-1);
  sliderTimer();
});

document.getElementsByClassName('btn-next')[0].addEventListener('click', function() {
  clearInterval(intervalId)
  changeSlide(1);
  sliderTimer();
});









// let currentSlide = 0;
// const slideElem = document.getElementById('slide');
// const btnPrev = document.getElementsByClassName('btn-prev')[0];
// const btnNext = document.getElementsByClassName('btn-next')[0];

// changeSlide();

// function prevSlide () {
//   currentSlide -= 1;
//   changeSlide();
// }
// function nextSlide () {
//   currentSlide += 1;
//   changeSlide();
// }

// function changeSlide () {
//   slideElem.src = arrayImgs[currentSlide];
//   if (currentSlide === 0) {
//     btnPrev.classList.add('hidden');
//   } else if (currentSlide === arrayImgs.length - 1){
//     btnNext.classList.add('hidden');
//   } else {
//     btnPrev.classList.remove('hidden');
//     btnNext.classList.remove('hidden');
//   }
// }