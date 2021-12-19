// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let postcontainer = document.createElement('div');
postcontainer.style.background = 'aliceblue';
postcontainer.style.borderRadius = '10px';
document.body.appendChild(postcontainer);


let post = JSON.parse(localStorage.getItem('post'));

let div = document.createElement('div');
let title = document.createElement('div');
let body = document.createElement('div');
let button = document.createElement('button');
let hidebutton = document.createElement('button');
button.innerText = 'Show Comments';
hidebutton.innerText = 'Hide Comments';
hidebutton.style.display = 'none';
button.style.fontSize = '20px';
hidebutton.style.fontSize = '20px';
title.innerText = post.title.toUpperCase();
title.style.margin = '10px';
button.style.margin = '10px';
hidebutton.style.margin = '10px';
body.innerText = post.body;
postcontainer.appendChild(div);
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';
div.style.fontSize = '20px';
body.style.border = '1px solid black';
body.style.borderRadius = '10px';
body.style.background = 'antiquewhite';
body.style.padding = '20px';
div.append(title, body, button, hidebutton);


let commentblock = document.createElement('div');
postcontainer.appendChild(commentblock);
commentblock.style.display = 'flex';
commentblock.style.flexWrap = 'wrap';
commentblock.style.justifyContent = 'center';
commentblock.style.display = 'none';

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            let commentdiv = document.createElement('div');
            commentblock.appendChild(commentdiv);
            commentdiv.style.width = '20%';
            commentdiv.style.border = '1px solid black';
            commentdiv.style.borderRadius = '10px';
            commentdiv.style.margin = '10px';
            commentdiv.style.display = 'flex';
            commentdiv.style.flexDirection = 'column';
            commentdiv.style.alignItems = 'center';
            commentdiv.style.padding = '10px';
            commentdiv.style.background='mistyrose';
            for (const key in comment) {
                if (key === 'name' || key === 'email' || key === 'body') {
                    let keydiv = document.createElement('div');
                    keydiv.classList.add(`${key}`);
                    keydiv.innerText = comment[key].replaceAll('\n', ' ');
                    keydiv.style.textAlign = 'justify';
                    keydiv.style.margin = '10px';
                    commentdiv.appendChild(keydiv);
                }

            }
        }
        let name = document.getElementsByClassName('name');
        console.log(name);
        for (const nameElement of name) {
            nameElement.innerText = nameElement.innerText.toUpperCase();
        }
    });
button.onclick = function () {
    commentblock.style.display = 'flex';
    button.style.display = 'none';
    hidebutton.style.display = 'block';
}
hidebutton.onclick = function () {
    commentblock.style.display = 'none';
    button.style.display = 'block';
    hidebutton.style.display = 'none';
}