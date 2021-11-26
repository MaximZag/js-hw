// - Дано список імен.
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let resarray = [];
let symbol = '';
let appropriatename = (string) => {
    if (string.includes('.')) {
        symbol = '.';
    } else if (string.includes('-')) {
        symbol = '-';
    } else {
        symbol = '_';
    }
    let array = string.split(symbol);
    array.forEach((item) => {
        if (item) resarray.push(item);
    })
    console.log(resarray.join(' '));
}
appropriatename('Harry..Potter');

//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let numarray = [];
let random = (size) => {
    for (let i = 0; i < size; i++) {
        numarray.push(Math.floor(Math.random() * 100));
    }
    return numarray;
}
let res = random(10);
console.log(res);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// console.log(res.sort((a,b)=>b-a));
// console.log(res.sort((a,b)=>a-b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

console.log(res.filter(value => value % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

console.log(res.map(item => item.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (sarray, direction) => {
    if (direction === 'ascending') {
        sarray.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        sarray.sort((a, b) => b - a)
    }

    console.log(sarray);
}
sortNums([2, 4, -8, 4, 1], 'ascending');

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

let coursesanddurationarray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesanddurationarray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesanddurationarray.filter(value => value.monthDuration > 5));



