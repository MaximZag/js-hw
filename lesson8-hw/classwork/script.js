// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let group = document.getElementById('main_header');
group.style.color = 'sep-2021';


// b) робить шириниу елементу ul 400px

let width1 = document.getElementsByTagName('ul');
for (const width1Element of width1) {
    width1Element.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let width2 = document.getElementsByClassName('linkList');
for (const width2Element of width2) {
    width2Element.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let text = document.getElementsByClassName('listElement2')[0].innerText;
console.log(text);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liElements = document.getElementsByTagName('li');
for (const liElement of liElements) {
    liElement.style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {
    aElement.classList.add('anchor');
}
console.log(aElements);

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (const aElement of aElements) {
    if (aElement.innerText === 'link3') {
        aElement.style.width = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const aElement of aElements) {
    let xxx = aElement.innerText;
    aElement.classList.add(`element_${xxx}`)
}
console.log(aElements);

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subColor = document.getElementsByClassName('sub-header');
// let backg = prompt('Enter background');
// for (const backgroundElement of subColor) {
//     backgroundElement.style.background = backg;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let textColor = document.getElementsByClassName('sub-header');
// let color = prompt('Enter color');
// for (const colorElement of textColor) {
//     if (colorElement.innerText === 'content 2 segment') {
//         colorElement.style.color = color;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let ranText = document.getElementsByClassName('content_1');
// for (const ranTextElement of ranText) {
//     ranTextElement.innerText = prompt('Enter text')
// }

// l) отримати елементи p та змінити їм padding на 20px

let pad = document.getElementsByTagName('p');
for (const padElement of pad) {
    padElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let difText = document.getElementsByClassName('text2');
for (const difTextElement of difText) {
    difTextElement.innerText = 'sep-2021';
}
