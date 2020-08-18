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
        const inputStyle = {
            borderRadius: 6,
            backgroundColor: 'rgba(172, 218, 255, 0.3)',
            width: '80%',
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
        // Can be changed to add or subtract categories
        let checkBoxArray = ['General Resources','LGBTQIA+','Kids and Teens', 'Substance Related Disorders', 'Mood Related Disorders', 'Anxiety and Trauma Related Disorders', 'Psychotic Disorders',
                             'Deliberate Self Harm', 'Eating Disorders', 'Domestic and Sexual Violence'];
        let outputCheckboxes = checkBoxArray.map(function(string, i){
        	return (<div><CheckBox value={string} id={'string_' + i} onChange={this.changeEvent.bind(this)} /><label htmlFor={'string_' + i}>{string}</label></div>)
        }, this);
        return (
            <div class="container col-9" style = {{"margin-top":"30px"}}>   
                <div class='row'>
                    <h2> New Resource </h2>
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
                    </div>
                    <div class='col-6 text-left'>
                        <h4> URL: </h4>
                        <input
                            type='text'
                            style={inputStyle}
                            name="url"
                            value={this.state.author}
                            onChange={this.handleChange} />
                    </div>
                </div>
                <div class='row'>
                    <div>
                        {outputCheckboxes}
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

export default Resource;
