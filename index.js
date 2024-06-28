const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('div'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();

let burger = document.querySelector('.burger');
let menu = document.querySelector('.burger-menu');
let menuLinks = document.querySelectorAll('.burger-menu__link');

burger.addEventListener('click',

function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('burger-menu--active');
})

menuLinks.forEach(function (el) {

  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('burger-menu--active');
  });
});