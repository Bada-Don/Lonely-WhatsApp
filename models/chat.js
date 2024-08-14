const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const conversationSchema = new mongoose.Schema({
    recieverName: {
        type: String,
        required: true
    },
    recieverDP: {
        type: String,
        required: true
    },
    recieverPhone: {
        type: String,
        required: true
    },
    messages: [messageSchema],
    lastSeen: {
        type: Date,
        default: Date.now,
    },
})

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;