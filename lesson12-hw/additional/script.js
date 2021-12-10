// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let cont = document.createElement('div');
document.body.append(cont);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            cont.appendChild(div);
            let h2 = document.createElement('h2');
            h2.innerText = `${user.name}`;
            let button = document.createElement('button');
            button.innerText = 'Show';
            div.append(h2, button);
            button.onclick = function () {
                Object.entries(user).forEach(([key, value]) => {
                    if (typeof value === 'object') {
                        let div2 = document.createElement('div');
                        div2.innerText = `${key}`;
                        div2.style.border='1px solid green';
                        div2.style.borderRadius='5px';
                        let button2 = document.createElement('button');
                        button2.innerText = 'Show';
                        div.appendChild(div2);
                        div2.appendChild(button2);
                        button2.onclick = function () {
                                Object.entries(value).forEach(([key1, value1]) => {
                                    if (typeof value1==='object'){
                                        let div4=document.createElement('div');
                                        div4.innerText=`${key1}`;
                                        div4.style.border='1px solid green';
                                        div4.style.borderRadius='5px';
                                        let button3 = document.createElement('button');
                                        button3.innerText = 'Show';
                                        div2.appendChild(div4);
                                        div4.appendChild(button3);
                                        button3.onclick=function () {
                                            Object.entries(value1).forEach(([key2, value2]) => {
                                                let div5=document.createElement('div');
                                                div5.innerText=`${key2}: ${value2}`;
                                                div4.appendChild(div5);
                                        });
                                        }
                                    }else {
                                        let div3 = document.createElement('div');
                                        div3.innerText = `${key1}: ${value1}`;
                                        div2.appendChild(div3);
                                    }
                                });
                        }

                    } else {
                        let userDiv = document.createElement('div');
                        userDiv.innerText = `${key}: ${value}`;
                        userDiv.style.border = '1px solid green';
                        userDiv.style.textAlign = 'center';
                        userDiv.style.margin = '2px';
                        userDiv.style.borderRadius = '5px';
                        div.appendChild(userDiv);
                    }
                });
            }


        }
    });