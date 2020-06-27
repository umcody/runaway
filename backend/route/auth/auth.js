const register = require("./register");
const login = require("./login");
const auth_config = require("../../auth_config/passport");

module.exports = function(app,mongoose){
    auth_config(app,mongoose);
    register(app,mongoose);
    login(app,mongoose);


    app.get("/findUser", function (req, res) { // Routing for authenticating through JWT
        passport.authenticate("jwt", { session: false }, function (err, user) {
            if (err) {
                console.log(err)
            } else {
                res.json(user);
            }
        })(req, res);
    })
}