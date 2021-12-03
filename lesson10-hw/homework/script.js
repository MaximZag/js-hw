// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let p = document.getElementById('text');
let dis = document.getElementById('dis');
dis.onclick = function () {
    p.innerText = '';
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let dis2 = document.getElementById('dis2');
dis2.onclick = function () {
    dis2.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let but = document.getElementById('but');
but.onclick = function () {
    let age = document.getElementById('age').value;
    if (age && age < 18) {
        document.write('The age is lower then 18');
    } else if (age && age >= 18) {
        document.write('Welcome!!');
    } else {
        document.write('Enter your age');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementById('menu');
menu.onclick = function () {
    let ul = document.getElementById('ul');
    if (ul.className === 'on') {
        ul.style.display = 'none';
        ul.className = 'off';
    } else {
        ul.style.display = 'block';
        ul.className = 'on';
    }

}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let list = [
    {title: 'Max', body: 'Comment 1'},
    {title: 'Dima', body: 'Comment 2'},
    {title: 'Vasya', body: 'Comment 3'},
    {title: 'Katya', body: 'Comment 4'},
    {title: 'Olya', body: 'Comment 5'},
];

for (const listElement of list) {
    let div = document.createElement('div');
    div.innerText = `${listElement.title}:`;
    let com = document.createElement('p');
    com.innerText = `${listElement.body}`;
    let btn = document.createElement('button');
    btn.innerText = 'Hide';
    let hr = document.createElement('hr');
    document.body.appendChild(div);
    div.append(com, btn, hr);
    btn.onclick = function () {
        if (com.style.display !== 'none') {
            com.style.display = 'none';
            btn.innerText = 'Show';
        } else {
            com.style.display = 'block';
            btn.innerText = 'Hide';
        }

    }
}

