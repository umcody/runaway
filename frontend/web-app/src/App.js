
import React from 'react';
import BlogEditor from './Components/Blog/blogEditor';
import Login from './Components/Auth/login';
import Register from './Components/Auth/register';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 style = {{"color":"#ACD1E9"}}>RunAway</h2>
      <h4 style = {{"color":"#ACD1E9"}}>Register</h4>
      <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
       {/* <BlogEditor/> */}
       {/* <Login/> */}
        <Register/>
    </div>
  );
}

export default App;
