// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

let container = document.createElement('div');
document.body.appendChild(container);
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.rowGap = '5px';
container.style.columnGap = '5px';
container.style.justifyContent='center';
container.style.background='aliceblue';
container.style.padding='20px';
container.style.borderRadius='5px';
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userdiv = document.createElement('div');
            let username = document.createElement('div');
            let userbutton = document.createElement('button');
            username.innerText = user.id + ':' + user.name;
            username.style.fontSize='20px';
            username.style.margin='10px';
            userbutton.innerText = 'User Details';
            userbutton.style.margin='5px';
            userdiv.style.width='45%';
            userdiv.style.border='1px solid black';
            userdiv.style.borderRadius='5px';
            userdiv.style.background='antiquewhite';
            userdiv.style.display='flex';
            userdiv.style.flexDirection='column';
            userdiv.style.alignItems='center';
            container.appendChild(userdiv);
            userdiv.append(username, userbutton);

            userbutton.onclick= function () {
                localStorage.setItem(`user`, JSON.stringify(user))
                document.location='user-details.html';
            }
        }
    });