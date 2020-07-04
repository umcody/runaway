import React from "react";
import axios from 'axios';

class Login extends React.Component{


    constructor(props) {
        super(props)
        this.state = { username: '',
                       password: '' } 

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
        console.log('Password');
        console.log(this.state.password);

        // Made an object so it can be passed into axios
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }

        //POST METHOD
        axios.post("/api/volunteer/login", credentials);
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
                Password
                <input
                    type='text'
                    name='password'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                </label>
                <div onClick = {this.handleClick}>SUBMIT</div>
              </div>
          )
      }
 }

 export default Login;
