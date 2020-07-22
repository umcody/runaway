import React from "react";
import axios from 'axios';

class CheckBox extends React.Component {
    render() {
        return (
            <input type="checkbox" id={this.props.id} value={this.props.value} onChange={this.props.onChange} />
        )
    }
}

class Resource extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            url: '', 
            categories: []
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

    changeEvent(event) {
        let checkedArray = this.state.categories;
        let selectedValue = event.target.value;
        if (event.target.checked === true) {
                checkedArray.push(selectedValue);
                this.setState({ categories: checkedArray });
        } else {
        	let valueIndex = checkedArray.indexOf(selectedValue);
                checkedArray.splice(valueIndex, 1);
                this.setState({ categories: checkedArray });
        }
    }

    handleClick(event) {
        console.log('Title');
        console.log(this.state.title);
        console.log('URL');
        console.log(this.state.url);
        console.log('Categories');
        console.log(this.state.categories);

        const resourceData = {
            title: this.state.title,
            url: this.state.url,
            categories: this.state.categories
        }

        //POST METHOD
        axios.post("/api/volunteer/resource", resourceData);
    }

    render() {
        let checkBoxArray = ['Happy','Sad','Upset'];
        let outputCheckboxes = checkBoxArray.map(function(string, i){
        	return (<div><CheckBox value={string} id={'string_' + i} onChange={this.changeEvent.bind(this)} /><label htmlFor={'string_' + i}>{string}</label></div>)
        }, this);
        return (
            <div>
            <input
                type='text'
                placeholder="title"
                value={this.state.title}
                onChange={this.handleChange}
            />
            <br></br>
            <input
                type='text'
                placeholder="url"
                value={this.state.author}
                onChange={this.handleChange}
            />
            <div>
                {outputCheckboxes}
            </div>
            <div onClick={this.handleClick}>SUBMIT</div>
            </div>
        )
    }

}

export default Resource;
