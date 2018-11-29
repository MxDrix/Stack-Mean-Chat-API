/*
Imports & configs
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
//


/*
Model definition
*/
const chatSchema = new Schema({
    nom: String,
    email_user: String,
    dateMessage: { type: Date, default: Date.now },
    content: String
})
//


/*
Export
*/
const ChatModel = mongoose.model('chat', chatSchema);
module.exports = ChatModel;
//