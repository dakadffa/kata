let asides = document.querySelectorAll("aside");

let asideMenu = document.querySelector(".menu");
let buttonBurger = document.querySelector(
  ".button__icon--burger"
).parentElement;

buttonBurger.addEventListener("click", function () {
  asideMenu.classList.add("aside--opened");
});

let asideFeedback = document.querySelector(".feedback");
let buttonsFeedback = document.querySelectorAll(
  ".button__icon--feedback"
);

for (let i = 0; i < buttonsFeedback.length; i++) {
  buttonsFeedback[i].parentElement.addEventListener("click", function () {
    asideFeedback.classList.add("aside--opened");
  });
}

let asideCall = document.querySelector(".call");
let buttonsCall = document.querySelectorAll(
  ".button__icon--call"
);

for (let i = 0; i < buttonsCall.length; i++) {
  buttonsCall[i].parentElement.addEventListener("click", function () {
    asideCall.classList.add("aside--opened");
  });
}


for (let i = 0; i < asides.length; i++) {
  let buttonClose = asides[i].querySelector(
    ".button__icon--close"
  ).parentElement;
  let fade = asides[i].querySelector('.aside__fade');

  buttonClose.addEventListener("click", function () {
    asides[i].classList.remove("aside--opened");
  });
  fade.addEventListener("click", function () {
    asides[i].classList.remove("aside--opened");
  });
}
