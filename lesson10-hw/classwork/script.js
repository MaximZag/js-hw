// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1=document.createElement('form');
form1.setAttribute('name','form1');
let form2=document.createElement('form');
form2.setAttribute('name','form2');
let input1=document.createElement('input');
input1.setAttribute('name','input1');
let input2=document.createElement('input');
input2.setAttribute('name','input2');
let input3=document.createElement('input');
input3.setAttribute('name','input3');
let input4=document.createElement('input');
input4.setAttribute('name','input4');
let button=document.createElement('button');
button.id='but';
button.innerText='Submit';

document.body.append(form1,form2, button);
form1.append(input1,input2);
form2.append(input3,input4);

button.onclick=function () {
    console.log(input1.value +' - '+input2.value);
    console.log(input2.value +' - '+input3.value);
}



//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
