"use strict";

// ------------- NAV BAR PROGRESS START -------------
let progressBar = document.querySelector(".progress-bar");
let documentHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  requestAnimationFrame(() => {
    let progress = (window.scrollY / documentHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
});

// ------------- NAV BAR PROGRESS END -------------

// ------------- SHOW MORE/LESS BUTTON START -------------
const showAll = document.querySelector(".btn-all");
const showLess = document.querySelector(".btn-less");

const hide = document.querySelector(".hide");

const showFn = function () {
  hide.classList.remove("hidden-1");
  showLess.classList.remove("hidden-1");
  showAll.classList.add("hidden-1");
};

const hideFn = function () {
  hide.classList.add("hidden-1");
  showLess.classList.add("hidden-1");
  showAll.classList.remove("hidden-1");
};

showAll.addEventListener("click", showFn);
showLess.addEventListener("click", hideFn);
// ------------- SHOW MORE/LESS BUTTON END -------------

// ------------- IMAGE SLIDER START -------------
let imgs = document.querySelectorAll(".slider img");
let dots = document.querySelectorAll(".dot");
let currentImg = 0; // index of the first image
const interval = 4000; // duration(speed) of the slide

function changeSlide(n) {
  for (let i = 0; i < imgs.length; i++) {
    // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(" active", "");
  }

  currentImg = (currentImg + 1) % imgs.length; // update the index number

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += " active";
}

var timer = setInterval(changeSlide, interval);

// ------------- IMAGE SLIDER END -------------
