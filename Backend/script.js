// let n = 5;

// for(let i=0; i<n; i++){
//     console.log("hello, "+i);
// }

// console.log("Bye!!!");

//console.log(process.argv);

//let args = process.argv;
// we are starting this loop from 2 as the first 2 arguments are default paths
// for(let i=2;i<args.length;i++){
//     console.log("Hello to ",args[i]);
// }

// script.js me math.js ke functions ko kese use ker skte h
// module.exports : ke through ham ye ker sakte h
const someValue = require("./math");  // require method ki help se script.js ne exported value ko import/use ker liya or variable me store kerva liya
console.log(someValue);

const math = require("./math");
console.log(math);

console.log(math.sum(2,2));
console.log(math.PI);

const info = require("./Fruits");
console.log(info);
console.log(info[0]);
console.log(info[1].name);


//To use pacakge by globally installing it and not in a particular directory
const figlet = require("figlet");

async function doStuff() {
  const text = await figlet.text("Priyanka !");
  console.log(text);
}

doStuff();
