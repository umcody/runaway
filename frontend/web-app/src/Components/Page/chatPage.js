import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Chat from "../Chat/chatQueue";
import check from "../Auth/check";


export default function ChatPage(props) {
    useEffect(() => {
        async function checkAccess() {
            if (!(await check("volunteer"))) {
                window.location = "/login";
            }
        }
        checkAccess();
    }
    );
    return (
        <div style={{ position: "absolute", width: "100%", height: "100%" }} className="con container row">
            <NavBar pages={["Dashboard", "Chat Room", "Resources"]} />
            <Chat />
        </div>
    )
}