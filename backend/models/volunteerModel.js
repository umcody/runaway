const Schemas = require("../schemas/schemas");
const Mongoose = require("mongoose");

module.exports = new Mongoose.model("volunteer", Schemas.userSchema);