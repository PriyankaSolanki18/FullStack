const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "priya",
        to: "riya",
        message: "hi, how are you",
        created_at: new Date(),
    },
    {
        from: "aggu",
        to: "sdhau",
        message: "hi, hello, bye",
        created_at: new Date(),
    },
    {
        from: "diya",
        to: "riya",
        message: "hiiiiiii, how are you",
        created_at: new Date(),
    },
    {
        from: "priya",
        to: "nisha",
        message: "hi, how are you",
        created_at: new Date(),
    },
    {
        from: "rahul",
        to: "riya",
        message: "how are you",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
