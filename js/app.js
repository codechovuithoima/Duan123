var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var carousel = document.querySelector(".carousel");
var list = document.querySelector(".list");
var items = document.querySelectorAll(".item");
var runningTime = document.querySelector(".time-running");

items.forEach(function (item) {
  console.log(item);
});

nextBtn.addEventListener("click", function () {
  showSlider("next");
});

prevBtn.addEventListener("click", function () {
  showSlider("prev");
});
let runTimeout;
let nextSliderTimeout = setTimeout(() => {
  showSlider("next");
}, 7000);
function showSlider(type) {
  let slider = list.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    list.appendChild(slider[0]);
  } else {
    list.prepend(slider[slider.length - 1]);
  }
  clearTimeout(nextSliderTimeout);
  nextSliderTimeout = setTimeout(() => {
    showSlider("next");
  }, 7000);
  resetTimeAnimation();
}

function resetTimeAnimation() {
  runningTime.style.animation = "none";
  runningTime.offsetHeight;
  runningTime.style.animation = "runningTime 7s linear 1 forwards";
}

console.log(runningTime.offsetWidth);
