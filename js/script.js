let offset = 0;

//*slider one

const sliderline = document.querySelector(".ourteam__slider");

document.querySelector(".next").addEventListener("click", function () {
  offset = offset + 400;
  if (offset > 800) {
    offset = -800;
  }
  sliderline.style.left = -offset + "px";
});

document.querySelector(".prev").addEventListener("click", function () {
  offset = offset - 400;
  if (offset < -800) {
    offset = 800;
  }
  sliderline.style.left = -offset + "px";
});

//*slider two

const sliderline2 = document.querySelector(".review__slider");

document.querySelector(".next2").addEventListener("click", function () {
  offset = offset + 1020;
  if (offset > 1020) {
    offset = -1020;
  }
  sliderline2.style.left = -offset + "px";
});

document.querySelector(".prev2").addEventListener("click", function () {
  offset = offset - 1020;
  if (offset < -1020) {
    offset = 1020;
  }
  sliderline2.style.left = -offset + "px";
});
