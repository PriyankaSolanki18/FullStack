//1.

// let p = document.querySelector("p");

// p.addEventListener("click", function() {
//     console.log("paragraph was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
//     console.log("mouse inside box");
// });


//2. 'this'

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     // console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "yellow";
// });


let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor () {
    console.dir(this.innerText);   // yaha per 'this' ka mtlb vhi hoga jisne addEventListeners ke andar jaker isse trigger kiya hoga  
    this.style.backgroundColor = "yellow";
}

btn.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);