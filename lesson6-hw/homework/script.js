// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringtoarray = (str) => {
    return str.split(' ');
}
console.log(stringtoarray('Каждый охотник желает знать'));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => {
    return str.substr(0, length)
}
console.log(delete_characters('Каждый охотник желает знать', 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase();
}
console.log(insert_dash("HTML JavaScript PHP"));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let firstsymbol = (str) => {

    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(firstsymbol('каждый охотник желает знать'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let str1 = '';
let capitalize = (str) => {
    let array = str.split(' ');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
        str1 = str1 + array[i] + ' ';
    }
    return str1.slice(0, -1);
}
console.log(capitalize('каждый охотник желает знать'));

