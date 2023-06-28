// импортируем функции
import { removeStyleAnItem, addStyleAnItem } from './modules';

// самовызывающаяся функция добавляет/удаляет стиль навигационной панели
(function () {
  // элементы раздела heading(раздел-заголовок)
  const heading = document.querySelector('.heading');
  const logoYourTour = heading.querySelector('.navbar__logo-YourTour');
  // получим статическую коллекцию NodeList элементов ссылок навигационной панели
  const nodeListOfNavbarLinkItems =
    heading.querySelectorAll('.navbar__menu-link');
  const telephoneNumber = heading.querySelector('.navbar__telephoneNumber');

  // добавить стиль навигационной панели
  function addNavbarStyle() {
    addStyleAnItem(heading, 'scrolled-bgn');
    addStyleAnItem(logoYourTour, 'scrolled-color');

    nodeListOfNavbarLinkItems.forEach((item) => {
      addStyleAnItem(item, 'scrolled-color');
      addStyleAnItem(item, 'scrolled-hover');
    });
    addStyleAnItem(telephoneNumber, 'scrolled-color');
  }

  // удалить стиль навигационной панели
  function removeNavbarStyle() {
    removeStyleAnItem(heading, 'scrolled-bgn');
    removeStyleAnItem(logoYourTour, 'scrolled-color');

    nodeListOfNavbarLinkItems.forEach((item) => {
      removeStyleAnItem(item, 'scrolled-color');
      removeStyleAnItem(item, 'scrolled-hover');
    });

    removeStyleAnItem(telephoneNumber, 'scrolled-color');
  }

  window.addEventListener('scroll', () => {
    // если ширина экрана больше 450px и scroll больше 0
    if (window.innerWidth > 450 && scrollY > 0) {
      addNavbarStyle();
    } else {
      removeNavbarStyle();
    }
  });
})();
