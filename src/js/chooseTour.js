// импортируем массив с ссылками на изображения из раздела chooseTour(раздел-выбрать тур)
import { arrayLinksToImagesChooseTour } from './images';
// импортируем функции
import { removeStyleAnItem, addStyleAnItem, addBackgroundGradientAndImageToCards } from './modules';
// получим статическую коллекцию NodeList элементов карточек
const nodeListOfCard = document.querySelectorAll('.chooseTour__cardTur-img');
// фоновый градиент(стиль), для карточки
const gradientBackground = 'linear-gradient(360deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.06) 48.44%, rgba(0, 0, 0, 0.5) 100%)';

// самовызывающаяся функция добавляет/удаляет стиль для вкладки и ссылки
(function toggleStyleTabsAndLinks() {
  // получим статическую коллекцию NodeList элементов вкладок
  const nodeListOfTabs = document.querySelectorAll('.chooseTour__tabs-link');

  // удалить стиль из всех элементов
  function removeStyleFromAllItems(nodeListName, className) {
    nodeListName.forEach((item) => {
      removeStyleAnItem(item, className);
    });
  }

  // добавим/удалим стиль вкладки
  nodeListOfTabs.forEach((item) => {
    item.addEventListener('click', () => {
      removeStyleFromAllItems(nodeListOfTabs, 'chooseTour__tabs-link_active');
      addStyleAnItem(item, 'chooseTour__tabs-link_active');
    });
  });
}());

// функция добавляет карточкам фоновый градиент и изображение
addBackgroundGradientAndImageToCards(
  nodeListOfCard,
  gradientBackground,
  arrayLinksToImagesChooseTour,
);
