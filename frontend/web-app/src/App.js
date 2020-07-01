import React from 'react';
import {Route} from 'react-router-dom';
import BlogEditor from './Components/Blog/blogEditor';
import ChatCreation from './Components/Chat/chatCreate';
import ChatObservation from './Components/Chat/chatObserve';

import './App.css';

function App() {
  return (
    <div className="App">
      <div style = {{"color":"fffff","font-size":"60px","font-weight":"700"}}>RunAway</div>
      <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
      <Route exact path = "/chatCreate" component = {ChatCreation}/>
      <Route exact path = "/chatObserve" component = {ChatObservation}/>
      <Route exact path = "/" component = {BlogEditor}/>
        
    </div>
  );
}

export default App;
