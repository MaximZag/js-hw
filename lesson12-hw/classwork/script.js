// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


let cont = document.createElement('div');
document.body.appendChild(cont);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement('div');
            let title = document.createElement('h2');
            let button1 = document.createElement('button');
            let button2 = document.createElement('button');
            div.style.border = '1px solid black';
            div.style.borderRadius = '5px';
            div.style.marginBottom = '3px';
            div.style.display = 'flex';
            div.style.flexDirection = 'column';
            div.style.alignItems = 'center';
            title.innerText = `${post.id} - ${post.title}`;
            title.style.borderBottom = '1px solid red';
            title.style.padding = '3px';
            button1.innerText = 'Show';
            button1.style.fontSize = '20px';
            button2.style.fontSize = '20px';
            button1.style.marginBottom = '3px';
            button2.innerText = 'Hide';
            button2.style.display = 'none';
            button2.style.marginBottom = '3px';
            cont.appendChild(div);
            div.append(title, button1, button2);
            let h2post = document.createElement('h2');
            h2post.style.margin='';
            div.appendChild(h2post);

            button1.onclick = function () {
                button1.style.display = 'none';
                button2.style.display = 'block';
                h2post.style.border = '1px solid green';
                h2post.style.borderRadius = '5px';
                h2post.style.padding = '3px';
                h2post.style.textAlign = 'center';
                h2post.innerText = `${post.body}`;
            }
            button2.onclick = function () {
                button2.style.display = 'none';
                button1.style.display = 'block';
                h2post.innerText = '';
                h2post.style.border = '';
            }
        }
    });