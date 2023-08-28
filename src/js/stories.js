// импортируем массив с ссылками на изображения из раздела stories(раздел-истории)
import { arrayLinksToImagesStories1 } from './images';
// импортируем функции
import { addBackgroundGradientAndImageToCards } from './modules';
// получим статическую коллекцию NodeList элементов карточек
const nodeListOfCard = document.querySelectorAll('.card-stories__img');
// фоновый градиент(стиль), для карточки
const gradientBackground = 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.2) 100%)';

// добавить изображение
function addAnImage() {
  // функция добавляет карточкам фоновый градиент и изображение
  addBackgroundGradientAndImageToCards(
    nodeListOfCard,
    gradientBackground,
    arrayLinksToImagesStories1,
  );
}
// добавил вызов функции `addAnImage()`, чтобы она выполнялась при загрузке страницы.
addAnImage();
