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
            imageURL: '',
            author: '',
            readTime: ''
        }

        //bind 'this'
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        if (event.target) {
            this.setState({ [event.target.name]: event.target.value })
        } else {
            this.setState({ blogContent: event })
        }
    }

    handleClick(event) {
        const blogData = {
            title: this.state.title,
            content: this.state.blogContent,
            imageURL: this.state.imageURL,
            author: this.state.author,
            readTime: this.state.readTime
        }
        console.log(blogData);
        //POST METHOD
        axios.post("/api/volunteer/blog/post", blogData);
    }

    render() {
        const inputStyle = {
            borderRadius: 6,
            backgroundColor: 'rgba(172, 218, 255, 0.3)',
            width: '80%',
            marginBottom: '5%',
            border: 'none',
            boxShadow: 'none'
        };
        const blogStyle = {
            borderRadius: 6,
            backgroundColor: 'rgba(172, 218, 255, 0.3)',
            marginBottom: '5%',
            border: 'none',
            boxShadow: 'none'
        };
        const buttonStyle = {
            backgroundColor: "#FF9EDA",
            borderRadius: 5,
            height: '150%',
            width: '10%',
            border: 'none',
            boxShadow: 'none'
        };
        return (
            <div class="container">
                <div class='row'>
                    <h2> New Post </h2>
                </div>
                <div class='row'>
                    <div class='col-6 text-left'>
                        <h4> Title: </h4>
                        <input
                            type='text'
                            style={inputStyle}
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange} />
                        <h4> Read Time: </h4>
                        <input
                            type='text'
                            style={inputStyle}
                            name="readTime"
                            value={this.state.readTime}
                            onChange={this.handleChange} />
                    </div>
                    <div class='col-6 text-left'>
                        <h4> Author: </h4>
                        <input
                            type='text'
                            style={inputStyle}
                            name="author"
                            value={this.state.author}
                            onChange={this.handleChange} />
                        <h4> Image URL: </h4>
                        <input
                            type='text'
                            style={inputStyle}
                            name="imageURL"
                            value={this.state.imgURL}
                            onChange={this.handleChange} />
                    </div>
                </div>
                <div class='row'>
                    <div class='col text-left'>
                    <h4> Text: </h4>

                    <ReactQuill
                        style={blogStyle}
                        value={this.state.blogContent}
                        onChange={this.handleChange} />
                    </div>
                </div>
                <div class ='row'>
                    <div class= 'col text-right'>
                        <button type='button' onClick={this.handleClick} style={buttonStyle}> Submit </button>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogEditor;
