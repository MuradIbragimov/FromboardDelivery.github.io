let slides = document.querySelectorAll(".slide");
let btnSlideLeft = document.querySelector(".btn-left");
let btnSlideRight = document.querySelector(".btn-right");

let currentIndex = 0;
const slidesCount = slides.length;
const slidesToShow = 2;

// Функция для скрытия всех слайдов
function hideAllSlides() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
}

// Инициализация скрытия всех слайдов, кроме первых двух
hideAllSlides();
for (let i = 0; i < slidesToShow && i < slidesCount; i++) {
  slides[i].style.display = "block";
}

btnSlideRight.addEventListener("click", function () {
  hideAllSlides();
  currentIndex += slidesToShow;
  if (currentIndex >= slidesCount) {
    currentIndex = 0;
  }
  for (
    let i = currentIndex;
    i < currentIndex + slidesToShow && i < slidesCount;
    i++
  ) {
    slides[i].style.display = "block";
  }
});

btnSlideLeft.addEventListener("click", function () {
  hideAllSlides();
  currentIndex -= slidesToShow;
  if (currentIndex < 0) {
    currentIndex = slidesCount - slidesToShow;
  }

  for (
    let i = currentIndex;
    i < currentIndex + slidesToShow && i < slidesCount;
    i++
  ) {
    slides[i].style.display = "block";
  }
});
