const mongoose = require('mongoose');
const { Schema } = mongoose;

const favSchema = new Schema({
    //breeds: {type: Object, require: true},
    id: {type: String, require: true},
    url: {type: String},
    width: {type: Number},
    height: {type: Number}
})

favSchema.methods.setUrl = function setUrl(nameUrl) {
    this.url = `${nameUrl}`
}

module.exports = mongoose.model('favorito', favSchema);