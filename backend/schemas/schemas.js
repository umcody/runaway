const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    chatSchema: {
        messages: [ 
            { 
                sender: { type: String, required: true },
                message: { type: String, required: true } 
            } 
        ] 
    },

    userSchema: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    },

    contentSchema: {},

    blogSchema: {
        author: { type: String},
        title: { type: String, required: true }, 
        date: { type: String, default: Date.now }, 
        content: { type: String, required: true },
        likes: { type: Number, required: false, default: 0 },
        url: { type: String, required: true, unique: true },
        comments: [ { type: String, required: false } ]
    },
}
