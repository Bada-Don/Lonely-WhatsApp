const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const conversation = require('./models/conversation');
const moment = require('moment');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './src')));

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


main().then(() => {
    console.log('Connection Successful');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/whatsapp');
}
