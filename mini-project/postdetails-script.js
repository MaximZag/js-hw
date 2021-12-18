// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let postcontainer = document.createElement('div');
document.body.appendChild(postcontainer);


let post = JSON.parse(localStorage.getItem('post'));
for (const key in post) {
    let div = document.createElement('div');
    div.innerText = key + ' : ' + post[key];
    postcontainer.appendChild(div);
}

let button = document.createElement('button');
button.innerText = 'Show Comments';
postcontainer.appendChild(button);

let commentblock = document.createElement('div');
document.body.appendChild(commentblock);
commentblock.style.display='flex';
commentblock.style.flexWrap='wrap';

button.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            for (const comment of comments) {
            let commentdiv = document.createElement('div');
            commentblock.appendChild(commentdiv);
            commentdiv.style.width='23%';
            commentdiv.style.border='1px solid black';
                for (const key in comment) {
                    if (key === 'name' || key === 'email' || key === 'body') {
                        let keydiv = document.createElement('div');
                        keydiv.innerText = comment[key];
                        commentdiv.appendChild(keydiv);
                    }
                }
            }
        });
}