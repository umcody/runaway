const Schemas = require("../schemas/schemas");
const Mongoose = require("mongoose");

module.exports = new Mongoose.model("Chat Messages", Schemas.chatSchema);