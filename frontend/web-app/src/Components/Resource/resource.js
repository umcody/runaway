import React from "react";
import NavBar from "../NavBar/NavBar";

function Resource(props){ // You can use class component if you want. 
    return(
        <div>
            <NavBar pages = {["hey","there"]}/>
        </div>
    );
}

export default Resource;