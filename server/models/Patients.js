const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patients = new Schema({
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
    },
    description: String,
    currentTreatments: String
},{
    collection : 'patients'
});

module.exports = mongoose.model('Patients',patients);