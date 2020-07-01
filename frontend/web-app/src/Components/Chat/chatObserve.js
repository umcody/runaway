import React, { useEffect, useState } from "react";
import socketioclient from "socket.io-client";
import {Widget,addResponseMessage, toggleWidget} from "react-chat-widget";
import 'react-chat-widget/lib/styles.css';
import "./chat.css";

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

            addResponseMessage(message);
        })
    }, [])

    function joinRoom(event) {
        socket_joinRoom(event.target.innerHTML);
        toggleWidget();
        console.log(event.target)
    }
    
    function handleNewUserMessage(message){
        socket.emit("sendMessage",message);
    }
    function nothing(){}

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

            {/******************************************************/}

            <Widget
                handleNewUserMessage = {handleNewUserMessage}
                title={`Room #${roomNum}`}
                subtitle="lets start"
                lancher={handleToggle => nothing(handleToggle)}
            />

            <img src= "/asset/background-deco.png" style = {{position: "absolute", left:"-200px", height:"500px",opacity:"0.8"}}/>
        </div>
    )
}

export default ChatObservation;