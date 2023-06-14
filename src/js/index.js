import '../css/index.css';

import '../assets/images/headerBackgroundImg1920.png';

const heading = document.querySelector('.heading');
const logoYourTour = heading.querySelector('.navbar__logo_YourTour');
const navbarMenuLink = heading.querySelectorAll('.navbar__menu-link');
const telephoneNumber = heading.querySelector('.navbar__telephoneNumber');

// добавить стиль навигационной панели
function addNavbarStyle() {
  heading.classList.add('scrolled-bgn');
  logoYourTour.classList.add('scrolled-color');
  for (let i = 0; i < navbarMenuLink.length; i++) {
    navbarMenuLink[i].classList.add('scrolled-color');
    navbarMenuLink[i].classList.add('scrolled-hover');
  }
  telephoneNumber.classList.add('scrolled-color');
}

// удалить стиль навигационной панели
function removeNavbarStyle() {
  heading.classList.remove('scrolled-bgn');
  logoYourTour.classList.remove('scrolled-color');
  for (let i = 0; i < navbarMenuLink.length; i++) {
    navbarMenuLink[i].classList.remove('scrolled-color');
    navbarMenuLink[i].classList.remove('scrolled-hover');
  }
  telephoneNumber.classList.remove('scrolled-color');
}

window.addEventListener('scroll', () => {
  if (scrollY > 766) {
    addNavbarStyle();
  } else {
    removeNavbarStyle();
  }
});
