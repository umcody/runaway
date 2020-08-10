import React from "react";
import NavBar from "../NavBar/NavBar";
import Chat from "../Chat/chatQueue";


export default function blogPage(props){
    return(
        <div style = {{position: "absolute",width:"100%", height:"100%"}} className="con container row">
                <NavBar pages={["Dashboard", "Chat Room", "Resources"]}/>
                <Chat/>
        </div>
    )
}