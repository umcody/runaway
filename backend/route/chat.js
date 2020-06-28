const chatModel = require("../models/chatModel.js");

module.exports = function(app, mongoose) {

    // POST chat transcript 
    app.post("/api/volunteer/chat/post", function(req, res) {
        const chatTranscript = req.body;

        chatModel.create(req.body, function(err, chat) {
            if(err) {
                res.json(err);
            } else {
                res.json({ success: "Chat saved successfully", chat });
            }
        });
    });
}