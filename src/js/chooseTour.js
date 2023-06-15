// импортируем массив с ссылками на изображения из раздела chooseTour(раздел-выбрать тур)
import { arrayLinksToImages } from './images';

// самовызывающаяся функция добавляет/удаляет стиль вкладки
(function () {
  // получим статическую коллекцию NodeList элементов вкладок
  const nodeListOfTabs = document.querySelectorAll('.chooseTour__tabs-link');

  // удалить стиль вкладки
  function removeStyleFromTab() {
    nodeListOfTabs.forEach((item) => {
      item.classList.remove('chooseTour__tabs-link_active');
    });
  }

  // добавить стиль вкладке
  function addStyleFromTab(item) {
    item.classList.add('chooseTour__tabs-link_active');
  }

  nodeListOfTabs.forEach((item) => {
    item.addEventListener('click', () => {
      removeStyleFromTab();
      addStyleFromTab(item);
    });
  });
})();

// самовызывающаяся функция добавляет карточкам фоновый градиент и изображение
(function () {
  // получим статическую коллекцию NodeList элементов карточек
  const nodeListOfCard = document.querySelectorAll('.chooseTour__cardTur-img');
  console.log(nodeListOfCard);

  // фоновый градиент(стиль), для карточки
  const gradientBackground =
    'linear-gradient(360deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.06) 48.44%, rgba(0, 0, 0, 0.5) 100%)';

  nodeListOfCard.forEach((card, index) => {
    // ссылка на фоновое изображение для карточки
    let linkToImag = arrayLinksToImages[index];
    card.style.backgroundImage = `${gradientBackground}, url(${linkToImag})`;
  });
})();
