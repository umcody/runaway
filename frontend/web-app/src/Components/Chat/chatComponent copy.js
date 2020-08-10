import React, { useEffect, useState } from "react";
import socketioclient from "socket.io-client";
import { Launcher } from 'react-chat-window';
import "./chat.css";

function ChatComponent(props){

    const[messages,setMessages] = useState([]);
    const[temp, setTemp] = useState([]);
    const[tracker, setTracker] = useState(0);
    const [socket,setSocket] = useState(socketioclient("https://runaway-practicum.herokuapp.com/"));
   // const [socket,setSocket] = useState(socketioclient("localhost:7000"));

    function socket_joinRoom(room) {
        socket.emit("joinRoom", room);
        socket.emit("volunteerJoined", "dummy");
        console.log("volunteerJoined sent");
    }


 
    useEffect(()=>{
        console.log(props);
        console.log("HEHHRHERHHER");
        socket_joinRoom(parseInt(props.props[0],10));
        console.log(messages);

        
        return () => {
            socket.off("updateMessage");
            socket.disconnect();
          };
    },[props.props[0],10]);

    useEffect(()=>{
        console.log("YEET");
        socket.on("updateMessage", message => {
            console.log(messages);
            setMessages((currentMessages)=>[...currentMessages, {
                author: 'them',
                type: 'text',
                data: {text:message}
            }]
            );
        });
    },[]);


// eslint-disable-line react-hooks/exhaustive-deps

    function _onMessageWasSent(message) {
        setMessages([...messages, message]);
        setTemp(messages);
        console.log(temp);
        socket.emit("sendMessage", message.data.text);
    }

        return (
            <div className ="chatComponent" style={{"height":"100%"}}>
                <Launcher
                    agentProfile={{
                        teamName: `Ongoing: Room #${props.props[0]}`
                    }}
                    onMessageWasSent={_onMessageWasSent}
                    messageList={messages}
                    isOpen = {true}
                    showEmoji
                />
            </div >
        )

}

export default ChatComponent;
