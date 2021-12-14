let array = Object.keys(localStorage);
    let buttonClear=document.createElement('button');
    buttonClear.innerText='Delete all products';
    document.body.appendChild(buttonClear);
    buttonClear.style.width='50%';
    buttonClear.style.fontSize='20px';
    buttonClear.style.display='none';
    let div = document.createElement('div');
    div.style.display='flex';
    div.style.flexWrap='wrap';
    document.body.appendChild(div);
    if (array.length){
        buttonClear.style.display='block';
    }

for (const item of array) {
    let parse = JSON.parse(localStorage.getItem(item));
    let itemdiv=document.createElement('div');
    let name=document.createElement('h2');
    let quantity=document.createElement('h2');
    let price=document.createElement('h2');
    let image=document.createElement('img');
    itemdiv.style.width='30%';
    image.style.width='300px';
    div.appendChild(itemdiv);
    itemdiv.append(name, quantity, price,image);
    name.innerText = item;
    quantity.innerText= 'Qty - '+ parse.quantity;
    price.innerText= 'Price: '+ parse.price;
    image.src=parse.image;

}

buttonClear.onclick=function () {
    let array2=Object.keys(localStorage);
    for (const item of array2) {
        localStorage.removeItem(item);
    }
    document.location.reload();
}