//*indexAboutCourse

let time_day = document.querySelector("#time_day");
let time_hour = document.querySelector("#time_hour");
let time_min = document.querySelector("#time_min");
let time_sec = document.querySelector("#time_sec");
let date = new Date();

setInterval(() => {
  let date = new Date();
  time_day.innerHTML = addZero(date.getDay());
  time_hour.innerHTML = addZero(date.getHours());
  time_min.innerHTML = addZero(date.getMinutes());
  time_sec.innerHTML = addZero(date.getSeconds());
}, 1000);

function addZero(num) {
  if (num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}

//*slider one

let offset = 0;

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

//*slider two

const sliderline = document.querySelector(".check_course_slider");

document.querySelector(".next").addEventListener("click", function () {
  offset = offset + 1250;
  if (offset > 1250) {
    offset = -1250;
  }
  sliderline.style.left = -offset + "px";
});

document.querySelector(".prev").addEventListener("click", function () {
  offset = offset - 1250;
  if (offset < -1250) {
    offset = 1250;
  }
  sliderline.style.left = -offset + "px";
});
