import React, { useEffect, useState} from "react";
import socketioclient from "socket.io-client";

function ChatObservation(){
    
    const [queue, setQueue] = useState([0]);

    

    useEffect(()=>{
        let socket = socketioclient("http://localhost:7000");
        socket.on("updateQueue", queue => {
            console.log(queue);
            setQueue(queue);
        });
    })

    return(
        <div>{queue[queue.length-1]}</div>
    )

}

export default ChatObservation;