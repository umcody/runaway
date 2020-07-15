import React from "react";
import axios from 'axios';

class Register extends React.Component{


    constructor(props) {
        super(props)
        this.state = { username: '',
                       email: '',
                       password: '',
                       access: ''} 

        //bind 'this'
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }


    handleChange(event) {
        const target = event.target;
        const name = event.target.name;
        const value = target.value;

        this.setState ({
            [name]: value
        });
    }

    handleClick(event){
        console.log('Username');
        console.log(this.state.username);
        console.log('Email');
        console.log(this.state.email);
        console.log('Password');
        console.log(this.state.password);
        console.log('Access');
        console.log(this.state.access);

        // Made an object so it can be passed into axios
        const credentials = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            access: this.state.access
        }

        //POST METHOD
        axios.post("/api/volunteer/register", credentials);
    }

    render(){
        return(
            <div>
                <label>
                    Username
                    <input
                        type='text'
                        name='username'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </label>
                
                <br></br>
                <br></br>
                
                <label>
                    Email
                    <input
                        type='text'
                        name='email'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </label>
                
                <br></br>
                <br></br>

                <label>
                    Password
                    <input
                        type='text'
                        name='password'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </label>
                
                <br></br>
                <br></br>

                <label>
                    User Type
                    <select 
                        name='access'
                        value={this.state.access} 
                        onChange={this.handleChange}>
                        <option value="admin">Admin</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="blog editor">Blog Editor</option>
                    </select>
                </label>
                <div onClick = {this.handleClick}>SUBMIT</div>
              </div>
          )
      }
 }

 export default Register;
