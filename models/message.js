var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var messageSchema   = new Schema({
    text: String,
    user: String
});

module.exports = mongoose.model('Message', messageSchema);