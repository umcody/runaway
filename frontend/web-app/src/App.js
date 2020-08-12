import React from "react";
import { Route } from "react-router-dom";
import BlogPage from "./Components/Page/blogPage";
import Register from "./Components/Auth/register";
import Login from "./Components/Auth/login";
import Resource from "./Components/Resource/resource";
import Admin from "./Components/Admin/admin.js";
import ChatObservation from './Components/Page/chatPage';
import ChatCreation from "./Components/Chat/chatCreate";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/chat/observe" component={ChatObservation} />
      <Route exact path = "/chat/test" component = {ChatCreation}/>
      <Route exact path="/blog/:subPage" component={BlogPage} />
      <Route exact path="/resource/write" component={Resource} />
      <Route exact path="/admin/overview" component={Admin} />
      <Route exact path="/" component={Login} />



      
    </div>
  );
}

export default App;
