let featuresBttns = document.getElementsByClassName("features-button");

let features = document.getElementById("features");

let swiperSlidesFeatures = features.getElementsByClassName("swiper-slide");

let swiperFeatures = features.getElementsByClassName("swiper1");

let allSpans = Array.from(document.getElementsByTagName("span"));
let menu = document.getElementById("menu");
featuresBttns[0].addEventListener("mousedown", activateFeatureBttn);
featuresBttns[1].addEventListener("mousedown", activateFeatureBttn);
featuresBttns[2].addEventListener("mousedown", activateFeatureBttn);

async function activateFeatureBttn(element) {
  for (let i = 0; i < featuresBttns.length; i++) {
    featuresBttns[i].classList.remove("features-button-active");
  }
  if (allSpans.includes(element.srcElement)) {
    element.srcElement.parentElement.classList.add("features-button-active");
  }
  if (!allSpans.includes(element.srcElement)) {
    element.srcElement.classList.add("features-button-active");
  }
  //slideFeatureCheck(features, featuresBttns);
}
async function slideFeatureCheck(swiperWrapper, bttns) {
  let bttnsArr = Array.from(bttns);
}
let burger = document.getElementById("burger");
burger.addEventListener("click", toggleMenu);
async function toggleMenu(element) {
  if (menu.style.transform == "translateX(0px)") {
    menu.style.transform = "translateX(-160px)";
  } else {
    menu.style.transform = "translateX(0px)";
  }

  //console.log(menu.style);
}
