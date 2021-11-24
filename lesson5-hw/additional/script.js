// - Дано натуральное число n. Выведите все числа от 1 до n.

let natural = (max) => {
    for (let i = 1; i <= max; i++) {
        document.write(`${i}, `);
    }
}
natural(7);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

document.write(`<div>`);
let numbers = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            document.write(`${i}, `);
        }
    } else if (b < a) {
        for (let i = a; i >= b; i--) {
            document.write(`${i}, `);
        }
    } else document.write(Равны);
}
numbers(9, 3);
document.write(`</div>`);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let result = (array, n) => {
    let m = array[n];
    array[n] = array[n + 1];
    array[n + 1] = m;
    console.log(array);
}
result([2, 4, 6, 8], 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
debugger
let res = (zarray) => {
    for (let i = 0; i < zarray.length; i++) {
        if (zarray[i] === 0) {
            for (let j = i; j < zarray.length - 1; j++) {
                let m = zarray[j];
                zarray[j] = zarray[j + 1];
                zarray[j + 1] = m;
            }
            zarray[zarray.length - 1] = 0
        }
    }
    console.log(zarray);
}
res([0, 0, 6, 1, 5]);
