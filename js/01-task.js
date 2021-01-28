// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента 
// (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesRef = document.querySelector('#categories');
// console.log(categoriesRef);

const itemsRef = categoriesRef.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории.`);
// console.log(itemsRef)

itemsRef.forEach(element => {
    const title = element.querySelector('h2').innerHTML;
    console.log(`Категория: ${title}`)

    const liElem = element.querySelectorAll('li').length;
    console.log(`Количество элементов: ${liElem}`)
});

