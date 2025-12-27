// it will act like a server

const express = require("express");
const app = express();

console.dir(app);

let port = 8080;

//server
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});





// app.use((req,res) => {
  //  console.log(req);
    // console.log("request received");
    //res.send("this is a basic response");

    //data will be send in json format
    // res.send({
    //     name:"apple",
    //     color:"red"
    // });

    //data send in html format
    // let code="<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
    // res.send(code);
// });





//if server receive GET request then we use :-
app.get("/", (req,res) => {
  res.send("you contacted root path, hello i am root");
});




//Setting path parameters :-

// app.get("/:username/:id", (req,res) => {
//   console.log(req.params);
//   res.send("you contacted root path, hello i am root");
// });

// app.get("/:username/:id", (req,res) => {
//   let { username, id } = req.params;
//   res.send(`welcome to the page of @${username}`);
// });

app.get("/:username/:id", (req,res) => {
  let { username, id } = req.params;
  let htmlStr = `<h1>welcome to the page of @${username}!</h1>`;
  res.send(htmlStr);
});



 

//Query Strings :-
// app.get("/search", (req,res) => {
//   console.log(req.query);
//   res.send("no results");
// });

// app.get("/search", (req,res) => {
//   let {q} = req.query;
//   res.send(`search results for query : ${q}`);
// });

app.get("/search", (req,res) => {
  let {q} = req.query;
  //esi koi request aati h jisme koi query string nhi bheji toh ham check ker skte h :-
  if(!q){
    res.send("<h1>nothing searched</h1>");
  }
  res.send(`<h1>search results for query : ${q}</h1>`);
});





//if server receive GET request then we use :-
// app.get("/apple", (req,res) => {
//   res.send("you contacted apple path");
// });

// app.get("/orange", (req,res) => {
//   res.send("you contacted orange path");
// });

// app.get(/.*/, (req,res) => {
//   res.send("this path does not exist");
// });





//if server receive POST request then we use :-
// app.post("/", (req,res) => {
//   res.send("you send a POST request to root");
// });