// импортируем массив с ссылками на изображения из раздела chooseTour(раздел-выбрать тур)
import {
  arrayLinksToImagesTravelPhotosB1,
  arrayLinksToImagesTravelPhotosB2,
} from './images';
// импортируем функции
import { addBackgroundImagesToCards } from './modules';
// получим статическую коллекцию NodeList элементов карточек блока 1
const nodeListOfCardB1 = document.querySelectorAll(
  '.travelPhotos__cardContainer-block1-img',
);
// получим статическую коллекцию NodeList элементов карточек блока 2
const nodeListOfCardB2 = document.querySelectorAll(
  '.travelPhotos__cardContainer-block2-img',
);
// функция добавляет карточкам фоновое изображение
addBackgroundImagesToCards(nodeListOfCardB1, arrayLinksToImagesTravelPhotosB1);
addBackgroundImagesToCards(nodeListOfCardB2, arrayLinksToImagesTravelPhotosB2);
