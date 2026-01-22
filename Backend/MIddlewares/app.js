const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//middleware -> response send
// app.use((req,res,next) => {         // app.use har ek middleware ko har ek imcoming request ke saath execute karega, isiliye sabhi ko same response bhejega, isiliye vo api paths tk kabhi pauch hi nhi payega
//     // let {query} = req.query;
//     // console.log(query);
//     console.log("hi, I'm 1st middleware");
//     // res.send("middleware finished");
//     return next(); // return zaruri nhi likhna
//     // console.log("this is after next");
// });

// app.use((req,res,next) => {
//     console.log("hi, I'm 2nd middleware");
//      next();
// });


// logger - morgan
// app.use((req,res,next) => {
//     req.time = new Date( Date.now() ).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

app.use("/random", (req,res,next) => {
    console.log("i'm only for random");
    next();
});

// app.use("/api", (req,res,next) => {
//     let {token} = req.query;
//     if(token == "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });

const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token == "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/err",(req,res) => {
    abcd = abcd;
});

app.get("/admin", (req,res) => {
    throw new ExpressError(403,"Access to admin is forbidden");
});

// error handling middleware :-
app.use((err, req, res, next) => {
    // console.log("--------- ERROR ----------");
    let {status = 500, message = "some error occured"} = err;
    res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//     console.log("--------- ERROR2 MIDDLEWARE ----------");
//     next(err);
// });

app.get("/api", checkToken, (req,res) => {
    res.send("data");
});

app.get("/", (req,res) => {
    res.send("Hi, I am root");
});

app.get("/random",(req,res) => {
   res.send("this is a random page");
});

app.use((req,res) => {
    res.status(404).send("page not found");
});

app.listen(8080, () => {
    console.log("server listening on port 8080");
});