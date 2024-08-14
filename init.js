const chat = require("./models/chat");
const mongoose = require("mongoose");
main().then(() => {
    console.log("Connection Successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const allChats = [
    
]


chat.insertMany(allChats);