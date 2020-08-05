import React, { useEffect, useState } from "react";
import socketioclient from "socket.io-client";
import {Widget,addResponseMessage, toggleWidget} from "react-chat-widget";
import 'react-chat-widget/lib/styles.css';
import "./chat.css";

let socket;
function ChatComponent(props) {
    console.log(props);

    const [queue, setQueue] = useState([0]);
    const [roomNum, setRoomNum] = useState(0);


    function socket_joinRoom(room) {
        setRoomNum(room);
        socket.emit("joinRoom", room);
        socket.emit("volunteerJoined","dummy");
        console.log("volunteerJoined sent");
    }

    useEffect(() => {
        toggleWidget();
        socket = socketioclient("https://runaway-practicum.herokuapp.com/");

        socket_joinRoom(props[0])

        socket.on("updateMessage", function (message) {

            console.log("message recieved");
            addResponseMessage(message);
        })

        /* ToDo: When volunteer closes chat, socket.disconnect with data showing the volunteer is volunteer */

    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    
    function handleNewUserMessage(message){
        socket.emit("sendMessage",message);
    }
    
    function nothing(){}

    return (
        <div style = {{"z-index": props[1]}}>
            <Widget
                handleNewUserMessage = {handleNewUserMessage}
                title={`Room #${roomNum}`}
                subtitle="lets start"
                lancher={handleToggle => nothing(handleToggle)}
            />
        </div>
    )
}

export default ChatComponent;
