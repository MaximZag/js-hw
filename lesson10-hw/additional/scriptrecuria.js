//     *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
let butforward = document.createElement('button');
let butback = document.createElement('button');
butforward.innerText = 'Forward';
butforward.style.fontSize = '30px';
butback.innerText = 'Back';
butback.style.fontSize = '30px';
butback.style.marginTop = '20px';
document.body.append(butforward, butback);
let array = [];

function reCall(startElement) {

    if (startElement.children.length) {
        for (const element of startElement.children) {
            array.push(element);
            reCall(element);
        }
    }
}

reCall(document.getElementById('wrap'));

let i = 0;
console.log(array[i]);
butback.style.display = 'none';

butforward.onclick = function () {
    i++;
    console.log(array[i]);

    if (i === array.length - 1) {
        butforward.style.display = 'none';
    } else {
        butback.style.display = 'block';
    }
}
butback.onclick = function () {
    i--;
    console.log(array[i]);

    if (i === 0) {
        butback.style.display = 'none';
    } else {
        butback.style.display = 'block';
        butforward.style.display = 'block';
    }
}
