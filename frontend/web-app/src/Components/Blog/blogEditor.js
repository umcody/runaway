import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Button,
  Text
} from 'react-native';
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
            <View style={styles.container}>
                <Text style = {styles.newPost}>
                    New Post
                </Text>
                <View style={styles.leftContainer}>

                    <Text style = {styles.title}>
                        Title:
                    </Text>
                    <TextInput style = {styles.titleInput}
                        name='title'
                        type='text'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
            
                    <Text style = {styles.readTime}>
                        Read Time:
                    </Text>
                    <TextInput style = {styles.readTimeInput}
                        name='readTime'
                        type='text'
                        value={this.state.readTime}
                        onChange={this.handleChange}
                    />
                </View>

                <View style={styles.rightContainer}>
                    <Text style = {styles.author}>
                        Author:
                    </Text>
                    <TextInput style = {styles.authorInput}
                        name='author'
                        type='text'
                        value={this.state.author}
                        onChange={this.handleChange}
                    />

                    <Text style = {styles.image}>
                        Image URL:
                    </Text>
                    <TextInput style = {styles.imageInput}
                        name='imageURL'
                        type='text'
                        value={this.state.imageURL}
                        onChange={this.handleChange}
                    />
                </View>
                
                <View style={styles.editorContainer}>
                    <Text style = {styles.editor}>
                        Text:
                    </Text>
                    <ReactQuill
                        value={this.state.blogContent}
                        onChange={this.handleChange}
                    />
                </View>

                <View style={styles.saveContainer}>
                    <Button
                        onPress={this.handleClick}
                        title="Save"
                        color="#FF9EDA"
                    />
                    <Button
                        // Fill this in
                        // onPress={ }
                        title="Cancel"
                        color="#FF9EDA"
                    />
                </View>
                
            </View>
        )
    }
}

export default BlogEditor;

const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

const styles = StyleSheet.create({
    container: {
        paddingTop: dimensions.fullHeight/15,
        paddingLeft: dimensions.fullWidth/6
    },
    editorContainer: {
        position: 'relative',
        top: -dimensions.fullHeight/10,
        marginRight: dimensions.fullWidth/6,
        paddingLeft: 0,
        backgroundColor: '#acdaff'
    },
    saveContainer: {
        position: 'relative',
        left: (dimensions.fullWidth - 2 * dimensions.fullWidth/6) / 2,
        width: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftContainer: {
        position: 'relative',
        left: 0,
        height: 150,
        top: 0
    },
    rightContainer: {
        position: 'relative',
        left: (dimensions.fullWidth - 2 * dimensions.fullWidth/6) / 2,
        top: -152,
        height: 150,
    },
    editor: {
        position: 'relative',
        width: 150,
        height: 28,
        left: 0,
        top: -25,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'left'
    },
    newPost: {
        position: 'relative',
        width: 155,
        height: 42,
        left: 0,
        top: 0,
        fontSize: 36,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 42,
        textAlign: 'left'
    },
    image: {
        position: 'relative',
        width: 150,
        height: 28,
        left: 0,
        top: 22,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'left'
    },
    imageInput: {
        position: 'relative',
        width: 450,
        height: 30,
        left: 0,
        top: 22,
        borderRadius: 6,
        backgroundColor: '#acdaff'
    },
    title: {
        position: 'relative',
        width: 47,
        height: 28,
        left: 0,
        top: 22,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'left'
    },
    titleInput: {
        position: 'relative',
        width: 450,
        height: 30,
        left: 0,
        top: 20,
        borderRadius: 6,
        backgroundColor: '#acdaff'
    },
    readTime: {
        position: 'relative',
        width: 114,
        height: 28,
        left: 0,
        top: 22,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'left'
    },
    readTimeInput: {
        position: 'relative',
        width: 232,
        height: 30,
        left: 0,
        top: 20,
        borderRadius: 6,
        backgroundColor: '#acdaff'
    },
    author: {
        position: 'relative',
        width: 114,
        height: 28,
        left: 0,
        top: 20,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'left'
    },
    authorInput: {
        position: 'relative',
        width: 450,
        height: 30,
        left: 0,
        top: 22,
        borderRadius: 6,
        backgroundColor: '#acdaff'
    },
})
