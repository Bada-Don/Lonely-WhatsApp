const mongoose = require("mongoose");

const chatSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    lastMsg:{
        type: String,
        required: true
    }, 
    date:{
        type: Date,
        required: true
    },
    profilePic:{
        type: String,
        required: false
    }
})