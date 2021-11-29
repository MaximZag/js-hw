// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let text = document.getElementById('content');
console.log(text.innerText);

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

text.innerText = 'The new text';
console.log(text.innerText);

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'Very very new text';
console.log(rules.innerText);

// -- змініть кожному елементу колір фону на червоний

// let color = document.getElementById('content');
// color.style.background = 'red';
// let color1 = document.getElementById('rules');
// color1.style.background = 'red';
// let color2 = document.getElementsByClassName('fc_rules');
// for (const color2Element of color2) {
//     color2Element.style.background = 'red';
// }

// ИЛИ

let all = document.body.children;
for (const allElement of all) {
    allElement.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій

for (const allElement of all) {
    allElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на жовтий

let textColor=document.getElementsByClassName('fc_rules');
for (const textColorElement of textColor) {
    textColorElement.style.color='yellow';
}
