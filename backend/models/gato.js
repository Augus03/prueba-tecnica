const mongoose = require('mongoose');
const { Schema } = mongoose;

const gatoSchema = new Schema({
    nombre: {type: String, required: true},
    raza: {type: String, required: true},
    edad: {type: Number, required: true},
    foto: {type: String, required: true}
});

module.exports = mongoose.model('gato', gatoSchema);