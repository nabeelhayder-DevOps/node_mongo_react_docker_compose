const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    }   

},
    {timestamps: true}
);

module.exports = mongoose.model('post', postSchema);