// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let array = document.getElementsByTagName('h2');
let block = document.createElement('div');
block.id = 'content';
let ul = document.createElement('ul');
document.body.appendChild(block);
block.appendChild(ul);
for (const item of array) {
    let li = document.createElement('li');
    li.innerText = item.innerText;
    ul.appendChild(li);
}
