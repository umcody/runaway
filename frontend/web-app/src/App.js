import React from 'react';
import BlogEditor from './Components/Blog/blogEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 style = {{"color":"#ACD1E9"}}>RunAway</h2>
      <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
      <BlogEditor/>
    </div>
  );
}

export default App;
