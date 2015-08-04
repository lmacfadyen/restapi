var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var messageSchema   = new Schema({
    text: String,
    user: {type: String, default: 'Anon'}
});

module.exports = mongoose.model('Message', messageSchema);