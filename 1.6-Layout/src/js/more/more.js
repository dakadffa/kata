let more = document.querySelectorAll(".more");
let moreButton = document.querySelectorAll(".more__button");

for (let i = 0; i < more.length; i++) {
  moreButton[i].addEventListener("click", function () {
    more[i].classList.toggle("more--opened");

    let moreText = moreButton[i].querySelector(".more__button-text");
    
    if (i == 0) {
      if (moreText.textContent != "Скрыть") {
        moreText.textContent = "Скрыть";
      } else {
        moreText.textContent = "Читать далее";
      }
    } else {
      if (moreText.textContent != "Скрыть") {
        moreText.textContent = "Скрыть";
      } else {
        moreText.textContent = "Показать всё";
      }
    }  
  });
}
