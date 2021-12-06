let divcontainer = document.createElement('div');
divcontainer.style.width = '1170px';
document.body.appendChild(divcontainer);
let image1 = document.createElement('img');
let image2 = document.createElement('img');
let image3 = document.createElement('img');
let image4 = document.createElement('img');
let image5 = document.createElement('img');
let imageleft = document.createElement('img');
let imageright = document.createElement('img');

let array = [image1, image2, image3, image4, image5];
for (let i = 0; i < array.length; i++) {
    array[i].src = `${i + 1}.png`;
    array[i].style.position = 'absolute';
    array[i].style.display = 'none';
    array[i].style.width = '1170px';
    array[i].style.height = '780px';
    divcontainer.appendChild(array[i]);
}

imageleft.src = "left.png";
imageright.src = "right.png";
imageleft.style.width = '100px';
imageright.style.width = '100px';
imageleft.style.position = 'absolute';
imageright.style.position = 'absolute';
imageleft.style.top = '37%';
imageright.style.top = '37%';
imageleft.style.left = '30px';
imageright.style.left = '1050px';
imageleft.style.display = 'none';
divcontainer.append(imageleft, imageright);

image1.style.display = 'block';
let i = 0;
imageright.onclick = function () {
    i++;
    array[i].style.display = 'block';

    if (i !== 0) {
        imageleft.style.display = 'block';
    }
    if (i === array.length - 1) {
        imageright.style.display = 'none';
    }
}
imageleft.onclick = function () {
    i--;
    array[i + 1].style.display = 'none';
    if (i === 0) {
        imageleft.style.display = 'none';
        imageright.style.display = 'block';
    }
}
