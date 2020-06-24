const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    chatSchema: {},
    userSchema: {},
    contentSchema: {},
    blogSchema: {
        user: { type: Schema.Types.ObjectId, ref: "User", required: false },
        title: { type: String, required: true }, 
        postTime: { type: String, required: true }, 
        content: { type: String, required: true },
        likes: { type: Number, required: false, default: 0 },
        url: { type: String, required: true },
        comments: [{ type: String, required: false }]
    },
}
