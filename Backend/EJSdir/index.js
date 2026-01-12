const express = require("express");
const app = express();
const path = require("path");
// const { use } = require("react");

const port = 8080;

app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));

app.set("view engine","ejs");  // express internally require ejs so we don't have to require it separately
app.set("views",path.join(__dirname,"/views"));  //exact path to search for views folder no matter from whereever we are runnig the server i.e; index.js

app.get("/", (req,res) => {
    // res.send("this is home");
    res.render("home.ejs");
});

app.get("/hello", (req,res) => {
    res.send("hellooo");
});

app.get("/rolldice", (req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;  //assuming this value is comming from database
    // res.render("rolldice.ejs",{ num : diceVal });
    res.render("rolldice.ejs",{  diceVal });
});

app.get("/ig/:username", (req,res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    
});

app.listen(port, () =>{
   console.log(`listening on port ${port}`); 
});