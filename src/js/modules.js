// удалить стиль элемента
export function removeStyleAnItem(item, className) {
  item.classList.remove(className);
}
// добавить стиль элементу
export function addStyleAnItem(item, className) {
  item.classList.add(className);
}

// функция добавляет карточкам фоновый градиент и изображение
export function addBackgroundGradientAndImageToCards(
  nodeListOfCard,
  gradientBackground,
  arrayLinksToImages,
) {
  nodeListOfCard.forEach((card, index) => {
    // ссылка на фоновое изображение для карточки
    const linkToImag = arrayLinksToImages[index];
    // карточка
    const theCard = card;
    theCard.style.backgroundImage = `${gradientBackground}, url(${linkToImag})`;
  });
}

// самовызывающаяся функция добавляет карточкам фоновое изображение
export function addBackgroundImagesToCards(nodeListOfCard, arrayLinksToImages) {
  nodeListOfCard.forEach((card, index) => {
    // ссылка на фоновое изображение для карточки
    const linkToImag = arrayLinksToImages[index];
    // карточка
    const theCard = card;
    theCard.style.backgroundImage = `url(${linkToImag})`;
  });
}
