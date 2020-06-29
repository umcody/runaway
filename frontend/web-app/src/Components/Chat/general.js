import React, { useEffect } from "react";
import socketioclient from "socket.io-client";

function General(){
    
    const io = socketioclient("http://localhost:7000");
    
    useEffect(()=>{
        io.on("connection", socket =>{
            console.log("connect");
        })
    })


    return(
        <div>hello</div>
    )

}

export default General;