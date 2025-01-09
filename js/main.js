// const nav = document.querySelector('.block-navigation');
// const navItems = nav.querySelectorAll('li');

// navItems?.forEach((item) => {
//   item.addEventListener('click', () => {
//     navItems.forEach(item => {
//       item.classList.remove('nav-select');
//     });
//     item.classList.add('nav-select');
//   })
// })

// let currentIndex = 0;
// const carouselItems = document.querySelectorAll('.carousel-item');

// function goToSlide(index) {
//  if (index < 0) {
//  index = carouselItems.length - 1;
//  } else if (index >= carouselItems.length) {
//  index = 0;
//  }
//  currentIndex = index;
//  document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function goToNextSlide() {
//  goToSlide(currentIndex + 1);
// }

// function goToPrevSlide() {
//  goToSlide(currentIndex - 1);
// }

// setInterval(goToNextSlide, 3000);

const menu = document.querySelector('.side-menu');
const menuContent = document.querySelector('.side-menu-block');
const closeMenuBtn = document.querySelector('.menu-exp');
const openMenuBtn = document.querySelector('.menu-open');

menu.addEventListener('click', () => {
  menuContent.classList.toggle('hide');
  closeMenuBtn.classList.toggle('hide');
  openMenuBtn.classList.toggle('hide');
  menu.classList.toggle('close');
})