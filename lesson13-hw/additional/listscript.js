let array = Object.keys(localStorage);
let buttonClear = document.createElement('button');
let buttonReturn = document.createElement('button');
buttonClear.innerText = 'Delete all products';
buttonReturn.innerText = 'Return to adding products';
document.body.append(buttonReturn, buttonClear);
buttonClear.style.fontSize = '20px';
buttonReturn.style.fontSize = '20px';
buttonClear.style.display = 'none';
buttonReturn.style.width = '40%';
buttonClear.style.width = '40%';
buttonClear.style.marginLeft = '3%';
buttonReturn.style.marginLeft = '8%';

if (array.length) {
    buttonClear.style.display = 'inline';
} else {
    buttonReturn.style.width = '90%';
}

buttonReturn.onclick = function () {
    document.location = 'index.html';
}

let div = document.createElement('div');
div.style.display = 'flex';
div.style.flexWrap = 'wrap';
div.style.columnGap = '10px';
div.style.rowGap = '10px';
div.style.marginTop = '20px';
div.style.marginLeft = '7%';
document.body.appendChild(div);

for (const item of array) {
    let parse = JSON.parse(localStorage.getItem(item));
    let itemdiv = document.createElement('div');
    let name = document.createElement('h2');
    let quantity = document.createElement('h2');
    let price = document.createElement('h2');
    let image = document.createElement('img');
    let delButton = document.createElement('button');
    delButton.innerText = 'Delete product';
    itemdiv.style.width = '30%';
    itemdiv.style.border = '1px solid black';
    itemdiv.style.borderRadius = '5px';
    itemdiv.style.display = 'flex';
    itemdiv.style.flexDirection = 'column';
    itemdiv.style.alignItems = 'center';
    image.style.width = '90%';
    image.style.height = '200px';
    div.appendChild(itemdiv);
    itemdiv.append(name, quantity, price, image, delButton);
    name.innerText = item;
    name.style.margin = '5px';
    quantity.style.margin = '5px';
    price.style.margin = '5px';
    quantity.innerText = 'Qty - ' + parse.quantity;
    price.innerText = 'Price: ' + parse.price;
    image.src = parse.image;
    delButton.style.margin = '5px';
    delButton.onclick = function () {
        localStorage.removeItem(item);
        itemdiv.style.display = 'none';
        let array3 = Object.keys(localStorage);
        if (!array3.length) {
            buttonClear.style.display = 'none';
            buttonReturn.style.width = '90%';
        }
    }
}

buttonClear.onclick = function () {
    let array2 = Object.keys(localStorage);
    for (const item of array2) {
        localStorage.removeItem(item);
    }
    document.location.reload();
}