let divcontainer = document.createElement('div');
divcontainer.style.width = '1170px';
document.body.appendChild(divcontainer);
let image1 = document.createElement('img');
let image2 = document.createElement('img');
let image3 = document.createElement('img');
let imageleft = document.createElement('img');
let imageright = document.createElement('img');
image1.src = "1.png";
image2.src = "2.png";
image3.src = "3.png";
image1.style.position = 'absolute';
image2.style.position = 'absolute';
image3.style.position = 'absolute';
image2.style.display = 'none';
image3.style.display = 'none';
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
divcontainer.append(image1, image2, image3, imageleft, imageright);
let array = [image1, image2, image3];

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
