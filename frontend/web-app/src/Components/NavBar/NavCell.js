import React from "react";
import {Link} from "react-router-dom";


export default function NavCell(props){
    const url = props.item.toLowerCase().replace(/\s/g,'');
    return(
        <div className = "navCell">
            <Link to = {`/blog/${url}`}>{props.item}</Link>
        </div>
    )
}