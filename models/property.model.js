const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PropertySchema = new Schema({
    name: {type: String, required: true, max: 100},
    address: {type: String, required: true, max: 100},
    rooms: {type: Number, required: true},
    price: {type: Number, required: true},
    // picture: {type: String, required: true},
    owner_id: {type: String, required: true, max: 100}
});


// Export the model
module.exports = mongoose.model('Property', PropertySchema);
