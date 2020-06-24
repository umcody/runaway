import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

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
    }

    render(){
        return(
            <div>
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