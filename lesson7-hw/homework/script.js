// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name,surname,email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let array=[];
array[0]= new User (1,'Max','Olimp','max@gmail.com','09933333');
array[1]=new User (2,'Lena','Lenova','lena@gmail.com', '099343343');
array[2]=new User (10,'Tom','Tomov','tom@gmail.com', '0993000887');
array[3]=new User (8,'Vitya','Vitev','vitya@gmail.com', '099343433573');
array[4]=new User(3,'Olya','Olenkova','olya@gmail.com', '09934356563');
array[5]=new User(7,'Stas','Stasov','stas@gmail.com', '0993439893');
array[6]=new User(6,'Jack','Jackovich','jack@gmail.com', '0993476763');
array[7]=new User(4,'Katya','Kateva','katya@gmail.com', '099343543');
array[8]=new User(5,'Tanya','Taneva','tanya@gmail.com', '09934321313');
array[9]=new User(9,'Evgen','Jenevich','evgen@gmail.com', '0993498989');

console.log(array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(array.filter(value => value.id%2===0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(array.sort((a, b)=> a.id-b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientarray=[];
    clientarray[0]=new Client(1,'Max','Olimp','max@gmail.com','09933333', [1,2,3,4]);
    clientarray[1]=new Client(2,'Lena','Lenova','lena@gmail.com', '099343343', [1,2]);
    clientarray[2]=new Client(10,'Tom','Tomov','tom@gmail.com', '0993000887', [1,2,3]);
    clientarray[3]=new Client(8,'Vitya','Vitev','vitya@gmail.com', '099343433573', [1,2,3,4,5]);
    clientarray[4]=new Client(3,'Olya','Olenkova','olya@gmail.com', '09934356563', [1,2,3,4,5,6]);
    clientarray[5]=new Client(7,'Stas','Stasov','stas@gmail.com', '0993439893', [1,3]);
    clientarray[6]=new Client(6,'Jack','Jackovich','jack@gmail.com', '0993476763', [1]);
    clientarray[7]=new Client(4,'Katya','Kateva','katya@gmail.com', '099343543', [1,2,3,4,5,6,7,8,9]);
    clientarray[8]=new Client(5,'Tanya','Taneva','tanya@gmail.com', '09934321313', [1,2,3,4]);
    clientarray[9]=new Client(9,'Evgen','Jenevich','evgen@gmail.com', '0993498989', [1,2]);

    console.log(clientarray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientarray.sort((a,b)=>a.order.length-b.order.length));
