// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

const inputRef = document.querySelector('#validation-input');
const dataLength = inputRef.dataset.length;

inputRef.addEventListener('blur', onInputClick);

function onInputClick (event) {
    if (event.currentTarget.value.length == dataLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
      } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
      }
};