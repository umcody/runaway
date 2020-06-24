module.exports = function(app,mongoose){

    const schemas = require("../schemas/schemas");
    console.log(schemas.blogSchema);

    // POST Blog post
    app.post("/api/volunteer/blog/post",function(req,res){
        // HANDLE POST
    })
    
}