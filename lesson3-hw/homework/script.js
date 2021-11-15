// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [2, 4, 6, 8, 10];
let strings = ['two', 'four', 'six', 'eight', 'ten'];
let nsb = [2, 'four', true, 8, 'ten'];
console.log(numbers);
console.log(strings);
console.log(nsb);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let names = [];
names[0] = 'Tom';
names[1] = 'Olya';
names[2] = 'Katya';
names[3] = 'Petya';
names[4] = 'Max';
console.log(names);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello!</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Item ${i}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let a = 0;
while (a < 20) {
    document.write(`<h1>Hello Okten</h1>`)
    a++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let b = 0;
while (b < 20) {
    document.write(`<h1>Hello Okten ${b}</h1>`)
    b++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let c = 0; c < 10; c++) {
    console.log(items[c])
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let things = ['ball', 'table', 'one', 'glass', 'pc', 'phone', 'chair', 'bus', 'car', 'tram'];
for (thing of things) {
    console.log(thing)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let random = [1, 'two', 3, true, 5, 'six', false, 8, 'nine', 10];
for (let d = 0; d < 10; d++) {
    console.log(random[d])
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let random2 = [1, 'two', 3, true, 5, 'six', false, 8, 'nine', 10];
for (let e = 0; e < random2.length; e++) {
    if (typeof random2[e] === 'boolean') {
        console.log(random2[e])
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let random3 = [1, 'two', 3, true, 5, 'six', false, 8, 'nine', 10];
for (let f = 0; f < random3.length; f++) {
    if (typeof random3[f] === 'number') {
        console.log(random3[f])
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let random4 = [1, 'two', 3, true, 5, 'six', false, 8, 'nine', 10];
for (let g = 0; g < random4.length; g++) {
    if (typeof random4[g] === 'string') {
        console.log(random4[g])
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let bigarray = [];
bigarray[0] = 'One';
bigarray[1] = 2;
bigarray[2] = true;
bigarray[3] = 'Four';
bigarray[4] = false;
bigarray[5] = 6;
bigarray[6] = 'Seven';
bigarray[7] = 8;
bigarray[8] = 'Table';
bigarray[9] = 10;
for (let h = 0; h < bigarray.length; h++) {
    console.log(bigarray[h])
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(`<div>Step ${i}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 100; j++) {
    console.log(j)
    document.write(`<div>Step ${j}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let k = 0; k < 100; k+=2) {
    console.log(k)
    document.write(`<div>Step ${k}</div>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let l = 0; l < 100; l++) {
    if (l%2===0){
    console.log(l)
    document.write(`<div>Step ${l}</div>`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let m = 0; m < 100; m++) {
    if (m%2===0){
        console.log(m+1)
        document.write(`<div>Step ${m+1}</div>`)
    }
}



