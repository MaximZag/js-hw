// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let cont = document.createElement('div');
document.body.appendChild(cont);
cont.style.display='flex';
cont.style.flexWrap='wrap';
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement('div');
            div.style.width = '19%';
            div.style.border='1px solid black';
            cont.appendChild(div);
            Object.entries(post).forEach(([key, value]) => {
                let objectDiv = document.createElement('div');
                objectDiv.innerText = `${key}: ${value}`;
                objectDiv.style.borderBottom='1px solid red';
                div.appendChild(objectDiv);
            });
        }
    });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments