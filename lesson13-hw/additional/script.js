// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.createElement('form');
let inputName = document.createElement('input');
let inputQuantity = document.createElement('input');
let inputPrice = document.createElement('input');
let inputImage = document.createElement('input');
let button = document.createElement('button');
let link=document.createElement('a');
link.setAttribute('href', 'list.html');
link.target= '_blank';
link.innerText='На сторінку товарів';
button.innerText = 'Submit';
document.body.append(form, button, link);
form.append(inputName, inputQuantity, inputPrice, inputImage);

button.onclick = function () {
    localStorage.setItem(`${inputName.value}`, JSON.stringify({'quantity': inputQuantity.value, 'price': inputPrice.value, 'image': inputImage.value}));
    inputName.value='';
    inputQuantity.value='';
    inputPrice.value='';
    inputImage.value='';
}