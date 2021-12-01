// Все робити за допомоги js.
// - створити блок,

let block = document.createElement('div');
block.innerText = 'Hello world';

//  - додати йому класи wrap, collapse, alpha, beta

block.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

block.style.background = 'yellow';
block.style.color = 'red';
block.style.fontSize = '20px';

// - додати цей блок в body.

document.body.appendChild(block);

// - клонувати його повністю, та додати клон в body.

let cloneBlock = block.cloneNode(true);
document.body.appendChild(cloneBlock);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
ul.classList.add('menu');
document.body.appendChild(ul);
for (const item of array) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}


//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.