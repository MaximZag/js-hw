// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


let resstr=[];
let cutString = (str, n) => {
    while (str.length) {
        resstr.push(str.substr(0, n))
        str = str.slice(n)
    }
    console.log(resstr)
};
cutString('наслаждение', 4);