let array = Object.keys(localStorage);
console.log(array);
document.write('Products:');
    let div = document.createElement('div');
    document.body.appendChild(div);
for (const item of array) {
    let parse = JSON.parse(localStorage.getItem(item));
    let itemdiv=document.createElement('div');
    let name=document.createElement('h2');
    let quantity=document.createElement('h2');
    let price=document.createElement('h2');
    let image=document.createElement('img');
    div.appendChild(itemdiv);
    itemdiv.append(name, quantity, price,image);
    // div.style.marginTop = '10px';
    console.log(parse);
    console.log(parse.quantity);
    name.innerText = item;
    quantity.innerText= parse.quantity;
    price.innerText= parse.price;
    image.src=parse.image;

}