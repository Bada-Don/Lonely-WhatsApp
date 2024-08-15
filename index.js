const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const conversation = require('./models/conversation');
const moment = require('moment');
const { url } = require('inspector');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './src')));
app.use(express.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log('App is listening to port 3000');
});

// Finalized route for all chats
app.get('/', (req, res) => {
    conversation.find().then(chats => {
        const formattedChat = chats.map(chat => ({
            ...chat._doc,
            lastSeen: moment(chat.lastSeen).format('DD/MM/YYYY'),
            messages: chat.messages.map(message => ({
                ...message,
                text: message.text,
                formattedDate: moment(message.date).format('h:mm A')
            }))
        }));
        const activeChat = formattedChat[0];
        res.render('home.ejs', { chats: formattedChat, activeChat });
    });
});

// Send New Messages to current chat
app.post('/', (req, res) => {
    console.log(req.body); // Log the incoming request body
    const { conversationId, message } = req.body;

    if (!conversationId || !message) {
        return res.status(400).send('Missing conversationId or message.');
    }

    const newMessage = {
        text: message,
        date: new Date()
    };

    // Find the conversation by ID and push the new message to the messages array
    conversation.findByIdAndUpdate(
        conversationId,
        { $push: { messages: newMessage }, lastSeen: new Date() },
        { new: true }
    )
    .then(updatedConversation => {
        if (!updatedConversation) {
            return res.status(404).send('Conversation not found.');
        }
        console.log("Message added successfully!");
        res.redirect('/');
    })
    .catch(err => {
        console.error("Error adding message:", err);
        res.status(500).send("An error occurred while adding the message.");
    });
});



main().then(() => {
    console.log('Connection Successful');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/whatsapp');
}
