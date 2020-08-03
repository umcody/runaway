import React from "react";
import NavBar from "../NavBar/NavBar";
import BlogEditor from "../Blog/blogEditor";


export default function blogPage(props){
    return(
        <div style = {{position: "absolute",width:"100%", height:"100%"}} className="con container row">
                <NavBar pages={["All Posts", "Your Posts", "Drafts"]}/>
                <BlogEditor/>
        </div>
    )
}