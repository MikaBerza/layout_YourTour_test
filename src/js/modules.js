// удалить стиль элемента
export function removeStyleAnItem(item, className) {
  item.classList.remove(className);
}
// добавить стиль элементу
export function addStyleAnItem(item, className) {
  item.classList.add(className);
}
