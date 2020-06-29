let io = require("socket.io");

module.exports = function (app, mongoose, server) {
    io = io(server);
    console.log(server);

    let queue = [];

    //upon Connection, create room and join 
    io.on("connection", (socket) => {
        var room = socket.handshake['query']['r_var'];
        socket.join(room);
        console.log('user joined room #' + room);

        //When on "pushQuery", push the room NUmber to the queue. 
        socket.on("pushQueue", function(roomNum){
            console.log("Need to push to room number "+ roomNum );
            queue.push(roomNum);
            console.log(queue);
            //Send all volunteers the updated Queue
            io.emit("updateQueue",queue);
        });
        
    })

}