// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacture, year, maxspeed, engine) {
    this.model = model;
    this.manufacture = manufacture;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.info = function () {
        for (let item in this) {
            if (typeof this[item] !== 'function') {
                console.log(`${item} - ${this[item]}`)
            }
        }
    }
    this.increaseMaxSpeed = function (newspeed) {
        this.maxspeed = this.maxspeed + newspeed;
        console.log(this.maxspeed);
    }
    this.changeyear = function (newyear) {
        this.year = newyear;
        console.log(this.year);
    }
    this.adddriver = function (driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

let car = new Car('Mazda', 'ManMazda', 2020, 200, 2.0);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeyear(2021);
car.adddriver({driver: 'Max', License: 2347475});
console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {
    constructor(model, manufacture, year, maxspeed, engine) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }

    info() {
        for (let item in this) {
            console.log(`${item} - ${this[item]}`)
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }

    changeYear(newyear) {
        this.year = newyear;
    }

    addDriver(driver) {
        this.driver=driver;
    }
}

let car2 = new Cars('Ford', 'ManFord', 2005, 180, 1.6);
car2.drive();
car2.info();
car2.increaseMaxSpeed(40);
car2.changeYear(2010);
car2.addDriver('Kolya');
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку