// импортируем массив с ссылками на изображения из раздела chooseTour(раздел-выбрать тур)
import {
  arrayLinksToImagesTravelPhotos1,
  arrayLinksToImagesTravelPhotos2,
  arrayLinksToImagesTravelPhotos3,
} from './images';
// импортируем функции
import { addBackgroundImagesToCards } from './modules';
// получим статическую коллекцию NodeList элементов карточек блока 1
const nodeListOfCard = document.querySelectorAll(
  '.bgi-1',
);

// добавить фотогалерею
function addPhotoGallery() {
// Использование локальной переменной thisInnerWidth вместо глобальной переменной innerWidth
  const thisInnerWidth = window.innerWidth;

  if (thisInnerWidth >= 0 && thisInnerWidth < 360) {
    // функция добавляет карточкам фоновое изображение
    addBackgroundImagesToCards(nodeListOfCard, arrayLinksToImagesTravelPhotos3);
  } else if (thisInnerWidth > 360 && thisInnerWidth < 1024) {
    // функция добавляет карточкам фоновое изображение
    addBackgroundImagesToCards(nodeListOfCard, arrayLinksToImagesTravelPhotos2);
  } else if (thisInnerWidth >= 1920) {
    // функция добавляет карточкам фоновое изображение
    addBackgroundImagesToCards(nodeListOfCard, arrayLinksToImagesTravelPhotos1);
  }
}
// добавил вызов функции `addPhotoGallery()`, чтобы она выполнялась при загрузке страницы.
addPhotoGallery();
// вызываем `addPhotoGallery()`, каждый раз когда размер окна меняется
window.addEventListener('resize', addPhotoGallery);
