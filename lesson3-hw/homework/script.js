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



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
