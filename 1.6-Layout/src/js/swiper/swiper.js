import Swiper, { Pagination } from "swiper";
let swiperContainers = document.querySelectorAll(".swiper-container");

Swiper.use([Pagination]);

const screenWidth = window.screen.width;

if (screenWidth < 768) { 
  let pricesHeader = document.querySelector('.prices__header');
  pricesHeader.style.display = 'none';

  for (let i = 0; i < swiperContainers.length; i++) {
    let swiperParent = swiperContainers[i].parentElement;
    let moreButton = swiperParent.querySelector('.more__button');
  moreButton.style.display = 'none';
  }

  new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
} else {
  for (let i = 0; i < swiperContainers.length; i++) {
    let swiperWrapper = swiperContainers[i].querySelector(".swiper-wrapper");
    swiperWrapper.classList.add("swiper-wrapper--display--768");
  }

  let pricesCards = document.querySelector('.prices__cards');

  pricesCards.classList.add('prices__cards--display--768');
}
