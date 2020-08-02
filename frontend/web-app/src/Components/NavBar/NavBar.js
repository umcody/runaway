import React from "react";
import NavCell from "./NavCell.js";
import "../../styles/navBar.css";

export default function NavBar(props){
    return(
        <div className = "navBar">
            <img src = "/asset/logo.svg" className = "logo"></img>
            {
                props.pages.map(item =>{
                    return React.createElement(NavCell,{item : item});
                })
            }
        </div>
    )
}