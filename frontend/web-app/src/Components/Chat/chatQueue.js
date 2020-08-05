import React, { useEffect, useState } from "react";
import socketioclient from "socket.io-client";
import {Widget,addResponseMessage, toggleWidget} from "react-chat-widget";
import ChatComponent from "./chatComponent";
import 'react-chat-widget/lib/styles.css';
import "./chat.css";

let socket;
function ChatObservation(props) {

    const [queue, setQueue] = useState([0]);
    const [roomNum, setRoomNum] = useState(0);
    const [joinedRoom, setJoinedRoom] = useState([]);
    const [joinedRoomSize, setJoinedRoomSize] = useState(0);


    function socket_joinRoom(room) {
        console.log(joinedRoom instanceof Array);
        setJoinedRoom(joinedRoom => joinedRoom.concat([[room, joinedRoomSize]]));
        setJoinedRoomSize(joinedRoomSize+1);
        console.log(joinedRoom.concat([[room, joinedRoomSize]]));
    }

    useEffect(() => {
        socket = socketioclient("https://runaway-practicum.herokuapp.com/");
        socket.emit("observeQueue", "joining General");

        socket.on("updateQueue", queue => {
            console.log(queue);
            setQueue(queue);
        });

        /* ToDo: When volunteer closes chat, socket.disconnect with data showing the volunteer is volunteer */

    }, [])// eslint-disable-line react-hooks/exhaustive-deps

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

            {/******************************************************/}
            <div>
                {joinedRoom.map((item)=>{
                    return (<ChatComponent props = {item}/>);
                })}
            </div>
            

            <img src= "/asset/background-deco.png" alt="graphics" style = {{position: "absolute", left:"-200px", height:"500px",opacity:"0.8"}}/>
        </div>
    )
}

export default ChatObservation;
