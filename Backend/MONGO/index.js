const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successful ");
})
.catch(err => console.log(err));

// mongoose.connect('mongodb://127.0.0.1:27017/test');  // connect is a async func. issi ko likhne ka ek or tarika h
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

//creating document using model class
const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({ name:"adam", email:"adam@gmail.com", age:22});
// user1.save();

// const user2 = new User({ name:"eve", email:"eve@gmail.com", age:19});
// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// User.insertMany([
//     {name:"Tony", email:"tony@gamil.com", age:34},
//     {name:"Ram", email:"ram@gamil.com", age:23},
//     {name:"Jay", email:"jay@gamil.com", age:54},
// ]).then((res) => {
//     console.log(res);
// });


// User.findOne({ age: {$gt: 27}})
//     .then( res => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.findById({ _id: "695eaf38bfc5a2b01deded39"})
//     .then( res => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// User.updateOne({ name:"Jay"}, {age: 30})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.findOneAndUpdate({ name: "Jay"}, { age: 32}, { new: true })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.deleteOne({ name: "eve"})
//     .then((res) => {
//         console.log(res);
//     });


// User.deleteMany({ age: 31 })
//     .then((res) => {
//         console.log(res);
//     });

// User.findByIdAndDelete("695eace19117513219227a5e").then((res) => {
//     console.log(res);
// });