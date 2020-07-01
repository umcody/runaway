const blogModel = require("../models/blogModel.js");
const { Model } = require("mongoose");

module.exports = function(app,mongoose){

    // POST Blog post
    app.post("/api/volunteer/blog/post", function(req, res) {
        console.log(req.body);

        const title = req.body.title;
        const date = (new Date()).toJSON();
        blogModel.create({
            author: "default",
            title: req.body.title,
            date: new Date(),
            content: req.body.content,
            url: `${date}/${title}`
        });    

    })
    
    // GET Blog posts, limit to 20 posts
    app.get("/api/volunteer/blog/get/:page", function(req, res) {
        const resPerPage = 20;  // results per page
        const page = req.params.page || 1; // Page
        
        blogModel.find(null, null, { skip: (resPerPage * (page - 1)), limit: resPerPage }, function(err, blogs) {
            if (err) throw new Error(err);
            const count = blogs.length;

            // if there are no more blog posts, return no more found
            if (count == 0) {
                res.send("No more blog posts");
            } else {
                res.json(blogs);
            }
        });

    })

    app.get("/api/volunteer/blog/get/url/:url", function(req, res) {
        const url = req.params.url;

        blogModel.findOne({ url: url }, function(err, blog) {
            if (err) throw new Error(err); 
            if (!blog) {
                res.send(`No blog post found from url: ${url}`);
            } else {
                res.json({success: "Found blog post", blog});
            }
        });
    });
}
