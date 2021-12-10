// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let cont = document.createElement('div');
document.body.append(cont);
cont.style.display='flex';
cont.style.flexWrap='wrap';
cont.style.columnGap='3px';
cont.style.rowGap='3px';
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.style.width='24%';
            div.style.border='1px solid black';
            div.style.borderRadius='5px';
            div.style.display='flex';
            div.style.flexDirection='column';
            div.style.alignItems='center';
            cont.appendChild(div);
            let h2 = document.createElement('h2');
            h2.innerText = `${user.name}`;
            let button = document.createElement('button');
            let buttonHide = document.createElement('button');
            button.innerText = 'Show';
            buttonHide.innerText = 'Hide';
            buttonHide.style.display='none';
            button.style.marginBottom='10px';
            div.append(h2, button,buttonHide);
            button.onclick = function () {
                button.style.display='none';
                buttonHide.style.display='block';
                Object.entries(user).forEach(([key, value]) => {
                    if (typeof value === 'object') {
                        let div2 = document.createElement('div');
                        div2.innerText = `${key}`;
                        div2.style.border='1px solid green';
                        div2.style.borderRadius='5px';
                        div2.style.padding='10px';
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
                                        div4.style.padding='10px';
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
                                        div3.style.padding='10px';
                                        div2.appendChild(div3);
                                    }
                                });
                        }

                    } else {
                        let userDiv = document.createElement('div');
                        userDiv.innerText = `${key}: ${value}`;
                        userDiv.style.border = '1px solid green';
                        userDiv.style.textAlign = 'center';
                        userDiv.style.padding='10px';
                        userDiv.style.margin = '2px';
                        userDiv.style.borderRadius = '5px';
                        div.appendChild(userDiv);
                    }
                });
            }
            buttonHide.onclick=function () {
                div2.style.display='none';
                alert('123');
            }


        }
    });