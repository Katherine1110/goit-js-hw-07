// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRangeRef = document.querySelector('#font-size-control');
const spanTexstRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', changeSize)

function changeSize () {
    spanTexstRef.style.fontSize = inputRangeRef.value + 'px';
};