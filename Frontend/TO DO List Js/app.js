let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function (){
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.innerText = inp.value;
    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value="";
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function() {
//         // console.log("element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

//EVENT DELEGATION :-
ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
    }
});
