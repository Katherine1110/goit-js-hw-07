// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// const renderBtnRef = document.querySelector('[data-action="render"]');
// const destroyBtnRef = document.querySelector('[data-action="destroy"]');
// const boxesRef = document.querySelector('#boxes');
// const controlsInputRef = document.querySelector('#controls input');

// function getAmount () {
//     let amount;
//     amount += controlsInputRef.value;
//     createBoxes(amount)
// }
// console.log(controlsInputRef.value)
// renderBtnRef.addEventListener('click', createBoxes);
// destroyBtnRef.addEventListener('click', destroyBoxes);




// function createBoxes(amount) {
//     let divEl = document.createElement('div');
//     divEl.classList.add('#boxes');
//     divEl += amount.value;
//     return boxesRef.append(divEl)
// };



// function destroyBoxes (event) {
//     event.remove();
// }

