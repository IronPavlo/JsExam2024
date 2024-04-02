import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

let featuresBttns = document.getElementsByClassName("features-button");
console.log(featuresBttns);
let allSpans = Array.from(document.getElementsByTagName("span"));
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
}

let burger = document.getElementById("burger");
//burger.addEventListener("mousedown", );
