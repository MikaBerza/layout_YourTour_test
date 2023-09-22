// импортируем функции
import { removeStyleAnItem, addStyleAnItem } from './modules';

// самовызывающаяся функция добавляет/удаляет стиль навигационной панели
(function toggleNavigationBarStyle() {
  // элементы раздела heading(раздел-заголовок)
  const heading = document.querySelector('.heading');
  const logoYourTour = heading.querySelector('.navbar__logo-YourTour');
  const logoTelephoneNumber = heading.querySelector('.navbar__telephoneNumber-item');
  // получим статическую коллекцию NodeList элементов ссылок навигационной панели
  const nodeListOfNavbarLinkItems = heading.querySelectorAll('.navbar__menu-link');

  // добавить стиль навигационной панели
  function addNavbarStyle() {
    addStyleAnItem(heading, 'scrolled-fix-bgn');
    addStyleAnItem(logoYourTour, 'scrolled-color');
    addStyleAnItem(logoTelephoneNumber, 'scrolled-color');

    nodeListOfNavbarLinkItems.forEach((item) => {
      addStyleAnItem(item, 'scrolled-color');
      addStyleAnItem(item, 'scrolled-hover');
    });
  }

  // удалить стиль навигационной панели
  function removeNavbarStyle() {
    removeStyleAnItem(heading, 'scrolled-fix-bgn');
    removeStyleAnItem(logoYourTour, 'scrolled-color');
    removeStyleAnItem(logoTelephoneNumber, 'scrolled-color');

    nodeListOfNavbarLinkItems.forEach((item) => {
      removeStyleAnItem(item, 'scrolled-color');
      removeStyleAnItem(item, 'scrolled-hover');
    });
  }

  window.addEventListener('scroll', () => {
    // Использование локальной переменной thisScrollY вместо глобальной переменной scrollY
    const thisScrollY = window.scrollY;
    // если вертикальный scroll больше 450px
    if (thisScrollY > 450) {
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
