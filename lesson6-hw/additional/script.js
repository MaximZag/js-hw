// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


let resstr = [];
let cutString = (str, n) => {
    while (str.length) {
        resstr.push(str.substr(0, n))
        str = str.slice(n)
    }
    console.log(resstr)
};
cutString('наслаждение', 4);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let n = 0;
let k = 0;
// debugger
let find = (string, search) => {
    while (string.length) {
        n = string.indexOf(search);
        k++;
        string = string.slice(n+1);
    }
    console.log(n);
    console.log(string);
}
find("Астрономия это наука о небесных объектах", 'о');