var slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
  var i;
  var slides = document.getElementsByClassName("my-slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }
  slides[slideIndex].style.display = "block";
}

function prevSlide() {
  showSlides(slideIndex - 1);
}

function nextSlide() {
  showSlides(slideIndex + 1);
}


