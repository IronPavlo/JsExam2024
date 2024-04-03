let featuresBttns = document.getElementsByClassName("features-button");

let features = document.getElementById("features");
let featuresSlides = document.querySelectorAll(".features-register");
let allSpans = Array.from(document.getElementsByTagName("span"));
let menu = document.getElementById("menu");

featuresBttns[0].addEventListener("mousedown", activateFeatureBttn);
featuresBttns[1].addEventListener("mousedown", activateFeatureBttn);
featuresBttns[2].addEventListener("mousedown", activateFeatureBttn);

//feature button activation
async function activateFeatureBttn(element) {
  for (let i = 0; i < featuresBttns.length; i++) {
    featuresBttns[i].classList.remove("features-button-active");
    featuresSlides[i].classList.remove("features-register-active");
  }

  //console.log(element.srcElement.parentElement.attributes.index.value);
  //console.log(element.srcElement);
  if (allSpans.includes(element.srcElement)) {
    element.srcElement.parentElement.classList.add("features-button-active");
    //console.log(element.srcElement.parentElement.attributes.index.value);
    activateFeatureSlides(
      element.srcElement.parentElement.attributes.index.value
    );
  }

  if (!allSpans.includes(element.srcElement)) {
    element.srcElement.classList.add("features-button-active");
    //console.log(element.srcElement.attributes.index.value);
    activateFeatureSlides(element.srcElement.attributes.index.value);
  }
}
function activateFeatureSlides(index) {
  featuresSlides[index].classList.add("features-register-active");
}

//burger menu
let burger = document.getElementById("burger");
burger.addEventListener("click", toggleMenu);
async function toggleMenu(element) {
  if (menu.classList.contains("translated")) {
    menu.classList.remove("translated");
  } else {
    menu.classList.add("translated");
  }

  //console.log(menu.style);
}

//Slideshow controls

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("review-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

//Custom Validation Message
document.addEventListener("DOMContentLoaded", function () {
  let elements = document.getElementsByTagName("input");
  for (let i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function (e) {
      e.target.setCustomValidity("");
      if (!e.target.validity.valid) {
        e.target.setCustomValidity("This field is required");
      }
    };
    elements[i].oninput = function (e) {
      e.target.setCustomValidity("");
    };
  }
});
