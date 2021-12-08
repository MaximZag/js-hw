let array = Object.keys(localStorage);
document.write('Favorites:');
for (const item of array) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.style.marginTop = '10px';
    let parse = JSON.parse(localStorage.getItem(item));
    div.innerText = parse.name + ' ' + parse.age + ' ' + parse.status;
    div.style.fontSize = '20px';
}

