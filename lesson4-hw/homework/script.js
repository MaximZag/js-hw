// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {
    return a * b;
}

console.log(square(5, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle(r) {
//     return 3.14*r**2;
// }
//
// console.log(circle(prompt(`Enter radius`)));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylindr(h, r) {
    return h * 3.14 * r * 2;
}

console.log(cylindr(2, 10));
document.write(`Cylinder volume is ` + cylindr(2, 10));

// створити функцію яка приймає масив та виводить кожен його елемент

let array = [1, 2, 3, 4, 5];

function list(data) {
    for (let i = 0; i < data.length; i++) {
        document.write(`<div> ${data[i]} </div>`);
    }
}

list(array);

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text(b) {
    document.write(`<p> ${b} </p>`);
}

text(`Some text`);

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ul(text) {
    document.write(`<ul>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write(`</ul>`);
}

ul(`list text`);

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulnumber(text, number) {
    document.write(`<ul>`);
    for (let i = 0; i <= number; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
}

ulnumber(`More list text`, 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let primarray = [2, `text`, false, 4, `block`, true];

function listarray(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>${array[i]}</div>`);
    }
}

listarray(primarray);

// - створити функцію яка приймає масив об'єктів з наступними полями name,surname, age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
    },
];

function data(simarray) {
    for (let i = 0; i < simarray.length; i++) {
        document.write(`<div>`);
        document.write(`<div>${simarray[i].name} ${simarray[i].surname} age- ${simarray[i].age}</div>`);
        document.write(`</div>`);
    }
}

data(simpsons);
