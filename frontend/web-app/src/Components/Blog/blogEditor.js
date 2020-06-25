import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

class BlogEditor extends React.Component{


    constructor(props) {
        super(props)
        this.state = { title: '', blogContent: '' } 

        //bind 'this'
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }


    handleChange(event) {
        if (event.target) {
            this.setState({ title: event.target.value})
        } else {
            this.setState({ blogContent: event })
        }
    }

    handleClick(event){
        console.log('Title');
        console.log(this.state.title);
        console.log('Blog Content');
        console.log(this.state.blogContent);
        //POST METHOD
        axios.post("/api/volunteer/blog/post", { data : this.state.blogContent});
    }

    render(){
        return(
            <div>
                <input
                    type='text'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <ReactQuill 
                    value={this.state.blogContent}
                    onChange={this.handleChange} 
                />
                <a onClick = {this.handleClick}>SUBMIT</a>
            </div>
        )
    }
}

export default BlogEditor;
