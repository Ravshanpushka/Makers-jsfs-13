console.log("Hello World")

let string = "abcd";
let number = 10
number = '20'
let boolean = true
let typeNull = null
let typeUndefiend = undefined
let object = {
    title: "Adidas Zoom",
    color: "green",
    size: 42,
    'description-1': "Good shoes"
}
object.size = 37
let newObject = object
newObject.title = "Nike AirForse"
console.log(newObject)
console.log(object)


let firstStr = "JS13"
secondStr = "JS13-Fullstack"
console.log(firstStr)
console.log(secondStr)



// alert, prompt, confirm

// let result = alert("Привет Андрей")
// console.log(result)

// let name = prompt("Ввудите ваше имя")
// alert("Hello" + name)

// let result = confirm ("Вам есть 18 лет?")
// console.log(result)

// let num1 = 10
// let num2 = '20'
// let sum = num1 + num2
// console.log(sum)

// console.log(typeof NaN)


// console.log(10<=10)

// console.log(10>=11)
// console.log(10=='10')
// console.log(10==='10')

// let num1 = +prompt('введите первое число')
// let num2 = +prompt('введите второе число')
// console.log(num1+num2)

let user = {
    name: "Rasha",
    lastName: "Rasha",
    age: 19
}


// console.log("Добро пожаловать " + user.name + user.Lastname +  "на наш сайт")


// console.log(`Добро пожаловать ${user.name} ${user.lastName} на наш сайт`)

// let obj = {
//     5: 0,
//     "5": 10,
//     5:333,
//     name: "Rasha",
//     name: "Rash"
// }
// console.log(obj)
// console.log(obj['5'])

// let list = [1,2,3,4,5,6,7, "hello", {arr:123}, ["first", "second"]]

// console.log(list[8])

// let num1 = prompt ('enter number')
// let mul = num1*num1*num1

// console.log (mul)

let num1 = +prompt ("enter the number 1")
let num2 = +prompt ("enter  the number 2") 
let sum = 2 * (num1 + num2)
console.log (sum)
