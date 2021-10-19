// // while, do while

// let arr = [1,2,3,4,5]
// console.log(arr [0]);
// console.log(arr [1]);
// console.log(arr [2]);
// console.log(arr [3]);
// console.log(arr [4]);

// let i = 0
// while(i < arr.length) {
//     console.log(arr[i]);
//     i++
// }



// let number = 1 
// while (number <=100) {
//     if(number % 2 !== 0){
//         console.log(number);
//     }
//     number++
// }


// let i = 50
// do {
//     console.log(i, "сработает один раз")
// } while (i < 40)

// for

// for(let i = 0; i < 20; i++) {
//     console.log(i)
// }

// let arr = ["erlan", "kuba", "islam"]
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     if (arr[i] === "erlan") {
//         alert(arr[i])
//         continue;
//     }
//     console.log("Код ниже")
// }



// let users = [
//     {
//         name: "Rasha"
//     },
//     {
//         name: "Erlan"
//     },
//     {
//         name: "Kuba"
//     },
//     {
//         name: "islam"
//     }
// ]

// for(let i = 0; i<users.length; i++){

//     document.write(`<p> имя: ${users[i].name} </p>`)
// }
// console.log(users);

// for of, for in 

// for (let value of users){
//     console.log(value);
// }


// for(let value in users){
//     console.log(users[value]);
// }

// let user = {
//     name: "Atai"
// }

// for (let key in user){
//     console.log(user[key]);
// }

// for(let value of user) {
//     console.log(value);
// }

// C помощью for in можно перебирать обьекты и масивы
// C  помощбю for of можно перебирать только масивы


// let number = 5 
// console.log(number++)
// console.log(number--)
// console.log(number)


// number !==1

// let arr = [true, 7, 2, 'hello', NaN]
// let sum = 0
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] === 'number' && arr[i].toString() !== NaN){
//         sum += arr[i]  
//     }
// }
// console.log(sum)


// let arr = [1,2,-3,0,1,-6,9,0,0]
// let positive = 0
// let zero = -0
// let negative= 0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]===0){
//         zero++
//     }
//     else if (arr[i]>0){
//         positive++
//     }
//     else if (arr[i]<0){
//         negative++
//     }
// }

// console.log(zero, positive, negative)