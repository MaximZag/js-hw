let array = Object.keys(localStorage);
array.sort((a, b) => a - b);
document.write('Favorites:');
for (const item of array) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.style.marginTop = '10px';
    let parse = JSON.parse(localStorage.getItem(item));
    div.innerText = item + ' - ' + parse.name + ' ' + parse.age + ' ' + parse.status;
}

