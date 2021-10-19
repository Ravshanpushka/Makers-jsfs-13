// let products = ["Nike", "Puma", "Bigser"];
// products.forEach((item) => console.log(item));
// let newArr = products.map((item) =>  item);
// console.log(newArr);

// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let newArr = arr.map(item => {
//     return item.length 
// })
// console.log(newArr);

// let names = ['sam','luck','james'];
// names = names.map(item =>{
//     item = item[0].toUpperCase() + item.slice(1)
//     return item; 
// });
// console.log(names);

// let arr = [1, 3, 10, -11, -555, 10]
// let newArr = arr.filter((item) => {
//     return item > 0;
// })
// console.log(newArr);

// let arr = ['str', 1, [3,4], true, ['str'], 10];
// let newArr = arr.filter ((item)  =>  Array.isArray(item))
// console.log(newArr);

// let num = 123456789; 
// let str = num.toString(); // переводим в строку
// let arr = str.split("");// делим по буквам и переводим в массив
// arr = arr.reverse();// переворачиваем в массив 
// let newArr = +arr.join("");// переводим обратно в строку, знак + из строки в число
// console.log(newArr);

// let reverseNum = +num.toString().split("").reverse().join("");
// console.log(reverseNum);

// Напишите функцию, которая будет принимать строку и проверять является ли 
// она палиндромом. Пробелы и регистр учитывать не нужно.
// > Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково 
// читающееся в обоих направлениях. Например, число 101; слова "кок", "топот", 
// "комок" и т.д.

// function Palindrome(str) {
//     let strLen = str.length,
//         strReverse = str.split('').reverse().join(''); 
//     if (strReverse == str) {
//       return 'yes';
//     } else {
//       return 'no';
//     }
//   }


//   test = Palindrome('топот');
//   test2 = Palindrome('отопт');

//   console.log(test);
//   console.log(test2);
//   document.write('Palindrome result: ' + 'str - ' + test + ' str2 - ' + test2);

// function palindrome(word) {
// let secondWord = word.split("").reverse().join("");
// if( word.toLowerCase() === secondWord.toLowerCase()){
//     console.log("palindrome");

// }else{
//     console.log("not a palinrome");
// }
// }

// palindrome("fgeg ")

// Метод trim() убирает все пробелы до первого символа и после последнего символа

// let arr = ['Молоко', 77, 11, 'Мед', -88]
//   let func1 = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//       if(typeof arr[i] === 'number'){
//         console.log(`${arr[i]}-число`)
//       } else {
//         console.log(`${arr[i]}-не число`)
//       }
//     }
//   }
// func1(arr)


// let sum = [5, 6, 7, 8, 9].reduce(add, 0);
// function add(a, b) {
//     return a + b;
// }
// console.log(sum);


// let array = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
// let filtered = array.filter((item) => {
//     return item.length >= 5;
// }) 
// console.log(filtered);

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let newArr = arr.filter((item) => Array.isArray(item));
// console.log(newArr);
// function shuffle(array) {
//   array.sort((item) => Math.random() - 0.5);
// }

// let arr = [4, 8, 12, 16];
// shuffle(arr);
// console.log(arr);




























































































































































































































































































