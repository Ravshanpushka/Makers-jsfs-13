//простые методы массивы

// push, pop, shift, unshift

// let arr = [1, 2, 3]

// arr.push(4) // добовляет конец
// console.log(arr);
// let num = arr.pop() //вырезвет один элеиент
// console.log(arr);
// console.log(num);


// let arr=['kgz','uzb','rus']
// arr.unshift('china') //добавляет элемент ы нвачало
// console.log(arr)

// let country=arr.shift()  //вырезвет один элемент сначала
// console.log(arr)
// console.log(country)

// // splice, slice
// let nums=[22,40,38,50]
// let res=nums.splice(0,1,"1")
// console.log(nums)
// console.log(res)


// массив.splice(с какого начать что вырезать что ставить вместо вырезенного)

// let arr=[100,31,47,58]
// let num=arr.slice(1,2)
// console.log(arr)
// console.log(num)


// массив.slice(с какого начать по какой(не включиитеельно))

// let arr=[1,2,3,4,5]
// // arr.reverse()
// let str=arr.join("-") //из массива делает строку
// console.log(arr)
// console.log(str)
// let newarray=str.split('-') //из строки делает массив
// console.log(newarray)


// let nums=[1,2,30,11,101,22,86]
// nums.sort((a,b)=>a-b)
// console.log(nums)


// let res =[1,2,3]
// let res2=[4,5,6]

// let result=res.concat(res2,["str",'Boolean'])
// console.log(result)

// let myarray=["kubat","malik", "erlan","rasha","tumsum"]
// for(let i =0;i<myarray.length;i++){
//     myarray.splice(i,1,[myarray[i],i])
// }
// console.log(myarray)



// let mixedusers=[
//     {
//         role:"user"
//     },
//     {
//         role:"admin"
//     },
//     {
//         role:"admin"
//     },
//      {
//         role:"user"
//     },
//     {
//         role:"admin"
//     },
//     {
//         role:"user"
//     },
// ]

// let admin=[]
// let user=[]
// for(let i=0;i<mixedusers.length;i++){
//     if(mixedusers[i].role==="admin"){
//         admin.push(mixedusers[i])
//     }else if(mixedusers[i].role==='user'){
//         user.push(mixedusers[i])
//     }
// }

// console.log(admin)
// console.log(user)

let products=[
    {size:"s"},
    {size:"s"},
    {size:"s"},
    {size:"s"},
    {size:"l"},
    {size:"l"},
    {size:"l"},
    {size:"l"},
    {size:"m"}, 
    {size:"m"}
]
let s=[]
let l=[]
let m=[]
for(let i=0;i<products.length;i++){
    if(products[i].size==='s'){
s.push(products[i])
    }
    else if(products[i].size==='l'){
l.push(products[i])
    }
     else if(products[i].size==='m'){
m.push(products[i])
    }
    
}

console.log(s)
console.log(l)
console.log(m)

