import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

class BlogEditor extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            title: '',
            blogContent: '',
            imageURL: "",
            author:"",
            readTime: ""
        }

        //bind 'this'
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(event) {
        if (event.target) {
            this.setState({ [event.target.placeholder]: event.target.value })
        } else {
            this.setState({ blogContent: event })
        }
    }

    handleClick(event) {
        console.log('Title');
        console.log(this.state.title);
        console.log('Blog Content');
        console.log(this.state.blogContent);

        const blogData = {
            title: this.state.title,
            content: this.state.blogContent,
            imageURL: this.state.imageURL,
            author: this.state.author,
            readTime: this.state.readTime
        }
        //POST METHOD
        axios.post("/api/volunteer/blog/post", blogData);
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    placeholder="author"
                    value={this.state.author}
                    onChange={this.handleChange}
                /><input
                    type='text'
                    placeholder="readTime"
                    value={this.state.readTime}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    placeholder="imageURL"
                    value={this.state.imgURL}
                    onChange={this.handleChange}
                />
                <ReactQuill
                    value={this.state.blogContent}
                    onChange={this.handleChange}
                />
                <div onClick={this.handleClick}>SUBMIT</div>
            </div>
        )
    }
}

export default BlogEditor;
