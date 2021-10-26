const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema ({
    name: String,
    image: String,
    Manufacturer: String,
}, {timestamps: true});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;