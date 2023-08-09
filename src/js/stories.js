// импортируем массив с ссылками на изображения из раздела stories(раздел-истории)
import {
  arrayLinksToImagesStories1,
  arrayLinksToImagesStories2,
  arrayLinksToImagesStories3,
} from './images';
// импортируем функции
import { addBackgroundGradientAndImageToCards } from './modules';
// получим статическую коллекцию NodeList элементов карточек
const nodeListOfCard = document.querySelectorAll('.stories__card-img');
// фоновый градиент(стиль), для карточки
const gradientBackground = 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.2) 100%)';

// добавить изображение
function addAnImage() {
  // Использование локальной переменной thisInnerWidth вместо глобальной переменной innerWidth
  const thisInnerWidth = window.innerWidth;

  if (thisInnerWidth >= 0 && thisInnerWidth <= 549) {
    // функция добавляет карточкам фоновое изображение
    // функция добавляет карточкам фоновый градиент и изображение
    addBackgroundGradientAndImageToCards(
      nodeListOfCard,
      gradientBackground,
      arrayLinksToImagesStories3,
    );
  } else if (thisInnerWidth > 549 && thisInnerWidth <= 1024) {
    // функция добавляет карточкам фоновое изображение
    // функция добавляет карточкам фоновый градиент и изображение
    addBackgroundGradientAndImageToCards(
      nodeListOfCard,
      gradientBackground,
      arrayLinksToImagesStories2,
    );
  } else if (thisInnerWidth >= 1920) {
    // функция добавляет карточкам фоновое изображение
    // функция добавляет карточкам фоновый градиент и изображение
    addBackgroundGradientAndImageToCards(
      nodeListOfCard,
      gradientBackground,
      arrayLinksToImagesStories1,
    );
  }
}
// добавил вызов функции `addAnImage()`, чтобы она выполнялась при загрузке страницы.
addAnImage();
// вызываем `addAnImage()`, каждый раз когда размер окна меняется
window.addEventListener('resize', addAnImage);
