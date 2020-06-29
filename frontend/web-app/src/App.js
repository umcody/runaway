import React from 'react';
import {Route} from 'react-router-dom';
import BlogEditor from './Components/Blog/blogEditor';
import generalChat from './Components/Chat/general';

import './App.css';

function App() {
  return (
    <div className="App">
      <h2 style = {{"color":"#ACD1E9"}}>RunAway</h2>
      <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
      <Route exact path = "/chat" component = {generalChat}/>
      <Route exact path = "/" component = {BlogEditor}/>
        
    </div>
  );
}

export default App;
