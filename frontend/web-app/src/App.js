import React from "react";
import { Route } from "react-router-dom";
import BlogPage from "./Components/Page/blogPage";
import Blogs from "./Components/Blog/blogs";
import Register from "./Components/Auth/register";
import Login from "./Components/Auth/login";
import Resource from "./Components/Resource/resource";
import Admin from "./Components/Admin/admin.js";
<<<<<<< HEAD
import ChatObservation from './Components/Page/chatPage';
import ChatCreation from "./Components/Chat/chatCreate";

import "bootstrap/dist/css/bootstrap.min.css";

=======
import ChatObservation from "./Components/Chat/chatObserve";

import "bootstrap/dist/css/bootstrap.min.css";

>>>>>>> ff1a5f35984f4ac3795257bdf08bd9c2f689ddab
import "./App.css";

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/chat/observe" component={ChatObservation} />
      <Route exact path = "/chat/test" component = {ChatCreation}/>
<<<<<<< HEAD
      <Route exact path="/blog/write" component={BlogPage} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/resource/write" component={Resource} />
      <Route exact path="/admin/overview" component={Admin} />
      <Route exact path="/" component={Login} />



      
=======
      <Route exact path = "/blog/write" component = {BlogPage}/>
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path = "/resource/write" component = {Resource}/>
      <Route exact path = "/admin/overview" component = {Admin}/>
      <Route exact path = "/" component = {Login}/>



>>>>>>> ff1a5f35984f4ac3795257bdf08bd9c2f689ddab
    </div>
  );
}

export default App;
