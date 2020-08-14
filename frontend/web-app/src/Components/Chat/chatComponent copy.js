import React, { useEffect, useState } from "react";
import socketioclient from "socket.io-client";
import { Launcher } from 'react-chat-window';
import "./chat.css";

function ChatComponent(props){

    const[messages,setMessages] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const[socket,setSocket]=useState(socketioclient("https://runaway-practicum.herokuapp.com/"));
   // const [socket,setSocket] = useState(socketioclient("localhost:7000"));

    function socket_joinRoom(room) {
        socket.emit("joinRoom", room);
        socket.emit("volunteerJoined", "dummy");
        console.log("volunteerJoined sent");
    }

    function handleClick(){
        let index = props.joinedRoom.indexOf(props.props);
        props.deleteRoom(index);
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
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[parseInt(props.props[0],10)]);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


// eslint-disable-line react-hooks/exhaustive-deps

    function _onMessageWasSent(message) {
        setMessages([...messages, message]);
        console.log(message);
        socket.emit("sendMessage", message.data.text);
        console.log(socket);
    }

        return (
            <div className ="chatComponent" style={{"height":"100%"}}>
                <Launcher
                    agentProfile={{
                        teamName: `Ongoing: Room #${props.props[0]}`
                    }}
                    onMessageWasSent={_onMessageWasSent}
                    messageList={messages}
                    handleClick = {handleClick}
                    isOpen = {true}
                    showEmoji
                />
            </div >
        )

}

export default ChatComponent;
