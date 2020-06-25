const blogModel = require("../models/blogModel.js");
const { Model } = require("mongoose");

module.exports = function(app,mongoose){

    const schemas = require("../schemas/schemas");
    console.log(schemas.blogSchema);

    // POST Blog post
    app.post("/api/volunteer/blog/post",function(req,res){
        blogModel.create({
            username: "default",
            title: "default",
            postTime: new Date(),
            content: req.body.blogData.content,
            likes:0,
            url:"default"
        });             
    })
    
}
