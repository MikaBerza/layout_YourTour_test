// импортируем массив с ссылками на изображения из раздела stories(раздел-истории)
import { arrayLinksToImagesStories } from './images';
// самовызывающаяся функция добавляет карточкам фоновый градиент и изображение
(function () {
  // получим статическую коллекцию NodeList элементов карточек
  const nodeListOfCard = document.querySelectorAll('.stories__card-img');

  // фоновый градиент(стиль), для карточки
  const gradientBackground =
    'linear-gradient(270deg, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.2) 100%)';

  nodeListOfCard.forEach((card, index) => {
    // ссылка на фоновое изображение для карточки
    let linkToImag = arrayLinksToImagesStories[index];
    card.style.backgroundImage = `${gradientBackground}, url(${linkToImag})`;
  });
})();
