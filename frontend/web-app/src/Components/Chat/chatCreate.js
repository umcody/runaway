import React, { useEffect, useState } from "react";
import socketioclient from "socket.io-client";


/*
THIS COMPONENT LIES UNDER MOBILE. IT IS CURRENTLY IN WEB JUST FOR DEV. PURPOSE
*/
let socket;

function ChatCreation() {

    const [queue, setQueue] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [roomNum, setRoomNum] = useState(0);

    function socket_joinRoom(room) {
        setRoomNum(room);
        socket.emit("joinRoom",room);
        socket.emit("pushQueue",room);
    }


    useEffect(() => {
        socket = socketioclient("http://localhost:7000");
        let random_room = Math.floor((Math.random() * 10) + 1);
        //join room
        socket_joinRoom(random_room);

        socket.on("updateMessage", function (message) {
            console.log("message recieved");
            setNewMessage(message);
        })
        //when exiting the component
        return () => {
            socket.disconnect();
        }
    },[])

    function sendMessage(event) {
        socket.emit("sendMessage", event.target.value);
    }


    return (
        <div>
            <div>{roomNum}</div>
            <div>{`hello`}</div>
            <input onClick={sendMessage}></input>
            <div>{newMessage}</div>
        </div>
    )

}

export default ChatCreation;