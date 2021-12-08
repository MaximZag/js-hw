// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'ulya', age: 31, status: false},
    {name: 'den', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


let contain = document.createElement('div');
document.body.appendChild(contain);
contain.style.display = 'flex';
contain.style.flexWrap = 'wrap';
for (const user of users) {
    let div = document.createElement('div');
    let button = document.createElement('button');
    let removebutton = document.createElement('button');
    button.innerText = 'Add to favorites';
    removebutton.innerText = 'Remove from favorites';
    button.style.marginTop = '10px';
    removebutton.style.marginTop = '10px';
    removebutton.style.display = 'none';
    div.style.width = '60%';
    div.style.fontSize = '20px';
    contain.append(div, button, removebutton);
    div.style.marginTop = '10px';
    div.innerText = user.name + ' ' + user.age + 'age ' + user.status;

    button.onclick = function () {
        localStorage.setItem(user.name, JSON.stringify(user));
        button.style.display = 'none';
        removebutton.style.display = 'block';
        div.style.color = 'red';
    }
    removebutton.onclick = function () {
        let array2 = Object.keys(localStorage);
        for (const item of array2) {
            if (JSON.parse(localStorage.getItem(item)).name === user.name) {
                localStorage.removeItem(item);
                removebutton.style.display = 'none';
                button.style.display = 'block';
                div.style.color = 'black';
            }
        }
    }
}
