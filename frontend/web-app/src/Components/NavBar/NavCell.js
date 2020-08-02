import React from "react";


export default function NavCell(props){
    console.log(props);
    return(
        <div className = "navCell">
            {props.item}
        </div>
    )
}