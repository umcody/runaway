import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import BlogEditor from "../Blog/blogEditor";
import AllBlogs from "../Blog/blogs";
import check from "../Auth/check";
import AccountBar from "../AccountBar/AccountBar";




export default function BlogPage(props) {
    useEffect(() => {
        async function checkAccess() {
            if (!(await check("blog editor"))) {
                window.location = "/login";
            }
        }
        checkAccess();
    }, [])

    return (
        <div style={{ position: "absolute", width: "100%", height: "100%" }} className="con container row">
            <NavBar pages={["All Posts", "Your Posts", "Drafts"]} />
            <div className = "col-10">
                    <AccountBar />
                    <Route path="/blog/yourposts" component={BlogEditor} />
                    <Route path="/blog/allposts" component={AllBlogs} />
            </div>
        </div>
    )
}