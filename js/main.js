
const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
    load.style.fade = "slow";
});

const nav = document.getElementById('main-nav');
const logo = document.getElementById('logo')

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
    nav.style.background = '#252525';
    nav.style.padding = '1rem 1rem';
    nav.style.transition = "0.4s ease";
    logo.style.color = "#fff";
  }
  else{
    nav.style.background = 'transparent';
    nav.style.padding = '3rem 2rem';
    nav.style.transition = "0.4s ease";
    logo.style.color = "#d8d4d3";
  }
}



var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});