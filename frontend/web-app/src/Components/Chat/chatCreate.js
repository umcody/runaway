import React, { useEffect, useState} from "react";
import socketioclient from "socket.io-client";


/*
THIS COMPONENT LIES UNDER MOBILE. IT IS CURRENTLY IN WEB JUST FOR DEV. PURPOSE
*/
function ChatCreation(){
    
    const [queue, setQueue] = useState([]);

    function socket_joinRoom (room){
        return socketioclient("http://localhost:7000",{
            query:"r_var="+room
        });
    }


    useEffect(()=>{
        let random_room = Math.floor((Math.random() * 10) + 1);
        let socket = socket_joinRoom(random_room);

        socket.emit("pushQueue", random_room);

        console.log(socket);
    })
    
    return(
        <div>{`hello`}</div>
    )

}

export default ChatCreation;