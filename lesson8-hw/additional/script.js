// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let array = [];

function reCallClass(startElement) {

    if (startElement.children.length) {
        for (const element of startElement.children) {
            if (element.classList.length) {
                for (const elementElement of element.classList) {
                    array.push(elementElement);
                }
            }
            reCallClass(element);
        }
    }
}

console.log(array);
reCallClass(document.body);