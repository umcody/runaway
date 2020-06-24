import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

class BlogEditor extends React.Component{


    constructor(props) {
        super(props)
        this.state = { blogContent: '' } 

        //bind 'this'
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }


    handleChange(value) {
        this.setState({ blogContent: value })
        
    }

    handleClick(event){
        console.log(this.state.blogContent);
        //POST METHOD
        axios.post("/api/volunteer/blog/post", { data : this.state.blogContent});
    }

    render(){
        return(
            <div>
                <input></input>
                 <ReactQuill 
                  value={this.state.blogContent}
                  onChange={this.handleChange} 
                  />
                  <div onClick = {this.handleClick}>SUBMIT</div>
            </div>
        )
    }
}

export default BlogEditor;
