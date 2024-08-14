const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const database = require('./database');
const moment = require('moment');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './src')));

app.listen(3000, () => {
    console.log('App is listening to port 3000');
});

app.get('/', (req, res) => {
    const formattedChat = database.map(chat => ({
        ...chat,
        date: moment(chat.date).format('DD/MM/YYYY')
    }));

    res.render('home.ejs', { database: formattedChat });
});

main().then(() => {
    console.log('Connection Successful');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/whatsapp');
}
