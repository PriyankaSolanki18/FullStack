const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuid4} = require('uuid');
const methodOverride = require("method-override");
//uuid4(); // -> '1a9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id: uuid4(),
        username : "Priyanka",
        content : "Software engineer",
    },
    {
        id : uuid4(),
        username : "Sarita",
        content: "Fighter, brave soul",
    },
    {
        id : uuid4(),
        username : "Prateek",
        content : "Protector, innocent soul",
    },
];

//1. to get data for all posts : index.ejs
app.get("/posts",(req,res) => {
    res.render("index.ejs",{ posts });
});

//2. serve the form : new.ejs
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// add the new post 
app.post("/posts", (req,res) => {
    let {username, content} = req.body;
    let id = uuid4();
    posts.push({ id, username, content});
    res.redirect("/posts");
});

// 3. show route or view route. To get one post (using id) : show.ejs
app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

// 4. to update specific post : edit .ejs
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

//
app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
});

// 5. to delete specific post
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () =>{
    console.log("Listening to port : 8080");
});