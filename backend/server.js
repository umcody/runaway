const express = require("express");

const app = express();

const PORT = process.env.PORT || 7000

app.get("/", function(req,res){
    return res.status(200).send("Hello World");
})

app.listen(PORT,() => {
    console.log("Hopefully the server is running on "+ PORT);
})

module.exports = app;