const mongoose = require('mongoose');
const LikeSchema = new mongoose.Schema({
    likes : 'number'
});

const model = mongoose.model('User',LikeSchema);

module.exports = model;