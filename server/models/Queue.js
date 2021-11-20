const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queueItems = new Schema({
    date: {
        type: Date,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    petName: {
        type: String,
        required: true
    },
    petType: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
},{
    collection : 'queues'
});

module.exports = mongoose.model('Queue',queueItems);