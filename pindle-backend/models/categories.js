const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

const categories = mongoose.model('categories', categoriesSchema);

module.exports = categories;