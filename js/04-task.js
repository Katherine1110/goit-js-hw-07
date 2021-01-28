// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const onIncrementBtnClick = document.querySelector('[data-action="increment"]');
const onDecrementBtnClick = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');

onIncrementBtnClick.addEventListener('click', increment);
onDecrementBtnClick.addEventListener('click', decrement);

let counterValue = 0;

function increment () {
    counterValue += 1;
    return value.textContent = counterValue;
};

function decrement () {
    counterValue -= 1;
    return value.textContent = counterValue;
};



