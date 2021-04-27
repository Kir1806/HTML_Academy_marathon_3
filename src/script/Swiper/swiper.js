import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

let Slider = new Swiper ('.swiper-container', {
  loop: true,
  loopedSlides: 4,
  centeredSlides: true,
  spaceBetween: 0,
  slidesPerView: 1,//'auto',
  // pagination: {
  //   el: '.swiper-pagination',  
  //   clickable: true
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});

export {Slider};