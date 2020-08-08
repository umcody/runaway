import React, { useEffect, useState } from "react";
import socketioclient from "socket.io-client";


/*
THIS COMPONENT LIES UNDER MOBILE. IT IS CURRENTLY IN WEB JUST FOR DEV. PURPOSE
*/
let socket;

function ChatCreation() {

    //const [queue, setQueue] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [roomNum, setRoomNum] = useState(0);

    //Joins room and updates queue
    function socket_joinRoom(room) {
        setRoomNum(room);
        socket.emit("joinRoom",room);
        socket.emit("pushQueue",room);
    }


    useEffect(() => {
        socket = socketioclient("localhost:7000");
        //socket = socketioclient("https://runaway-practicum.herokuapp.com/");
        //generate random #
        let random_room = Math.floor((Math.random() * 1000) + 1);
        
        socket_joinRoom(random_room);

        //When the server responds with "updateMessage"
        socket.on("updateMessage", function (message) {
            console.log("message recieved");
            //This is where u should handle new messages. ("message" var is the new message)
            setNewMessage(message);
        })
        //when exiting the component
        return () => {
            socket.emit("disconnectUser", "user");
        }
    },[])

    //When clicked, call sendMessage function to send message to the server
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
