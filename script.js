const photos = ["sample.jpg", "sample1.jpg", "sample2.jpg"];

let index = 0;

const slide = document.getElementById("displayedPhoto");

const show = (i) => {
  index = (i + photos.length) % photos.length;
  slide.src = photos[index];
};

const nextSlide = () => {
  show(index + 1);
};

const prevSlide = () => {
  show(index - 1);
};

const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
