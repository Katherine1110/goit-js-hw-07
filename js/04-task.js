// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const onIncrementBtnClick = document.querySelector('[data-action="increment"]');
const onDecrementBtnClick = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
    return (counterValue += 1);
  };
  
const decrement = () => {
    return (counterValue -= 1);
  };

onIncrementBtnClick.addEventListener('click', () => {
    value.textContent = increment();
  });
  
onDecrementBtnClick.addEventListener('click', () => {
    value.textContent = decrement();
  });



