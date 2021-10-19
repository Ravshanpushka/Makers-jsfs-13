// Поверсхностное и глубокое копирование обьектов

// let user = {
//     name: "Rasha",
//     age: 19,
//     language: {
//         English: "2 level",
//         freanch: "3 level",
//     },

// };

// let newUser = user;
// let newUser = Object.assign({}, user);// Поверхностное копирование
// let newUser = {...user}// поверхностное копирование (через spread оператор);
// newUser.name = "Erlan";
// newUser.language.English = "6 level"
// console.log(user);
// console.log(newUser);

// let product = {
//     title: "NF",
//     price: {
//         s: 500,
//         m:666,
//         l:55555,
//     },
// };

// let newProduct = JSON.parse(JSON.stringify(product)); //Глубокое копирование
// newProduct.price.s = 1000;
// console.log(product);
// console.log(newProduct);

// let str = JSON.stringify(product);
// let obj = JSON.parse(str);
// console.log(str);
// console.log(obj);
// console.log(product);

// let student = {
//     name: "Rasha",
//     lastName: "Baymatov",
// }
// // let name = student.name;
// // let lastName = student.lastName;
// let name = "Ravshan";
// let {name: studentName, lastName} = student;
// console.log(name, lastName);

// let arr =['true', 10, null, "str", 77, false]
// let boolean = arr[0]
// let [boolean, , type, ...other] = arr;
// console.log(boolean, type, other);

// let obj = {
//     name: "Adad",
//     frameworks: ["a", "b", "v"],
//     versions: {
//         legacy: [2011, 2012, 2013],
//     },
// };

// let {frameworks: [frontEntFramework]} = obj;
// console.log(frontEntFramework);
// let {versions: {legacy: [, midlle],},} = obj;
// console.log(midlle);
// let {name: productu} = obj;
// console.log(productu);

// let product = {
//     // title: "Pencil",
//     prise: 100,
// };
// let {title = "dsdsd"} = product;
// console.log(title);

// let user = {
//     name: "Jaon",
//     age: "22",
// };
// let { name = prompt("Enter name"), age = +prompt()} = user;
// console.log(name, age);

// function showNameAndPhone({name, phone}) {
//     console.log(name, phone);
// }
// let obj = {
//     name: "Rasha",
//     phone: 222535384,
// };
// showNameAndPhone(obj);

// function func([first, second]) {
//     console.log(first, second);
//     // arg.forEach(item => {
//     //     console.log(item);
//     // });
// }
// func([1, 2, 3, 4, 5])

// function showUser ({name = "Ravshan", lastName = "Baymatov", age = 19}){
// console.log(name, lastName, age);

// }
// let obj = {
//     name: "Rasha",
//     lasrName: "Baym",
//     age:19,
// }

// showUser(obj);

// Вам дан объект с информацией о книге. С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

const courseCatalogMetadata = [
  {
    title: "The Hobbit, or There and Back Again",
    description:
      "The hobbit tells a fantastic story of adventure, danger, friendship, and courage",
    texts: [
      {
        author: "J. R. R. Tolkien",
        price: 120,
        ISBN: "912-6-44-578441-0",
      },
    ],
  },
];

let [
  {
    texts: [{ ISBN }],
  },
] = courseCatalogMetadata;

console.log(ISBN);
