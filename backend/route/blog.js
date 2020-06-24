module.exports = function(app,mongoose){

    // POST Blog post
    app.post("/api/volunteer/blog/post",function(req,res){
        console.log("it is working?");
        console.log(req.body);                
    })
    
}
