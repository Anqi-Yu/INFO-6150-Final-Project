const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
});

module.exports = mongoose.model('Order', OrderSchema);
