// импортируем функции
import { removeStyleAnItem, addStyleAnItem } from './modules';

// самовызывающаяся функция добавляет/удаляет стиль для вкладки и ссылки
(function toggleStyleTabsAndLinks() {
  // получим статическую коллекцию NodeList элементов вкладок
  const nodeListOfTabs = document.querySelectorAll('.tabs__link');

  // удалить стиль из всех элементов
  function removeStyleFromAllItems(nodeListName, className) {
    nodeListName.forEach((item) => {
      removeStyleAnItem(item, className);
    });
  }

  // добавим/удалим стиль вкладки
  nodeListOfTabs.forEach((item) => {
    item.addEventListener('click', () => {
      removeStyleFromAllItems(nodeListOfTabs, 'tabs__link_active');
      addStyleAnItem(item, 'tabs__link_active');
    });
  });
}());
