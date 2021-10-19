// Фукнции, области видимости, хойстинг 
// 1) function declaration
// 2) function expression
// 3) arrow function


// function declaration 

// function func(){
//     console.log("Hi");
// } 
// func ();

// function sayHello() {
//     alert("Здарова");
// }
// sayHello();


// //обьявляем функцию 
// function имя(параметры) {
//     ...тело...
// }

// имя()



// function sumTwoNumbers (num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// let sum = sumTwoNumbers(10, 20)
// console.log(sum);


// function firstElem(arr) {
//     let elem = arr.shift();
// return elem;
// }

// let array = [true, 2, 3, 4, 5];
// let result = firstElem(array)
// console.log(result);


// function mulTwoNums (arg1, arg2 = 1) {
// console.log(arg1, arg2 );
//     console.log(arg1 * arg2);

// }
// mulTwoNums(2, 3)
// console.log(num);
// var num = 20;
// let str = "20"
// console.log(str);

// let message = "Hello world"
// function showMessage (message){
//     console.log(message);

// }

// showMessage (message)



// let arr = ["arr"]
// function array (arr) { // здесь функция принимает агрументы 
//     console.log(arr);
// }

// array (arr); // здесь передеются агрументы функции 

//если функция принимает аргументы, то аргументы нужно передавать



// let numbers = [100, 200, 300];

// function lastElemOfArray (){
//     let lastElem = numbers.pop();
//     console.log(lastElem);
// }


// lastElemOfArray();
// let boolValues = [true, false, true];
// lastElemOfArray();


// function expression
// let str = "Help me world"
// let sayHello = function (arg) {
// console.log(arg);
// }

// sayHello(str)

// let obj = {
//     title: "Makers", 
// };

// function showTitle(arg1) {
//     console.log(arg1.title);
//     document.write(`<h1>${arg1.title}</h1>`)
// }

// showTitle(obj)



// let school = {
//     title: "УУУУУУУУ"

// };

// showTitle(school)

// let num1 = 50;
// function func(){
//     let num1 = 20;
//     console.log(num1); 
//     return num1
// }

// func();
// console.log(num1);


// тело функции это локальрная область видимости

// function pow(x, n) {
//     let result = x ** n
//     return result
// }

// let result = pow(2, 2)
// console.log(result);

// let week = function (day) {

//     switch (day) {

//     case 1: return "Понедельник"
//     case 2: return "Вторник"
//     case 3: return "Среда"
//     case 4: return "Четверг"
//     case 5: return "Пятница"
//     case 6: return "Суббота"
//     case 7: return "Воскресенье" 
// };
// };
// console.log(day);


// function a(num){
//     switch(num){
//         case 1: return "Понедельник"
//         case 2: return "вт"
//         case 3: return "ср"
//         case 4: return "чт"
//         case 5: return "пт"
//         case 6: return "сб"
//         case 7: return "вс"
//     }
// }
// console.log(a(5));

// function sumTriple (x, y) {
//   if (x == y) {
//     return 3 * (x + y);
//     } 
//    else
//    {
//     return (x + y);
//    }
//  }
// console.log(sumTriple(10, 20));
// console.log(sumTriple(10, 10));




let names = ["Rasha", "Erlan", "Kuba", "Islam", "Aidar"]


function checkUser(arr, name) {
    for(let i = 0; i < arr.length; i++) {
    let check = arr [i]
        if (check === name) {
            return "Да";
        }

    }

    return "НЕТ"
}

console.log (checkUser(names, "Erlan"))


