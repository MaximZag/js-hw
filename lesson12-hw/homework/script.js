// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let cont = document.createElement('div');
document.body.appendChild(cont);
cont.style.display='flex';
cont.style.flexWrap='wrap';
cont.style.columnGap='3px';
cont.style.rowGap='3px';
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement('div');
            div.style.width = '18%';
            div.style.border='1px solid black';
            div.style.borderRadius='5px';
            div.style.padding='2px';
            cont.appendChild(div);
            Object.entries(post).forEach(([key, value]) => {
                let objectDiv = document.createElement('div');
                objectDiv.innerText = `${key}: ${value}`;
                objectDiv.style.border='1px solid red';
                objectDiv.style.textAlign='center';
                objectDiv.style.margin='2px';
                objectDiv.style.borderRadius='5px';
                div.appendChild(objectDiv);
            });
        }
    });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


let contain = document.createElement('div');
document.body.appendChild(contain);
contain.style.display='flex';
contain.style.flexWrap='wrap';
contain.style.columnGap='3px';
contain.style.rowGap='3px';
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            let divComment = document.createElement('div');
            divComment.style.width = '30%';
            divComment.style.border='1px solid black';
            divComment.style.borderRadius='5px';
            divComment.style.padding='2px';
            contain.appendChild(divComment);
            Object.entries(comment).forEach(([key, value]) => {
                let commentDiv = document.createElement('div');
                commentDiv.innerText = `${key}: ${value}`;
                commentDiv.style.border='1px solid green';
                commentDiv.style.textAlign='center';
                commentDiv.style.margin='2px';
                commentDiv.style.borderRadius='5px';
                divComment.appendChild(commentDiv);
            });
        }
    });