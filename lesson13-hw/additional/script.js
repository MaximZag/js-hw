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

// let form = document.createElement('form');
let namediv = document.createElement('div');
let quandiv = document.createElement('div');
let pricediv = document.createElement('div');
let imagediv = document.createElement('div');
let inputName = document.createElement('input');
let inputQuantity = document.createElement('input');
let inputPrice = document.createElement('input');
let inputImage = document.createElement('input');
let button = document.createElement('button');
let link = document.createElement('button');
let h2name = document.createElement('h2');
let h2quantity = document.createElement('h2');
let h2price = document.createElement('h2');
let h2image = document.createElement('h2');
link.innerText = 'Proceed to catalog';
link.style.fontSize = '20px';
button.style.fontSize = '20px';
button.innerText = 'Submit';
button.style.display = 'block';
h2name.innerText = 'Enter Name';
inputName.style.fontSize = '20px';
inputQuantity.style.fontSize = '20px';
inputPrice.style.fontSize = '20px';
inputImage.style.fontSize = '20px';
// inputImage.style.width='50%';
h2quantity.innerText = 'Enter Quantity';
h2price.innerText = 'Enter Price';
h2image.innerText = 'Enter link to image';
h2name.style.textAlign = 'center';
h2quantity.style.textAlign = 'center';
h2price.style.textAlign = 'center';
h2image.style.textAlign = 'center';
button.style.marginTop = '20px';
link.style.marginTop = '100px';
link.style.width = '50%';
imagediv.style.width = '70%';
inputImage.style.width = '100%';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';


document.body.append(namediv, quandiv, pricediv, imagediv, button, link);
namediv.append(h2name, inputName);
quandiv.append(h2quantity, inputQuantity);
pricediv.append(h2price, inputPrice);
imagediv.append(h2image, inputImage);

link.onclick = function () {
    document.location = 'list.html';
}

button.onclick = function () {
    if (inputName.value === '' || inputQuantity.value === '' || inputPrice.value === '' || inputImage.value === '') {
        alert('Enter values in all fields before submitting');
    } else {
        localStorage.setItem(`${inputName.value}`, JSON.stringify({
            'quantity': inputQuantity.value,
            'price': inputPrice.value,
            'image': inputImage.value
        }));
        inputName.value = '';
        inputQuantity.value = '';
        inputPrice.value = '';
        inputImage.value = '';
    }
}