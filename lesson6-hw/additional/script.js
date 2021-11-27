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


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let emailvalidator = (email) => {
    let d = email.indexOf('@');
    let p = email.indexOf('.', d + 1);
    if (d > 0) {
        console.log('равлик присутній та данні до нього також присутні');
        console.log(point(d, p));
    } else if (d === -1) {
        console.log('равлик відсутній');
    } else {
        console.log('равлик присутній але данні до нього відсутні');
        console.log(point(d, p));
    }

    function point(symbol, point) {
        if (point <= symbol + 2) {
            return 'крапка знаходиться ближче ніж 2 символ після равлика';
        } else {
            return 'крапка знаходиться далі ніж 2 символ після равлика';
        }
    }
}

emailvalidator('@i.ua');


// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let res = [];
let cutstring = (cutstr, a) => {
    let array = cutstr.split(' ');
    for (let i = 0; i < a; i++) {
        res[i] = array[i];
    }
    console.log(res.join(' '));
}
cutstring("Сила тяжести приложена к центру масс тела", 3);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let n = 0;
let k = 0;
let find = (string, search) => {
    while (string.includes(search) === true) {
        n = string.indexOf(search);
        k++;
        string = string.slice(n + 1);
    }
    console.log(k);
}
find("Астрономия это наука о небесных объектах", 'о');