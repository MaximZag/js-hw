// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function num() {
    if (arguments.length === 1) {
        document.write(arguments[0])
    } else if (arguments.length === 2) {
        document.write(arguments[0] + arguments[1])
    } else document.write(`Enter 1 or 2 values`)
}

num(`max`, 2);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let array1 = [1, 2, 3, 4, 6];
let array2 = [2, 3, 4, 5, 18];
let array3 = []

function sum(a, b) {
    for (let i = 0; i < array1.length; i++) {
        array3[i] = a[i] + b[i];
    }
    return array3
}

document.write(`<div>${array1}</div>`);
document.write(`<div>${array2}</div>`);
document.write(`<div>${sum(array1, array2)}</div>`);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let anyarray = [{name: 'Dima', age: 13}, {model: 'Camry'}, {model2: 'Ford', type: 3}];
let result = [];

function objects(any) {
    for (let i = 0; i < any.length; i++) {
        result[i] = Object.keys(any[i]);
    }
    return result
}

document.write(`${objects(anyarray)}`);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let result2 = [];

function objects2(val) {
    for (let i = 0; i < val.length; i++) {
        result2[i] = Object.values(val[i]);
    }
    return result2
}

document.write(`<div>${objects2(anyarray)}</div>`);
