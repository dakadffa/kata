let more = document.querySelectorAll('.more');
let moreButton = document.querySelectorAll('.more__button');

for (let i = 0; i < more.length; i++) {
  moreButton[i].addEventListener('click', function () {
    more[i].classList.add('more--opened');
    moreButton[i].style.display = 'none';
  })
}