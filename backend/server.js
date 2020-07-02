const bodyParser = require("body-parser");
const Cors = require("cors");
const http = require('http');
const express = require("express");
const mongoose = require("mongoose");
const auth = require("./route/auth/auth");

const app = express();
const PORT = process.env.PORT || 7000;
const server = http.createServer(app);

//Routes
const blogRoute = require("./route/blog.js");
const chatRoute = require("./route/chat/chat.js");
const chatDataHandler = require("./route/chat.js"); //to be merged into chatRoute soon

//connect to the database // for now, the password will be in the file
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://runaway-database:2gn5YAq0BRwLc7tF@runaway-mrvci.mongodb.net/runaway?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Connection succeeded");
});

//MiddleWare
app.use(Cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());




app.get("/", function(req,res){
    return res.status(200).send("Hello World");
})


//Route function called
blogRoute(app,mongoose);
auth(app,mongoose);
chatRoute(app,mongoose,server);
chatDataHandler(app,mongoose);


app.set("json spaces", 2);



server.listen(PORT,() => {
    console.log("Hopefully the server is running on "+ PORT);
})

module.exports = app;
