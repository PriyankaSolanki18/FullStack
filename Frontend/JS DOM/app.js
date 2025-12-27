// let samllImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<samllImages.length;i++){
//     console.dir(samllImages[i].src);
// }

// for(let i=0; i<samllImages.length;i++){
//     samllImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// 

// console.dir(document.querySelector('h1'));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++){
//     links[i].style.color = "green";
// }
// for(link of links){
//     link.style.color = "red";
// }


//**************   PRACTICE QUE  Lec - 9 (JS) ***************/

//Q1. 

// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red!";
// document.querySelector('body').append(para1);

// para1.classList.add("red");


//Q2.

// let h3 = document.createElement('h3');
// h3.innerText = "Hey I'm blue h3!";
// document.querySelector('body').append(h3);

// h3.classList.add("blue");


//Q3.

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para2=document.createElement("p");

// h1.innerText = "I'm in a div";
// para2.innerText = "ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector('body').append(div);


//**************   ASSIGNMENT QUE  Lec - 9 (JS) ***************/

//Q1. Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;

// let input = document.createElement("input");
// let btn = document.createElement("button");

// btn.innerText = "Click Me";

// document.querySelector("body").append(input);
// document.querySelector("body").append(btn);

//Q2. Add following attributes to the element:-
// Change placeholder value of input to “username” 
// Change the id of button to “btn"

// btn.setAttribute("id","btn");
// input.setAttribute("placeholder","username");

//Q3. Access the btn using the query Selector and button id. Change the button background color to blue and text color to white.
 
// let btn = document.querySelector("#btn");

// btn.classList.add("btnStyle");
// document.querySelector("body").append(btn);

//Q4. Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.

// let h1 = document.createElement("h1");
// h1.innerHTML = "<u>DOM Practice</u>";
// h1.style.color = "purple";
// document.querySelector("body").append(h1);

//Q5. Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold.


// let p = document.createElement("p");
// p.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector("body").append(p);

/************************************************************/

// LEC 10

// let btn = document.querySelector("button");
// console.log(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
//    alert("button was clicked");
// }

// function sayHello (){
//     alert("Hello...");
// }

// btn.onclick = sayHello;

/* ***************************************************** */

// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button");
//     }
//     console.dir(btn);
// }

// function sayHello (){
//     alert("Hello...");
// }

/* ***************************************************** */


// let btns = document.querySelectorAll("button");
// for(btn of btns){
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function() {
//         console.log("doubled clicked me");
//     });
// }

// function sayHello (){
//     alert("Hello...");
// }

// function sayName (){
//     alert("Apna College");
// }

/* ***************************************************** */

