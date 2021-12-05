// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.body.onclick=function (e) {
//     console.log(`Element: ${e.target.localName}`);
//     let array=e.target.classList;
//     for (const arrayElement of array) {
//     console.log(`class: ${arrayElement}`);
//     }
//     if (e.target.id) {console.log(`id: ${e.target.id}`)}
//     console.log(`height: ${e.target.clientHeight}`);
//     console.log(`width: ${e.target.clientWidth}`);
//
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// let pop = document.createElement('div');
// pop.id = 'inactive';
// pop.style.position = 'absolute';
// pop.style.width = '50%';
// pop.style.top = '25%';
// pop.style.background = 'yellow';
// pop.style.left = '25%';
// pop.style.height = '50%';
// pop.style.display = 'flex';
// pop.style.opacity = '0';
// pop.style.flexDirection = 'column';
// pop.style.alignItems = 'center';
// pop.style.justifyContent = 'center';
// pop.style.rowGap = '20px';
//
// document.body.appendChild(pop);
//
// document.body.onclick = function (e) {
//     if (pop.id === 'inactive') {
//         pop.style.opacity = '1';
//         let name = document.createElement('div');
//         name.classList.add('xxx');
//         name.innerText = `Element: ${e.target.localName}`
//         pop.appendChild(name);
//
//         let array = e.target.classList;
//         for (const arrayElement of array) {
//             let clas = document.createElement('div');
//             clas.innerText = `class: ${arrayElement}`
//             clas.classList.add('xxx');
//             pop.appendChild(clas);
//         }
//         if (e.target.id) {
//             let id = document.createElement('div');
//             id.innerText = `id: ${e.target.id}`;
//             id.classList.add('xxx');
//             pop.appendChild(id);
//         }
//         let height = document.createElement('div');
//         height.innerText = `height: ${e.target.clientHeight}`;
//         height.classList.add('xxx');
//         let width = document.createElement('div');
//         width.innerText = `weight: ${e.target.clientWidth}`;
//         width.classList.add('xxx');
//         pop.append(height, width);
//         pop.id = 'active';
//     } else {
//         pop.style.opacity = '0';
//         pop.id = 'inactive';
//         let xxx = pop.getElementsByClassName('xxx');
//         for (const item of xxx) {
//             item.style.display = 'none';
//         }
//     }
// }

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
div1.innerText = 'Filter by status false';
div2.innerText = 'Filter by age higher 29';
div3.innerText = 'Filter by city Kyiv';
let check1 = document.createElement('input');
check1.setAttribute('type', 'checkbox');
div1.appendChild(check1);
let check2 = document.createElement('input');
check2.setAttribute('type', 'checkbox');
div2.appendChild(check2);
let check3 = document.createElement('input');
check3.setAttribute('type', 'checkbox');
div3.appendChild(check3);
document.body.append(div1, div2, div3);

check1.onclick = function () {
    if (check1.checked) {
        console.log(usersWithAddress.filter(value => value.status === false));
    }
}
check2.onclick=function () {
    if (check2.checked){
        console.log(usersWithAddress.filter(value => value.age>=29));
    }
}
check3.onclick=function () {
    if (check3.checked){
        console.log(usersWithAddress.filter(value => value.address.city==='Kyiv'));
    }
}

