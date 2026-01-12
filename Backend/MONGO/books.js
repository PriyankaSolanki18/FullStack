const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successful ");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

/****Above thing has to be written every time to establish connection with db******/

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 1200,
// });
// book1.save().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// let book1 = new Book({
//     title: "How to kill", // if we forget required constraint then  we get error
//     author: "Lee cooper",
//     price: "1000",  // even if constraint type was number but here we are passing it as a string but it is valid because it can be converted into a number eventually when getting saved in DB
// });
// book1.save().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

Book.findByIdAndUpdate("695ec36c5b4ddd7bc148c73f", {price: 9600}, {runValidators: true})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});