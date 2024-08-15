const Conversation = require('./models/conversation');
const mongoose = require('mongoose');

main().then(() => {
    console.log('Connection Successful');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/whatsapp');
}

const sampleChat = [{
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
},
{
    recieverName: 'Khushi Patel',
    recieverDP: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-774909.jpg&fm=jpg',
    recieverPhone: '+91 98765 43210',
    messages: [
        {
            text: 'Hi',
        },
        {
            text: 'What are you doing?',
        }
    ]
},
{
    recieverName: 'Neha Gupta',
    recieverDP: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-1130626.jpg&fm=jpg',
    recieverPhone: '+91 87654 32109',
    messages: [
        {
            text: 'Hey',
        },
        {
            text: 'Long time no see!',
        }
    ]
},
{
    recieverName: 'Rahul Singh',
    recieverDP: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg',
    recieverPhone: '+91 76543 21098',
    messages: [
        {
            text: 'Good evening',
        },
        {
            text: 'How was your day?',
        }
    ]
},
{
    recieverName: 'Priyanka Verma',
    recieverDP: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg',
    recieverPhone: '+91 65432 10987',
    messages: [
        {
            text: 'Good morning',
        },
        {
            text: 'How was your night?',
        }
    ]
}];

Conversation.insertMany(sampleChat);