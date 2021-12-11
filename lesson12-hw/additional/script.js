// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let cont = document.createElement('div');
document.body.append(cont);
cont.style.display = 'flex';
cont.style.flexWrap = 'wrap';
cont.style.columnGap = '3px';
cont.style.rowGap = '3px';
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.style.width = '90%';
            div.style.border = '1px solid black';
            div.style.borderRadius = '5px';
            div.style.display = 'flex';
            div.style.flexDirection = 'column';
            div.style.alignItems = 'center';
            cont.appendChild(div);
            let h2 = document.createElement('h2');
            h2.innerText = `${user.name}`;
            let button = document.createElement('button');
            let buttonHide = document.createElement('button');
            button.innerText = 'Show posts';
            buttonHide.innerText = 'Hide posts';
            buttonHide.style.display = 'none';
            button.style.marginBottom = '10px';
            buttonHide.style.marginBottom = '10px';
            div.append(h2, button, buttonHide);

            let userDiv = document.createElement('div');
            div.appendChild(userDiv);
            userDiv.style.display = 'none';

            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(posts => {
                    for (const post of posts) {
                        if (post.userId === user.id) {
                            let postdiv = document.createElement('div');
                            postdiv.style.border = '1px solid green';
                            postdiv.style.borderRadius = '5px';
                            postdiv.style.marginBottom = '5px';
                            let postdivTitle = document.createElement('h2');
                            let postdivBody = document.createElement('h2');
                            let postbutton = document.createElement('button');
                            let postHidebutton = document.createElement('button');
                            postbutton.innerText = 'Show comments';
                            postHidebutton.innerText = 'Hide comments';
                            postHidebutton.style.display = 'none';
                            postbutton.style.marginLeft = '45%';
                            postHidebutton.style.marginLeft = '45%';
                            postbutton.style.marginBottom = '5px';
                            postdivTitle.innerText = `${post.title.toUpperCase()}`;
                            postdivTitle.style.borderBottom = '1px solid blue';
                            postdivTitle.style.textAlign = 'center';
                            postdivBody.innerText = `${post.body}`;
                            postdivBody.style.marginLeft='10px';
                            userDiv.appendChild(postdiv);
                            postdiv.append(postdivTitle, postdivBody, postbutton, postHidebutton);

                            let comAlldiv = document.createElement('div');
                            postdiv.appendChild(comAlldiv);
                            comAlldiv.style.display = 'none';

                            fetch('https://jsonplaceholder.typicode.com/comments')
                                .then(value => value.json())
                                .then(comments => {
                                    for (const comment of comments) {
                                        if (comment.postId === post.id) {
                                            let commentdiv = document.createElement('div');
                                            let commentName = document.createElement('h2');
                                            let commentBody = document.createElement('h2');
                                            commentName.style.fontSize = '15px';
                                            commentName.style.textAlign = 'center';
                                            commentBody.style.fontSize = '10px';
                                            commentBody.style.marginLeft='10px';
                                            commentName.innerText = `${comment.name} (${comment.email})`;
                                            commentBody.innerText = `${comment.body}`;
                                            comAlldiv.appendChild(commentdiv);
                                            commentdiv.append(commentName, commentBody);
                                        }
                                    }
                                });
                            postbutton.onclick = function () {
                                postbutton.style.display = 'none';
                                postHidebutton.style.display = 'block';
                                comAlldiv.style.display = 'block';
                            }
                            postHidebutton.onclick = function () {
                                comAlldiv.style.display = 'none';
                                postHidebutton.style.display = 'none';
                                postbutton.style.display = 'block';
                            }
                        }
                    }
                });
            button.onclick = function () {
                button.style.display = 'none';
                userDiv.style.display = 'block';
                buttonHide.style.display = 'block';
            }
            buttonHide.onclick = function () {
                buttonHide.style.display = 'none';
                userDiv.style.display = 'none';
                button.style.display = 'block';
            }
        }
    });

