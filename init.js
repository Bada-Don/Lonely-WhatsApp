const Conversation = require('./models/chat');
const mongoose = require('mongoose');

main().then(() => {
    console.log('Connection Successful');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/whatsapp');
}

const sampleChat = new Conversation({
    recieverName: 'Kartik Sharma',
    recieverDP: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?cs=srgb&dl=pexels-pixabay-220429.jpg&fm=jpg',
    recieverPhone: '+91 88943 69418',
    messages: [
        {
            text: 'Hello',
        },
        {
            text: 'Kaam bhejde',
        }
    ]
});

sampleChat.save()
    .then(savedChat => {
        console.log('Successfully saved: \n', savedChat);
    })
    .catch((error) => {
        console.error('Error saving chat: \n', error);
    });
