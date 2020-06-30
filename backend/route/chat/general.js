let io = require("socket.io");

module.exports = function (app, mongoose, server) {
    io = io(server);
    console.log(server);

    let queue = [];

    //upon Connection, create room and join 
    io.on("connection", (socket) => {

        var room = socket.handshake['query']['r_var'];
        //If it is a connection from a client (Defined Room Num)
        if (room !== undefined) {
            socket.join(room);
            console.log('user joined room #' + room);

            //When on "pushQuery", push the room NUmber to the queue. 
            socket.on("pushQueue", function (roomNum) {
                console.log("Need to push to room number " + roomNum);
                queue.push(roomNum);
                console.log(queue);
                //Send all volunteers the updated Queue
                io.emit("updateQueue", queue);
            });

        //If it is a connection from a volunteer
        } else {
            socket.join("general");
            console.log("joined general");
            socket.on("observeQueue", function (roomNum) {
                io.emit("updateQueue", queue);
            })
        }

        //Upon disconnection
        socket.on("disconnect",()=>{
            if(room !== undefined){
                let index = queue.indexOf(room);
                queue.splice(index,1);
                console.log("room is taken out of the queue");
                io.emit("updateQueue", queue);
            }
            socket.disconnect();
        });
    });
}