//
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
    heading.classList.add('scrolled-bgn');
    logoYourTour.classList.add('scrolled-color');

    nodeListOfNavbarLinkItems.forEach((item) => {
      item.classList.add('scrolled-color');
      item.classList.add('scrolled-hover');
    });

    telephoneNumber.classList.add('scrolled-color');
  }

  // удалить стиль навигационной панели
  function removeNavbarStyle() {
    heading.classList.remove('scrolled-bgn');
    logoYourTour.classList.remove('scrolled-color');

    nodeListOfNavbarLinkItems.forEach((item) => {
      item.classList.remove('scrolled-color');
      item.classList.remove('scrolled-hover');
    });

    telephoneNumber.classList.remove('scrolled-color');
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
