// Методы массивов (forEach, map, filter, reduct, indexOf, includes, every, some)

// forEach
// let arr = ["boolean", 34, {}, true]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i], i, arr);
// }
// arr.forEach((item, index, array) => {
//     console.log(item, index, array);
// });

//map
// let arr = [1, 2, 3, 4, "a", 6];
// let newArr = arr.map(function(item, index, array){
//     if(item === "a") {
//         return 5;
//     }
//     return item;
// });
// console.log(newArr);

//filter
// let numbers = [32, 2, 43, 10, 25]
// let newArray = numbers.filter(item  => {
// return item > 15;
// })
// console.log(newArray);

// let films = [
//     {
//         title: "Оно",
//         genre:"horor",
//     },
//     {
//         title: "Venom",
//         genre: "Fantasy",
//     },
//     {
//         title: "Эки Баатыр",
//         genre: "comedy",
//     },
// ];

// console.log(films);
// function handleFilter(genre) {
//     let filteredArr = films.filter((item) => {
//        return item.genre === genre;
//     });
//     console.log(filteredArr);
// }
// handleFilter("comedy")

//reduce
// let arr = [2, 4, 10, 12];
// let result = arr.reduce((prevValue, currentValue, index, array) => {
// console.log(prevValue, currentValue);
// return currentValue;
// return prevValue + currentValue
// });
// console.log(result);

//indexOf
// let arr = [true, 1, 0, "str"];
// let result = arr.indexOf("str");
// console.log(result);

// function cut(elem) {
//     let index = arr.indexOf(elem);
//     console.log(index);
//     arr.splice(index, 1);
// }
// console.log(arr);
// cut(false);
// console.log(arr);

// includes
// let arr = [10, 20, "array"]
// let result = arr.includes(25)
// console.log(result);

// some and every
// let users = [
//     {id: 1, name: "Sanjar"},
//     {id: 2, name: "Baxa"},
//     {id: 3, name: "Atay"},
// ];
// let result = users.every(item => item.id === 1);
// console.log(result);

// let arr = [1, 20, 30, -5]
// let result = arr.every((item) => item > 0);
// let result = arr.some((item) => item > 0);
// console.log(result);

// let users = [
//     {id: 1, name: "Sanjar"},
//     {id: 2, name: "Baxa"},
//     {id: 3, name: "Atay"},
// ];
// let user = users.find((item) => item.name === "Atay");
// console.log(user);


// let arr = [-15, 10, 24, 36, 0];
// let newArr = arr.map((item) => {
//    return item*1.8 + 32
// });
// console.log(newArr); 

// Создать новый список (массив) из массива studentRecords, где будут храниться только студенты, у которых баллы больше 50.
// После отфильтровки начислить каждому студенту по 15 баллов в качестве поощрения.
// В конце посчитать средний балл студентов (используйте метод reduce()). 
// 
// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'John', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ];

// let uplist = studentRecords.filter((item) => item.marks > 50);
// console.log(uplist);
// uplist = uplist.map((item) => {
//     item.marks += 15
//     return item; 
// });
// console.log(uplist);
// let eve = uplist.reduce((prev, stud) => {
//     console.log(prev, stud);
//     return prev + stud.marks;
// }, 0);
// eve = eve / uplist.length;
// console.log(eve);


// Дан массив:
// Создайте новый массив, в котором будут
// только положительные числа из массива arr.
// Используйте метод .filter()

// let task1 = [2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17];
// let newarr=task1.filter((item) =>{
//     return item > 0;
// } )
// console.log(newarr);

































