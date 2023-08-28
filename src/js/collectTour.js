// импортируем функции
import { removeStyleAnItem, addStyleAnItem } from './modules';
// получим элемент формы
const formElement = document.querySelector('.form-fill');
// получим элемент select
const dropdownSelectItem = formElement.querySelector(
  '.input-fields__dropdown-select-item',
);
// получим элемент кнопки (Сбросить)
const btnReset = formElement.querySelector('.buttons-group__reset');

// получаем данные формы из полей ввода
function getFormData(event) {
  // отменяет действие по умолчанию для события.
  event.preventDefault();
  /* Для получения данных из формы, воспользуемся объектом FormData.
    Этот объект содержит метод get(), с помощью которого извлекаем данные по имени */
  const formData = new FormData(formElement);
  // теперь можно извлечь данные
  const enteredName = formData.get('name');
  const enteredDirection = formData.get('direction');
  const enteredEmail = formData.get('email');
  const enteredPhone = formData.get('phone');
  const enteredDateFrom = formData.get('dateFrom');
  const enteredDateTo = formData.get('dateTo');
  const enteredComment = formData.get('comment');
  const enteredClientAge = formData.get('clientAge');

  // соберем введенные пользовательские данные из формы в объект
  const userDataEntered = {
    name: enteredName,
    direction: enteredDirection,
    email: enteredEmail,
    phone: enteredPhone,
    dateFrom: enteredDateFrom,
    dateTo: enteredDateTo,
    comment: enteredComment,
    clientAge: enteredClientAge,
  };

  // преобразуем значение объект с данными в строку JSON
  const userDataEnteredJson = JSON.stringify(userDataEntered);
  // Выведем полученные данные
  console.log('userDataEnteredJson', userDataEnteredJson);
}

// очистить поля формы
function clearFormFields(event) {
  event.preventDefault();
  // очищаем поля формы
  formElement.reset();
  // удаляем стиль элементу
  removeStyleAnItem(
    dropdownSelectItem,
    'input-fields__dropdown-select-item_active',
  );
}

// Для применения стиля выбранному элементу из списка, навешивается обработчик
dropdownSelectItem.addEventListener('change', () => {
  addStyleAnItem(
    dropdownSelectItem,
    'input-fields__dropdown-select-item_active',
  );
});

// Для проверки получения данных, навешивается обработчик
formElement.addEventListener('submit', getFormData);

// Для очистки полей формы навешиваем обработчик
btnReset.addEventListener('click', clearFormFields);
