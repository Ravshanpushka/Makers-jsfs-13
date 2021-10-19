// стрелочные функции (arrow function)


// const arrowFunc = () => {
//     console.log("Arrow");
// };

// const arrowFunc = () => console.log("Arrow");
// const arrowFunc = arg => console.log(arg);
// arrowFunc(10);


// function func() {
//     console.log(arguments);
// }


// const func = () =>{
//     console.log(arguments);
// }
// func("str", 10, true);

// let km = +prompt("Enter km")
// const converter = (arg) => {
//     let m = arg * 1000;
//     alert(`${m} метров`)
// }
// converter(km)

// методы объектов 

// console.warn("Met");
// console.error("DDD");
// console.log("lll");


// let user = {
//     name: "Rasha",
//     sayHello: function (arg) { // function expression
//         console.log(`Здарова ${arg}`);
//     },
//     sayHello(arg) { // function declaration
//         console.log(`Здарова ${arg}`);
//     },
//     sayHello: (arg) => { // arrow function 
//         console.log(`здарова ${arg}`);
//     }
// };
// user.sayHello("Rasha");
// user.sayHello("erlan");


//this 
// let room = 19;  
// function sum(){}

// console.log(this);

// let obj = {
//     title: "js77",
//     sayContext(){
//         console.log(this);
//     },
// sayContextArrow: () => {
// console.log(this);
// },

// func() {
//     let arrowFunc = () => {
//         console.log(this);
//     };

//     arrowFunc();

// }, 

// };

// obj.sayContext();
// obj.sayContextArrow();
// obj.arrowFunc();



// let user =  {
//     name: "Erlan",

//     sayName: function() {
//         console.log(this.name);
//     },
// };  

// let newUser = {...user};
// newUser.name = "Rasha";
// user.sayName();
// newUser.sayName();

// let passenger = {
//     firstName: 'Dian',
//     lastName: 'Winchester',
//     passportNum: 'US5545461635',
//     baggage: 20,
//     getInfo() {
//         console.log(`Passenger ${this.firstName} ${this.lastName}. Passport number is ${this.passportNum}. Maximum luggage weight is ${this.baggage}`);
//     },
//     setBaggage(arg) {
//         this.baggage = arg;
//     },
// };

// passenger.getInfo();
// passenger.setBaggage(50);
// passenger.getInfo();


// Дан объект user. Напишите метод byTicket для этого объекта.
// При вызове метода количество билетов должно увеличиваться на единицу, при условии,
// что у пользователя будет достаточно средств на балансе.
// Также, с баланса должна сниматься стоимость билета (400).
// Если на счету недостаточно средств вывести соответствующее сообщение.


// let user = {
//     name: 'Sam',
//     age: 17,
//     balance: 700,
//     tickets: 0,
//     byTicket (count) {
//         if (this.balance > 400 * count)  {
//             this.tickets+= count;
//             this.balance -= 400 * count;

//             console.log(`Вы успечно купили ${count} билет(ов)`);
//         } else {
//             let avaTicket = Math.floor(this.balance / 400);
//             if(avaTicket > 0)
//             alert(`Увас недостаточно средст купить ${count} билет(ов). Вы успешно купили ${avaTicket} билет(ов)`)
//         }
//     },
//     addToBalace(sum) {
//         this.balance  += sum;
//         console.log(`Вы успешно пополнили баланс на ${sum}`);
//     },
//     showBalance (){
//         console.log(`Ваш баланс ${this.balance} сом`);
//     },
// };

// user.byTicket();
// user.addToBalace(1000);
// user.showBalance();

















































































































































































































