// Регулярные выражения

// Есть 2 способа регулярного выраджения 

// const regexp1 = /coding/ // 1 способ
// const regexp2 = new RegExp("coding") // 2 способ

// const str = "codi is easy";
// let result = str.match(regexp1) || [];
// console.log(result);

// if (result.length > 0) {
//     console.log("Есть");
// } else {
//     console.log("Нет");
// }

// Флаги 

// i игнорирует регистр
// g с этим флагом поиск ищет все совпадения, а без него - только первое 

// let regexp = /code/gi;
// let str = "code, bad Code";
// let result = str.match(regexp);
// console.log(result);

// Метод строки match ищет и возвращает массив, если не найдено, то Null

// let str = "Работайте работяги работайте"
// let regexp = new RegExp("работайте", "gi")
// let result = str.match(regexp);
// console.log(result);

//метод строки replace ищет совпадения и заменяет их на второй аргумент 

// let str = "Требуется мидлл разработчик";
// let regexp = /мидлл/ 
// let result = str.replace(regexp, 'джуниор')
// console.log(result);

//Метод регулярного вызажения test, есть ли одно совпадения, если да, то возвращает true, иначе false 

// let str = "We can";
// let regexp = /WE/i;
// let result = regexp.test(str)
// console.log(result);

// \d цифра от 0 до 9
// \s все пробелы 
// \w символы, точнее буквы (Буквы латинского альфавита) или _
// \D Не цифра, все кроме цифры 0-9
// \S Не пробел все кроме пробела
// \W все символы кроме букв латинцкого альфавита 
// \. любой символ 

// let str = "coding is easy";
// let regexp = /\w\w\w\w\w\w/;
// let result = str.match(regexp);
// console.log(result);

//Якорь
//^ - начало строки
// $ - конец строки 

// let time = "20:12" 
// let regexp = /^\d\d:\d\d$/;
// let result = regexp.test(time);
// console.log(result);

// Наборы [] 

// let str1 = "mad";
// let str2 = "sad";
// let regexp = /[ms]ad/; // mad, sad
// let result = str2.match(regexp);
// console.log(result);

//Диапазоны 

// let str = "123456789"
// let regexp = /[1-9]/g;
// let result = str.match(regexp);
// console.log(result);

//[0-9]
//[a-z]
//[A-Z] \w
//[а-я]
//[А-Я]

// Исключения 

// let regexp = /[^aeioy]/ // все кроме этихбукв 

// Квантификаторы

// {n} количество 

// let number = "12 555 3477"
// let regexp = /\d{3,4}/g;
// let regexp = /\d+/;
// + означает один или более сиволов 
// let regexp = /\d?/;
// let result = number.match(regexp);
// console.log(result);

// let string = "color or colour"
// let regexp = /colou?r/g;
// let result = string.match(regexp);
// console.log(result);

//скобочные группы 
// mail.ru
// mail.gmail.ru

// let string = "mail.gmail.ru"
// let regexp = /(\w+.)+\w+/g;
// let result = string.match(regexp);
// console.log(result);

// let str = "rasha, erlan, kuba" 
// let regexp = /[aieou]/gi;
// let result = str.match(regexp);
// console.log(result);

// let str = "5 aplles and 5 orange";
// let regexp = /5/g;
// let result = str.replace(regexp, "пять")
// console.log(result);

//Альтернация (или) '|' 
let str = "I know Java, Python, Flutter, JavaScript, Dart"
let regexp = /Java(Script)?|Python|Flutter|Dart/g
let result = str.match(regexp)
console.log(result);








































































































































































