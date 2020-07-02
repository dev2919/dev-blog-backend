const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    title : 'string',
    article : 'string',
    timestamp : {type:'date',default:new Date()},
    likes:{type:'number',default:0}
});

const model = mongoose.model('Blog',BlogSchema);

module.exports = model;

