const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    numberOfGuests: Number
});

module.exports = mongoose.model('Customer', CustomerSchema);
