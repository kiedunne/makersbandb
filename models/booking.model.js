const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookingSchema = new Schema({
    status: {type: String, required: true, max: 100},
    date: {type: Date, required: true, max: 100},
    user_id: {type: String, required: true, max: 100},
    property_id: {type: String, required: true, max: 100}
});

module.exports = mongoose.model('Booking', BookingSchema);
