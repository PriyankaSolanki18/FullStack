const figlet = require("figlet");

async function doStuff() {
  const text = await figlet.text("Priyanka");
  console.log(text);
}

doStuff();