let io = require("socket.io");

module.exports = function (app, mongoose, server) {
    io = io(server);
    console.log(server);

    let queue = [];

    //upon Connection, create room and join 
    io.on("connection", (socket) => {
        let room;
        socket.on("joinRoom", function (roomNum) {
            room = roomNum;
            ROOOOM = roomNum;
            socket.join(room);
            console.log('user joined room #' + room);

            //When on "pushQuery", push the room NUmber to the queue. 
            socket.on("pushQueue", function (roomNum) {
                queue.push(roomNum);
                console.log(queue);
                //Send all volunteers the updated Queue
                io.emit("updateQueue", queue);
            });
        })

        socket.on("sendMessage", function (message) {
            socket.broadcast.to(room).emit("updateMessage", message);
            console.log(`Sent to Room #${room} the message, ${message}`)
        })

        socket.on("observeQueue", function (roomNum) {
            io.emit("updateQueue", queue);
        })


        //Upon disconnection
        socket.on("disconnect", () => {
            if (room !== undefined) {
                let index = queue.indexOf(room);
                queue.splice(index, 1);
                console.log("room is taken out of the queue");
                io.emit("updateQueue", queue);
            }
            socket.disconnect();
        });
    });
}