// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1 = document.createElement('form');
form1.setAttribute('name', 'form1');
form1.innerText = 'Form1'
let form2 = document.createElement('form');
form2.setAttribute('name', 'form2');
form2.style.marginTop = '15px';
form2.innerText = 'Form2'
let input1 = document.createElement('input');
input1.setAttribute('name', 'input1');
let input2 = document.createElement('input');
input2.setAttribute('name', 'input2');
let input3 = document.createElement('input');
input3.setAttribute('name', 'input3');
let input4 = document.createElement('input');
input4.setAttribute('name', 'input4');
let button = document.createElement('button');
button.id = 'but';
button.innerText = 'Submit';
button.style.marginTop = '15px';

document.body.append(form1, form2, button);
form1.append(input1, input2);
form2.append(input3, input4);

button.onclick = function () {
    console.log(input1.value + ' - ' + input2.value);
    console.log(input3.value + ' - ' + input4.value);
}


//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
div1.innerText = 'Rows';
div1.style.marginTop = '20px';
div2.innerText = 'Cells';
div2.style.marginTop = '20px';
div3.innerText = 'Values';
div3.style.marginTop = '20px';
let inputRow = document.createElement('input');
let inputCell = document.createElement('input');
let inputValue = document.createElement('input');
let buttonTable = document.createElement('button');
buttonTable.innerText = 'Submit';
buttonTable.style.marginTop = '20px';

document.body.append(div1, div2, div3, buttonTable);
div1.appendChild(inputRow);
div2.appendChild(inputCell);
div3.appendChild(inputValue);

buttonTable.onclick = function () {

    let table = document.createElement('table');
    document.body.appendChild(table);

    for (let i = 0; i < inputRow.value; i++) {
        let row = document.createElement('tr');
        row.style.border = '1px solid black';
        for (let j = 0; j < inputCell.value; j++) {
            let column = document.createElement('td');
            column.style.border = '1px solid black';
            row.appendChild(column);
            column.innerText = inputValue.value;
        }
        table.appendChild(row);
    }
}


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
let arrayMat = ['word1', 'word2', 'word3', 'word4', 'word5', 'word6'];
let divmat = document.createElement('div');
document.body.appendChild(divmat);
divmat.style.marginTop = '20px';
let inputMat = document.createElement('input');
let buttonMat = document.createElement('button');
buttonMat.innerText = 'Check the word';
divmat.append(inputMat, buttonMat);

buttonMat.onclick = function () {
    for (const word of arrayMat) {
        if (word === inputMat.value) {
            alert(`${word} is a very bad word`)
            inputMat.value = '';
            return;
        }
    }
    if (inputMat.value) {
        alert('This word is good!');
        inputMat.value = '';
    }
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let divmat1 = document.createElement('div');
document.body.appendChild(divmat1);
divmat1.style.marginTop = '20px';
let inputMat1 = document.createElement('input');
let buttonMat1 = document.createElement('button');
buttonMat1.innerText = 'Check the sentence';
divmat1.append(inputMat1, buttonMat1);

let k = 0;
buttonMat1.onclick = function () {
    let sentenceArray = inputMat1.value.split(' ');
    for (const word of sentenceArray) {
        for (const mat of arrayMat) {
            if (word === mat) {
                alert(`${word} is a very bad word`)
                k++;
            }
        }
    }
    if (inputMat1.value && k === 0) {
        alert('Bad words were not found');
        inputMat1.value = '';
    } else {

        alert('Search is complete');
        inputMat1.value = '';
    }
}
