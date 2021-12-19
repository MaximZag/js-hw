// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let div = document.createElement('div');
document.body.appendChild(div);
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';
div.style.marginTop = '10px';
div.style.paddingTop = '10px';
div.style.background = 'aliceblue';
div.style.borderRadius = '10px';

let user = JSON.parse(localStorage.getItem('user'));

function recall(userObject, append) {
    for (const key in userObject) {
        if (typeof userObject[key] === 'object') {
            let objectdiv = document.createElement('div');
            objectdiv.innerText = `${key.toUpperCase()}`;
            objectdiv.style.border = '1px solid black'
            objectdiv.style.borderRadius = '5px';
            objectdiv.style.padding = '5px 20px';
            objectdiv.style.display = 'flex';
            objectdiv.style.alignItems = 'center';
            objectdiv.classList.add(`${key}`);
            objectdiv.style.fontSize = '25px';
            append.appendChild(objectdiv);
            recall(userObject[key], objectdiv);
        } else {
            let keydiv = document.createElement('div');
            keydiv.innerText = `${key.toUpperCase()} : ${userObject[key]}`
            keydiv.classList.add(`${key}`);
            keydiv.style.fontSize = '20px';
            keydiv.style.borderRadius = '5px';
            keydiv.style.padding = '5px';
            keydiv.style.border = '1px solid brown';
            keydiv.style.margin = '5px';
            keydiv.style.background = 'light gray';
            append.appendChild(keydiv);
        }
    }
}

recall(user, div);

let postbutton = document.createElement('button');
let hidepost = document.createElement('button');
postbutton.innerText = 'Posts of current user';
hidepost.innerText = 'Hide posts';
hidepost.style.display = 'none';

function stylebuttons(button) {
    button.style.width = '50%';
    button.style.fontSize = '20px';
    button.style.borderRadius = '10px';
    button.style.margin = '20px 0';
}

stylebuttons(postbutton);
stylebuttons(hidepost);

div.append(postbutton, hidepost);

let postsdiv = document.createElement('div');
postsdiv.style.display = 'flex';
postsdiv.style.flexWrap = 'wrap';
postsdiv.style.columnGap = '10px';
postsdiv.style.rowGap = '10px';
postsdiv.style.justifyContent = 'center';
postsdiv.style.marginBottom = '30px';
postsdiv.style.display = 'none';
div.appendChild(postsdiv);

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
            let posttitle = document.createElement('div');
            let title = document.createElement('div');
            let titlebutton = document.createElement('button');
            posttitle.style.width = '17%';
            posttitle.style.border = '1px solid black';
            posttitle.style.borderRadius = '8px';
            posttitle.style.padding = '5px';
            posttitle.style.textAlign = 'center';
            posttitle.style.background = 'antiquewhite';
            title.style.height = '80px';
            title.innerText = `${post.title.toUpperCase()}`;
            titlebutton.innerText = 'Post Details';
            postsdiv.appendChild(posttitle);
            posttitle.append(title, titlebutton);

            titlebutton.onclick = function () {
                localStorage.setItem(`post`, JSON.stringify(post))
                document.location = 'post-details.html';
            }
        }

    });

postbutton.onclick = function () {
    postbutton.style.display = 'none';
    hidepost.style.display = 'block';
    postsdiv.style.display = 'flex';
}

hidepost.onclick = function () {
    postbutton.style.display = 'block';
    hidepost.style.display = 'none';
    postsdiv.style.display = 'none';
}