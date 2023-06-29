// импортируем массив с ссылками на изображения из раздела chooseTour(раздел-выбрать тур)
import {
  arrayLinksToImagesTravelPhotosB1,
  arrayLinksToImagesTravelPhotosB2,
} from './images';

// console.log(arrayLinksToImagesTravelPhotosB2);
// самовызывающаяся функция добавляет карточкам фоновое изображение
(function () {
  // получим статическую коллекцию NodeList элементов карточек блока 1
  const nodeListOfCardB1 = document.querySelectorAll(
    '.travelPhotos__cardContainer-block1-img'
  );
  // получим статическую коллекцию NodeList элементов карточек блока 2
  const nodeListOfCardB2 = document.querySelectorAll(
    '.travelPhotos__cardContainer-block2-img'
  );

  nodeListOfCardB1.forEach((card, index) => {
    // ссылка на фоновое изображение для карточки
    let linkToImag = arrayLinksToImagesTravelPhotosB1[index];
    card.style.backgroundImage = `url(${linkToImag})`;
  });

  nodeListOfCardB2.forEach((card, index) => {
    // ссылка на фоновое изображение для карточки
    let linkToImag = arrayLinksToImagesTravelPhotosB2[index];
    card.style.backgroundImage = `url(${linkToImag})`;
  });
})();
