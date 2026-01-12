const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));

app.use(methodOverride("_method"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Solanki@18#',
});

let getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };

//using faker to insert data-
 return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
 ];
}

// let q = "SHOW TABLES";

// inserting data into  table - users, using placeholders-
// let q = "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)";
// let q = "INSERT INTO users (id, username, email, password) VALUES ?";  // when inserting daya using arr
// let userarr = [["123b", "123_newuserb", "abcb@gmail.com", "abcb"], 
//               ["123c", "123_newuserc", "abcc@gmail.com", "abcc"]];
// let user3 = ["123c", "123_newuserc", "abcc@gmail.com", "abcc"];


//using faker-
// let data = [];
// for(let i=1;i<=100;i++){
//     data.push(getRandomUser());
// }

// try{
//     connection.query(q, [data], (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     // console.log(result.length);
//     // console.log(result[0]);
//     // console.log(result[1]);
// });
// }catch (err){
//     console.log(err);
// }

// connection.end();

// console.log(getRandomUser());


// app.get("/", (req, res) => {
//     res.send("welcome to home page");
// });

// GET   /    Fetch & show total number of users on our app
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM users`;
    try{
        connection.query(q, (err, result) => {
        if(err) throw err;
        // console.log(result);
        // res.send(result);
        // console.log(result[0]["count(*)"]);
        // res.send(result[0]["count(*)"]);
        let count = result[0]["count(*)"];
        res.render("home", {count});
    });
    }catch (err){
        console.log(err);
        res.send("some error in DB");
    }
    // res.send("welcome to home page");
});



// GET    /user     fetch & show (userid, username, email) of all users
app.get("/user",(req, res) => {
    let q = `SELECT * FROM users`;
     try{
        connection.query(q, (err, users) => {
        if(err) throw err;
        // res.send(result);
        res.render("showusers.ejs", {users});
    });
    }catch (err){
        console.log(err);
        res.send("some error in DB");
    }
});



// Edit route
app.get("/user/:id/edit", (req,res) => {
    let {id} = req.params;
    let q = `SELECT * FROM users WHERE id='${id}'`;
     try{
        connection.query(q, (err, result) => {
        if(err) throw err;
        let usr = result[0];
        res.render("edit.ejs",{usr});
    });
    }catch (err){
        console.log(err);
        res.send("some error in DB");
    }
});


//Update (DB) route
app.patch("/user/:id", (req,res) => {
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM users WHERE id='${id}'`;
     try{
        connection.query(q, (err, result) => {
        if(err) throw err;
        let usr = result[0];
        if(formPass != usr.password){
            res.send("Wrong Password");
        }else{
            let q2 = `UPDATE users SET username='${newUsername}' WHERE id='${id}'`;
            connection.query(q2, (err,result) => {
                if(err) throw err;
                res.redirect("/user");
            });
        }
    });
    }catch (err){
        console.log(err);
        res.send("some error in DB");
    }
});




// Show form to create new user
app.get("/user/new", (req, res) => {
    res.render("new.ejs");
});

// Create new user
app.post("/user", (req, res) => {
    let { username, email, password } = req.body;
    let id = faker.string.uuid();

    let q = `INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)`;

    connection.query(q, [id, username, email, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("DB Error while creating user");
        }
        res.redirect("/user");
    });
});


// test the new features?
// 1. ADD USER
// URL to test:
// http://localhost:8080/user/new
// ➡ This opens the Add New User form
// ➡ Submit → user is added → redirected to /user



// Show delete user form
app.get("/user/delete", (req, res) => {
    res.render("delete.ejs");
});


// Delete user
app.delete("/user", (req, res) => {
    let { email, password } = req.body;

    let q = `SELECT * FROM users WHERE email=?`;

    connection.query(q, [email], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("DB Error");
        }

        if (result.length === 0) {
            return res.send("User not found");
        }

        let user = result[0];

        if (user.password !== password) {
            return res.send("Wrong password");
        }

        let q2 = `DELETE FROM users WHERE email=?`;

        connection.query(q2, [email], (err, result) => {
            if (err) {
                console.log(err);
                return res.send("Delete failed");
            }
            res.redirect("/user");
        });
    });
});



//2. DELETE USER
// URL to test:
// http://localhost:8080/user/delete
// ➡ Enter email + password
// ➡ If correct → user deleted → redirected to /user


app.listen("8080", () => {
    console.log("server is listening on port 8080...");
});