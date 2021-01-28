// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputClick);

function onInputClick (event) {
    if (event.currentTarget.value.length === 6) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
      } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
      }
};