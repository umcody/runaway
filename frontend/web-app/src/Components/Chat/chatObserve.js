import React, { useEffect, useState} from "react";
import socketioclient from "socket.io-client";

function ChatObservation(){
    
    const [queue, setQueue] = useState([0]);

    
    let socket;

    useEffect(()=>{
        socket = socketioclient("http://localhost:7000");
        socket.emit("observeQueue","joining General");
        socket.on("updateQueue", queue => {
            console.log(queue);
            setQueue(queue);
        });
    },[])

    return(
        <div>{queue.map((room)=>{
            return(
                <div>
                    {room}
                </div>
            )
        })}</div>
    )

}

export default ChatObservation;