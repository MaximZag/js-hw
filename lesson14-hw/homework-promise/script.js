function wakeup(iswakeup) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (iswakeup) {
                resolve('1 Я проснулся');
            }
        }, 3000)
    })
}

function wash(iswash) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (iswash) {
                resolve('2 Я умылся');
            }
        }, 2000)
    })
}

function touth(istouth) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (istouth) {
                resolve('3 Я почистил зубы');
            }
        }, 500)
    })
}

function dress(isdress) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (isdress) {
                resolve('4 Я оделся');
            }
        }, 1000)
    })
}

function breakfast(iseat) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (iseat) {
                resolve('5 Я позавтракал');
            }
        }, 800)
    })
}

function gowork(iswork) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (iswork) {
                resolve('6 Я пошел на работу');
            }
        }, 200)
    })
}

function lunch(islunch) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (islunch) {
                resolve('7 Я пообедал');
            }
        }, 100)
    })
}

function gohome(ishome) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (ishome) {
                resolve('8 Я пошел домой');
            }
        }, 900)
    })
}

function dinner(isdinner) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (isdinner) {
                resolve('9 Я поужинал');
            }
        }, 2000)
    })
}

function sleep(issleep) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (issleep) {
                resolve('10 Я пошел спать');
            }
        }, 2000)
    })
}

wakeup(true)
    .then(result => {
        console.log(result);
        return wash(true)
    })
    .then(result => {
        console.log(result);
        return touth(true)
    })
    .then(result => {
        console.log(result);
        return dress(true)
    })
    .then(result => {
        console.log(result);
        return breakfast(true)
    })
    .then(result => {
        console.log(result);
        return gowork(true)
    })
    .then(result => {
        console.log(result);
        return lunch(true)
    })
    .then(result => {
        console.log(result);
        return gohome(true)
    })
    .then(result => {
        console.log(result);
        return dinner(true)
    })
    .then(result => {
        console.log(result);
        return sleep(true)
    })
    .then(result => {
        console.log(result)
    });

