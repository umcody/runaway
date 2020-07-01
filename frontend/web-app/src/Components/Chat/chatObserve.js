import React, { useEffect, useState } from "react";
import socketioclient from "socket.io-client";
let socket;
function ChatObservation() {

    const [queue, setQueue] = useState([0]);
    const [roomNum, setRoomNum] = useState(0);
    const [newMessage, setNewMessage] = useState("");



    function socket_joinRoom(room) {
        setRoomNum(room);
        socket.emit("joinRoom", room);
    }

    useEffect(() => {
        socket = socketioclient("http://localhost:7000");
        socket.emit("observeQueue", "joining General");

        socket.on("updateQueue", queue => {
            console.log(queue);
            setQueue(queue);
        });
        socket.on("updateMessage", function (message) {
            console.log("message recieved");
            setNewMessage(message);
        })
    }, [])

    function joinRoom(event) {
        socket_joinRoom(event.target.innerHTML);
        console.log(event.target)
    }

    return (
        <div>
            <h3>Chat Room Queues ( click to join )</h3>
            <div>{queue.map((room) => {
                return (
                    <div onClick={joinRoom}>
                        {room}
                    </div>
                )
            })}</div>

            <h3>Most Recent Messages</h3>
            <div>{newMessage}</div>
        </div>
        

    )

}

export default ChatObservation;