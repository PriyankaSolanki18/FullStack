// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
    // console.log("form submitted");
    // alert("form submitted");


    // console.dir(form);
    // let user = this.elements[0];
    // let pass = this.elements[1];
    // console.log(`Hi ${user.value}, your password is set to ${pass.value}`);

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    // console.log(`Hi ${user.value}, your password is set to ${pass.value}`);

// });






// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#user");
// user.addEventListener("change", function(event) {
//     console.log("change event");
//     console.log("final val = ",user.value);
// });

// user.addEventListener("input", function(event) {
//     console.log("input event");
//     console.log("final val = ",user.value);
// });






//text editor

// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function(){
//     console.log(inp.value);
//     p.innerText = inp.value;
// });







//*******************Practice Que**********************/

// Qs1.Try out the following events in Event Listener on your own:
// -mouseout
// -keypress
// -Scroll
// -load
// [UseMDNforhelp]

// let box=document.querySelector("#box");
// box.addEventListener("mouseout", () => {
//     console.log("mouse left the box");
// });

// let input = document.querySelector("input");
// input.addEventListener("keypress",(event) => {
//     console.log("key pressed :",event.key);
// });

// window.addEventListener("scroll", () =>{
//     console.log("page is scrolling");
// });

// window.addEventListener("load", () => {
//     alert("page fully loaded");
// });



// Qs2. Create a button on the page using Java Script. Add an event listener to the button that changes the button’s color to green when it is clicked.

// let btn = document.createElement("button");
// btn.innerText = "Click me!";

// document.body.append(btn);

// btn.addEventListener("click", () => {
//     btn.style.backgroundColor = "green";
//     btn.style.color = "white";
// });



// Qs3. Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML. The purpose of this input element is to enter a user’s name so it should only input letters from a-z, A-Z and space(all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside the heading.
// [Please note that no other character apart from the allowed characters should be visible in the heading]

let input = document.createElement("input");
input.setAttribute("placeholder","Enter you name");

document.body.append(input);

let h2 = document.querySelector("h2");

input.addEventListener("input", () => {
    let filterValue = input.value.replace(/[^a-zA-Z ]/g,"");

    input.value = filterValue;
    h2.innerText = filterValue;
});