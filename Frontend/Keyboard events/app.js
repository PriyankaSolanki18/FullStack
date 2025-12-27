
// Mouse Events

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event) { //event is default argument here
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick", function(event) { //event is default argument here
//     console.log(event);
//     console.log("button clicked");
// });


//keyboard events

let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(){
//     console.log(event);
//     console.log("key :",event.key);
//     console.log("code :",event.code);
//     console.log("key was pressed");
// });

// inp.addEventListener("keyup", function(){
//     console.log("key was released");
// });

inp.addEventListener("keydown", function() {
    console.log("code =",event.code);
    if(event.code == "ArrowUp"){
        console.log("hero moves forward");
    }
    else if(event.code == "ArrowDown"){
        console.log("hero moves backward");
    }
    else if(event.code == "ArrowLeft"){
        console.log("hero moves left");
    }
    else if(event.code == "ArrowRight"){
        console.log("hero moves right");
    }
});