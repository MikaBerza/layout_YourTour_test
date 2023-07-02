// импортируем массив с ссылками на изображения из раздела stories(раздел-истории)
import { arrayLinksToImagesStories } from './images';
// импортируем функции
import { addBackgroundGradientAndImageToCards } from './modules';
// получим статическую коллекцию NodeList элементов карточек
const nodeListOfCard = document.querySelectorAll('.stories__card-img');
// фоновый градиент(стиль), для карточки
const gradientBackground = 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.2) 100%)';

// функция добавляет карточкам фоновый градиент и изображение
addBackgroundGradientAndImageToCards(nodeListOfCard, gradientBackground, arrayLinksToImagesStories);
