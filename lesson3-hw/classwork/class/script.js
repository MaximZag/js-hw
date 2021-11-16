// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// 2. перебрати його циклом for

for (let a = 0; a < array.length; a++) {
    console.log(array[a])
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let b = 0;
while (b < array.length) {
    if (b % 2 !== 0) {
        console.log(array[b])
    }
    b++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let c = 0; c < array.length; c++) {
    if (c % 2 !== 0) {
        console.log(array[c])
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let d = 0;
while (d < array.length) {
    if (d % 2 === 0) {
        console.log(array[d])
    }
    d++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let e = 0; e < array.length; e++) {
    if (e % 2 === 0) {
        console.log(array[e])
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let f = 1; f < array.length; f++) {
// if (f%3===0){
//     array[f]='okten'
// }
// }
// console.log(array);

// 8. вивести масив в зворотньому порядку.

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1)
let ib = array.length - 1;
while (ib >= 0) {
    console.log(array[ib]);
    ib--;
}

// 2)
for (let ab = array.length - 1; ab >= 0; ab--) {
    console.log(array[ab])
}

// 3)
let bb = array.length - 1;
while (bb >= 0) {
    if (bb % 2 !== 0) {
        console.log(array[bb])
    }
    bb--;
}

// 4)
for (let cb = array.length - 1; cb >= 0; cb--) {
    if (cb % 2 !== 0) {
        console.log(array[cb])
    }
}

// 5)
let db = array.length-1;
while (db >= 0) {
    if (db % 2 === 0) {
        console.log(array[db])
    }
    db--;
}

// 6)
for (let eb = array.length-1; eb >= 0; eb--) {
    if (eb % 2 === 0) {
        console.log(array[eb])
    }
}

// 7)
for (let fb = array.length-1; fb >0; fb--) {
    if (fb%3===0){
        array[fb]='okten'
    }
}
console.log(array);

