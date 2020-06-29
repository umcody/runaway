const io = require("socket.io");

module.exports = function(app,mongoose,server){
    const socket = io(server);
    console.log(server);

    socket.on("connection",(socket)=>{
        console.log("connected");
        socket.join(general)
    })
}