// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minimum(a, b, c) {
//     let min = a;
//     if (b < min) {
//         min = b;
//     }
//     if (c < min) {
//         min = c;
//     }
//     document.write(`<h1>${min}</h1>`);
// }
//
// minimum(5, 3, 8);
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function maximum(a, b, c) {
//     let max = a;
//     if (b > max) {
//         max = b;
//     }
//     if (c > max) {
//         max = c;
//     }
//     document.write(`<h1>${max}</h1>`);
// }
//
// maximum(5, 3, 2);
//
// // створити функцію яка повертає найбільше число з масиву
//
// let numbers = [2, 5, 30, 4, 45, 9, 24, 0, 5, 1];
//
// function maxnum(array) {
//     let max1 = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max1) {
//             max1 = array[i];
//         }
//     }
//     document.write(`<h1>Max number is ${max1}</h1>`);
// }
//
// maxnum(numbers);
//
// // - створити функцію яка повертає найменьше число з масиву
//
//
// function minnum(array) {
//     let min1 = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min1) {
//             min1 = array[i];
//         }
//     }
//     document.write(`<h1>Min number is ${min1}</h1>`);
// }
//
// minnum(numbers);
//
// // створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// function sumnum(array) {
//     let sum = 0;
//     for (let arr of array) {
//         sum = sum + arr;
//     }
//     return sum;
// }
//
// document.write(`<h2>The sum is ${sumnum(numbers)}</h2>`);
//
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function avernum(array) {
//     let sum = 0;
//     for (let arr of array) {
//         sum = sum + arr;
//     }
//     return sum / array.length;
// }
//
// document.write(`<h2>The average is ${avernum(numbers)}</h2>`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function maxmin(data) {
    let max = arguments[0];
    let min = arguments[0];
    for (let item of arguments) {
        if (item > max) {
            max = item;
        } else if (item < min) {
            min = item;
        }
    }
    document.write(`<h2>Max number is ${max}</h2>`);
    return min;
}

document.write(`<h2>Min number is ${maxmin(5,10,3,16,25,4,8,32,1)}</h2>`);

// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let randomarray = [];
//
// function random(size) {
//     for (let i = 0; i < size; i++) {
//         randomarray[i] = Math.round(Math.random() * 100);
//         document.write(randomarray[i] + `, `);
//     }
//     console.log(randomarray);
// }
//
// random(10);
//
// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// document.write(`<hr/>`);
//
// let randomlimit = [];
//
// function random2(size, limit) {
//     for (let i = 0; i < size; i++) {
//         randomlimit[i] = Math.round(Math.random() * limit);
//         document.write(randomlimit[i] + `, `);
//     }
//     console.log(randomlimit);
// }
//
// random2(5, 200);
//
// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let array2 = [];
//
// function viseversa(array) {
//     for (let i = 0; i < array.length; i++) {
//         array2[array.length - 1 - i] = array[i];
//     }
//     console.log(array);
//     console.log(array2);
// }
//
// viseversa(numbers);
