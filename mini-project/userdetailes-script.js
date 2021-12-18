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
div.style.rowGap = '5px';
div.style.background='cornflowerblue';
div.style.borderRadius='10px';

let user = JSON.parse(localStorage.getItem(localStorage.key(0)));

function recall(userObject) {
    for (const key in userObject) {
        let keydiv = document.createElement('div');

        div.appendChild(keydiv);
        if (typeof userObject[key] === 'object') {
            keydiv.innerText = `${key.toUpperCase()}`;
            keydiv.style.borderBottom = '2px solid black'
            keydiv.style.fontSize = '20px';
            recall(userObject[key])
        } else {
            keydiv.innerText = `${key.toUpperCase()} : ${userObject[key]}`
            keydiv.style.fontSize = '20px';
            keydiv.style.borderRadius = '5px';
            keydiv.style.background = 'light gray';
        }
    }
}

recall(user);

let postbutton = document.createElement('button');

postbutton.innerText = 'Posts of current user';
postbutton.style.width = '50%';
postbutton.style.fontSize = '20px';
postbutton.style.borderRadius = '10px';
postbutton.style.marginTop = '50px';
div.appendChild(postbutton);
let postsdiv = document.createElement('div');
postsdiv.style.display = 'flex';
postsdiv.style.flexWrap = 'wrap';
postsdiv.style.columnGap='10px';
postsdiv.style.rowGap='10px';
postsdiv.style.justifyContent='center';
postsdiv.style.margin='30px 0';
div.appendChild(postsdiv);


postbutton.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                if (post.userId === user.id) {
                    let posttitle = document.createElement('div');
                    let title = document.createElement('div');
                    let titlebutton = document.createElement('button');
                    posttitle.style.width = '17%';
                    posttitle.style.border = '1px solid black';
                    posttitle.style.borderRadius = '8px';
                    posttitle.style.padding = '5px';
                    posttitle.style.textAlign = 'center';
                    posttitle.style.background='yellow';
                    title.style.height='80px';
                    title.innerText = `${post.title.toUpperCase()}`;
                    titlebutton.innerText = 'Post Details';
                    postsdiv.appendChild(posttitle);
                    posttitle.append(title, titlebutton);
                }
            }
        });
}