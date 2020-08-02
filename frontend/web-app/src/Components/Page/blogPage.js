import React from "react";
import NavBar from "../NavBar/NavBar";
import BlogEditor from "../Blog/blogEditor";

export default function blogPage(props){
    return(
        <div>
            <div>
                <NavBar pages={["All Posts", "Your Posts", "Drafts"]}/>
            </div>
            <div>
                <BlogEditor/>
            </div>
        </div>
    )
}