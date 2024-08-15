const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const database = require('./database');
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
            date: moment(chat.date).format('DD/MM/YYYY')
        }));
        res.render('home.ejs', { chats: formattedChat });
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
