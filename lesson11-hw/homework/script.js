// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let form = document.createElement('form');
form.innerText = 'Enter name and age';
let inputName = document.createElement('input');
let inputAge = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Submit';
document.body.append(form, button);
form.append(inputName, inputAge);

button.onclick = function () {
    console.log(inputName.value);
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('age', inputAge.value);
}


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let formCar = document.createElement('form');
formCar.innerText = 'Enter model, type and volume of the car';
let inputModel = document.createElement('input');
let inputType = document.createElement('input');
let inputVolume = document.createElement('input');
let button2 = document.createElement('button');
button2.innerText = 'Submit';
document.body.append(formCar, button2);
formCar.append(inputModel, inputType, inputVolume);

button2.onclick = function () {
    localStorage.setItem('car', JSON.stringify([{'Model': inputModel.value}, {'Type': inputType.value}, {'Volume': inputVolume.value}]));
}
