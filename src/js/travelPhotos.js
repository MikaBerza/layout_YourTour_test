// импортируем массив с ссылками на изображения из раздела chooseTour(раздел-выбрать тур)
import { arrayLinksToImagesTravelPhotos1 } from './images';
// импортируем функции
import { addBackgroundImagesToCards } from './modules';
// получим статическую коллекцию NodeList элементов карточек блока 1
const nodeListOfCard = document.querySelectorAll('.bgi-1');

// добавить фотогалерею
function addPhotoGallery() {
  // функция добавляет карточкам фоновое изображение
  addBackgroundImagesToCards(nodeListOfCard, arrayLinksToImagesTravelPhotos1);
}
// добавил вызов функции `addPhotoGallery()`, чтобы она выполнялась при загрузке страницы.
addPhotoGallery();
