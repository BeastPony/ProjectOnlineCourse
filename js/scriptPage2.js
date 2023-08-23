let offset = 0;

const sliderline2 = document.querySelector(".review__slider");

document.querySelector(".next2").addEventListener("click", function () {
  offset = offset + 1020;
  if (offset > 1020) {
    offset = -1020;
  }
  sliderline2.style.left = -offset + "px";
});

document.querySelector(".prev2").addEventListener("click", function func() {
  offset = offset - 1020;
  if (offset < -1020) {
    offset = 1020;
  }
  sliderline2.style.left = -offset + "px";
});
