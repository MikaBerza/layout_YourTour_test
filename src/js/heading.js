// импортируем функции
import { removeStyleAnItem, addStyleAnItem } from './modules';

// самовызывающаяся функция добавляет/удаляет стиль навигационной панели
(function toggleNavigationBarStyle() {
  // элементы раздела heading(раздел-заголовок)
  const heading = document.querySelector('.heading');
  const logoYourTour = heading.querySelector('.navbar__logo-YourTour');
  // получим статическую коллекцию NodeList элементов ссылок навигационной панели
  const nodeListOfNavbarLinkItems = heading.querySelectorAll('.navbar__menu-link');
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
    // Использование локальной переменной thisScrollY вместо глобальной переменной scrollY
    const thiScrollY = window.scrollY;
    // Использование локальной переменной thiInnerWidth вместо глобальной переменной innerWidth
    const thiInnerWidth = window.innerWidth;
    // если ширина экрана больше 450px и scroll больше 0
    if (thiInnerWidth > 450 && thiScrollY > 0) {
      addNavbarStyle();
    } else {
      removeNavbarStyle();
    }
  });
}());

// самовызывающаяся функция для плавного скролла до якорного элемента
(function smoothScrollingToTheAnchorItem() {
  const linkItem = document.querySelectorAll('.navbar__menu-link');

  linkItem.forEach((item) => {
    item.addEventListener('click', function handleClick(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        behavior: 'smooth',
        top: target.offsetTop,
      });
    });
  });
}());
