// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


function wakeup(iswakeup, callback) {
    setTimeout(() => {
        if (iswakeup) {
            console.log('1 Я проснулся');
            callback(true, touth);
        }
    }, 3000)
}

function wash(iswash, callback) {
    setTimeout(() => {
        if (iswash) {
            console.log('2 Я умылся');
            callback(true, dress);
        }
    }, 2000)
}

function touth(istouth, callback) {
    setTimeout(() => {
        if (istouth) {
            console.log('3 Я почистил зубы');
            callback(true, breakfast);
        }
    }, 500)
}

function dress(isdress, callback) {
    setTimeout(() => {
        if (isdress) {
            console.log('4 Я оделся');
            callback(true, gowork);
        }
    }, 1000)
}

function breakfast(iseat, callback) {
    setTimeout(() => {
        if (iseat) {
            console.log('5 Я позавтракал');
            callback(true, lunch);
        }
    }, 800)
}

function gowork(iswork, callback) {
    setTimeout(() => {
        if (iswork) {
            console.log('6 Я пошел на работу');
            callback(true, gohome);
        }
    }, 200)
}

function lunch(islunch, callback) {
    setTimeout(() => {
        if (islunch) {
            console.log('7 Я пообедал');
            callback(true, dinner);
        }
    }, 100)
}

function gohome(ishome, callback) {
    setTimeout(() => {
        if (ishome) {
            console.log('8 Я пошел домой');
            callback(true, sleep);
        }
    }, 900)
}

function dinner(isdinner, callback) {
    setTimeout(() => {
        if (isdinner) {
            console.log('9 Я поужинал');
            callback(true);
        }
    }, 2000)
}

function sleep(issleep) {
    setTimeout(() => {
        if (issleep) {
            console.log('10 Я пошел спать');
        }
    }, 400)
}

wakeup(true, wash);
