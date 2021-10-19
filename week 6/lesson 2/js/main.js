//native js

//DOMContentLoaded
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM полностью звгружен");
// });

// #2
// let btn = document.querySelector("button");
// btn.onclick=()=>{
//     alert("clicked")
// }

// #3
// btn.addEventListener("click", (event) => {
//     alert("clicked");
//   console.log(event);
// });

// online, offline

// window.addEventListener("offline", () =>{
//     console.log("пропал интернет");
// });

// window.addEventListener("online", () =>{
//     console.log("Есть инет");
// });

// mousemove - любое движение мышью
// mousedown - при нажатии на мышь
// mouseup - при отпускании мыши

// document.addEventListener("mousemove", (e) =>{
//     console.log(e);    
// })

// document.addEventListener("mousedown", (e)=>{
//     console.log(e);
// })

// document.addEventListener("mouseup", (e)=>{
//     console.log(e);
// })


// input - на каждое изменение игпута 
// paste - когда вставляем 
// copy - когда копирует 

// let input = document.querySelector("input");
// let h3 = document.querySelector("h3")
// input.addEventListener("input", (e)=>{
//     console.log(e.target.value);
//     h3.innerText = e.target.value;
// })

// input.addEventListener("paste", (e)=>{
//     alert("Нельзя вставлять текст")
// })

// input.addEventListener("copy", (e)=>{
//     alert("Нельзя скопировать")
// })

// resize - при изменении размера экрана
// window.addEventListener("resize", (e)=>{
//     console.log(e);
// });


// submit - у тегов form  при нажатии на enter 

// let input = document.querySelector("input")
// let form = document.querySelector("form")
// let ul = document.querySelector("ul")
// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     let text = input.value;
//     let li = document.createElement("li")
//     li.innerText = text;
//     ul.append(li)
//     input.value = ""
//     console.log(text);
// })


// keypress - любое нажатие клавишы
// keydown -  при нажатии клавишу
// keyup - при отпускании 

// document.addEventListener("keypress", (e)=>{
//     console.log(e);
// })

// document.addEventListener("keydown", (e)=>{
//     console.log(e);
// })

// document.addEventListener("keyup", (e)=>{
//     console.log(e);
// })

// let span = document.querySelector(".firs-span");
// let btnChangeColor = document.querySelector(".c-color");
// let btnChangeSize = document.querySelector(".c-size");

// btnChangeColor.addEventListener("click", () => {
//     let red = Math.ceil(Math.random()*255)
//     let green = Math.ceil(Math.random()*255)
//     let blue = Math.ceil(Math.random()*255)
//     span.style.color = `rgb(${red}, ${green}, ${blue})`;
// });

// btnChangeSize.addEventListener("click", ()=>{
//     span.style.fontSize = `${Math.ceil(Math.random()*100)}px`;
// })

// let list = document.getElementsByTagName("ul")
// let list = document.querySelectorAll('ul');
// let  count = 1; 
// function tyda(){
//     list[0].innerHTML += `<li>${count} -tyda</li>`;
//     count++
//     if(count == 21){
//         clearInterval(x);
//     }
// }
// let x = setInterval(tyda, 1000);

// Задание #2
// Создайте HTML-форму и при нажатии на кнопку проверяйте заполненность всех
// полей. Если останутся незаполненные поля — выводите предупреждение и не
// отправляйте форму.



// // /// /// ///////////////////////////














