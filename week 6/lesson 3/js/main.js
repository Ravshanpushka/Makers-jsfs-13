// JQuery

// let allElems =  $("*");
// console.log(allElems);

// tagName
// let h1 = $("h1")
// console.log(h1);
// h1.css("fontSize", "24px")

// className
// let month =$(".october")
// console.log(month);


// Native JS
// let liTags = document.querySelectorAll('li')
// liTags.forEach((item)=> {
//     item.style.color = "red"
// });

//JQuery

// let liTags = $('li')
// liTags.css("color", "blue");
// let thirdLiTag = $('li:nth-child(3)') // по порядковому номеру
// let thirdLiTag = $('li:eq(2)') // index
// thirdLiTag.css("color", "red")
// let first = $('li:first-childe')
// first.css("fontWeight", "700") 
// $("li:last-child").css("fontSize", "30px")

// let inputs = $("input");
// let disabledInput = $("input:disabled");
// console.log(disabledInput);
// let value = disabledInput.val()
// disabledInput.val("Не работает")
// console.log(value);

// let liTags = $("li");
// liTags.addClass("list-item");
// liTags.toggleClass("list-items");
// liTags.toggleClass("active");
// liTags.removeClass("list-item")
// let result = liTags.hasClass("active");
// console.log(result); 


// let divWithoutClass = $("div:not(.block)")
// console.log(divWithoutClass);

// let paragaraf = $(".text");
// let text = paragaraf.text();
// console.log(text);
// paragaraf.text(paragaraf.text() + "Hello")
// paragaraf.html("<strong>JSFS-13</strong>")

// let div = $("#users");
// let users = [
//     {
//         name:"Rasha",
//         age:19,
//     },
//     {
//         name:"Erlan",
//         age:19,
//     },
//     {
//         name:"Kuba",
//         age:21,
//     },
//     {
//         name:"Islam",
//         age:16,
//     },
// ];
// users.forEach((item)=>{
//     div.append(`
//         <p>Имя: ${item.name}  Возраст: ${item.age}</p>  
//         <strong>14:55</strong>  
//     `);
// });

// let google = $('a[href="google.com"]')
// console.log(google);

// let p = $('p');
// p.text(new Date());

let google = $("a:first");
// let href = google.attr("href", "amazon.com");
// google.removeAttr("href");
// google.attr("id", "global")
// console.log(href);


// let href = google.prop("href");
// console.log(href);
// google.removeAttr("href");
// google.attr("id", "global")
// console.log(href);


// let liTags = $('li')
// liTags.each((index, element)=>{
//     console.log(index,element);
//     if( index % 2 !==0){
//         $(element).css("color", "red")
//     }
// }); 

// //////////////////////////
let btnStart = document.querySelector(".start");
let btnReset = document.querySelector(".reset");
let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");
let whinner = document.querySelector(".whinner");

btnStart.addEventListener('click', () => {
  let randNum1 = Math.floor(Math.random() * (450 - 400) + 400);
  let randNum2 = Math.floor(Math.random() * (450 - 400) + 400);

  car1.style.transform = translateX`(${randNum1}px`;
  car2.style.transform = translateX`(${randNum2}px`;

  if (randNum1 > randNum2) {
    whinner.innerText += "Car #1";
  } else {
    whinner.innerText += "Ca2 #1";
  }
});
btnReset.addEventListener("click", () => {
  car1.style.removeProperty("transform");
  car2.style.removeProperty("transform");
});







