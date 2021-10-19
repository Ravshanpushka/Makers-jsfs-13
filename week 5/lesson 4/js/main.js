// let arr = [
//   { id: 1 },
//   { id: 1 },
//   { id: 1 },
//   { id: 1 },
//   { id: 2 },
//   { id: 2 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
// ];
// function uniq(arg) {
//   let uniqarr = [];
//   arg.forEach((item) => {
//     let check = uniqarr.filter((elem) => item.id === elem.id);
//     console.log(check);
//     if (check.length === 0) {
//       uniqarr.push(item);
//     }
//     console.log(uniqarr);
//   });
//   return uniqarr;
// }
// let newarr = uniq(arr);
// console.log(newarr);

// let arr = [1,1,1,2,3,3,4,5,5]
// let newArr = [];
// arr.forEach((item) => {
// let check = newArr.filter(elem => {
//     console.log("Это элем", elem, "Это айтем", item);
//     return elem === item;
// });
// if(check.length === 0){
//     newArr.push(item);
// }
// });
// console.log(newArr);

// let nums = [10, 21, 15, 5];
// let newArr  = arr.map((item) => item **2 )
// console.log(newArr);

// let studet = {
//     name: "Rasha",
//     courses: {
//         java: {
//             prise: 200,
//             duration: 3
//         },
//         python: {
//             position: "intro",
//             lesson: 1,
//         },
//     },
// };

// let {courses:{python:{position}}} = studet;
// console.log(position);

// let user = {
//     name: "Erlan",
//     age:25,
//     friends: ["Rasha", "Kuba"],
//     children: [
//         {name: "Islam", age: 3},
//         {name: "Rash", age: 10},
//     ],
//     parents: [
//         {name: "Victor", age: 60},
//         {
//             name: "Vasilec", 
//             age: 55,
//         friends: {
//             close: ["Shergazy", "Aleksandra"],
//             notClose:[],
//         }
//         },
//     ],
//     jobs: {
//         frontEnd: {
//             Language: "Java",
//         },
//         backEnd: {
//             languages: {
//                 java:{
//                    version: 8,
//                    frameworks:{
//                        spring:{
//                            version:1,
//                        },
//                    },
//                 },
//             },
//         },
//     },
// };


// let {jobs:{backEnd:{java:{frameworks:{spring:{version}}}}}} = user;
// console.log(version);
// let {children:[, name]} = user;
// console.log(name); 

// let{parents:[, {friends:{close:[,asa]}}]} = user;
// console.log(asa);


// let calcSquart = function (){
//     console.log(arguments);
//     let [firsNum, secondNum] = arguments;
//     console.log(firsNum, secondNum);
// };
// calcSquart(3,5);

// let arr = [-100, 100, 330, -500]
// let newArr = arr.filter((item, index, array) => {
//     return item < 0;
// });
// console.log(newArr);


// let gamer = {
//     psevdoName: "Tyda-Suda",
//     games: ["GTA", "Dota-2", "CS:GO"],
//     showUserGames(){
//         this.games.forEach((item) => {
//             console.log(item);
//         });
//     },
// };
// gamer.showUserGames();

// let arr = [20,-15, 30];
// let result = arr.reduce((prevValue, currentValue) => {
//     return prevValue * currentValue;
// }, 1);
// console.log(result);

// function firstFunc(){
//     let str = "";
//     return function (word) {
//         return (str += word);
//     };
// }
// let func = firstFunc();
// console.log(func("Hellp")); 
// console.log(func(" ME"));
// console.log(func(" Niga"));
// let newFunc = firstFunc();
// console.log(newFunc("Dada"));
// console.log(newFunc("dadadada"));

// let str = " ";
// function func(word) {
//     return (str += word);
// }
// console.log(func("Hellp"));
// console.log(func(" me"));
// console.log(func(" Niga"));

// console.log(func("Dada"));
// console.log(func("dadadada"));

// function rec(start){
//     console.log(start);
//     if(start >= 100) return;
//     rec(start + 1);
// }
// rec(1)


// for(let i = 0; i <= 100; i++);{
//     console.log(i);
// }

// let i = 0;
// while(i <= 100){
//     console.log(i);
//     i++;;
// }

// let i = 101;
// do{
//     console.log(i);
//     i++;
// } while (i <= 100);

// console.log((true && true && false) || true);

// if (!""){
//     console.log("TRUE");
// }

// console.log("10" - 10);

let arr = [1,2,3,4,5,6]
let newArr = arr.map((item)=> {
    if (item === 0)
})
console.log(newArr);

















































