import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
      super(props);
    }

    this.state = {
        username: "",
        password: "",
        loginErrors: ""
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit(event) {
        const { username, password } = this.state;
    
        axios.post("http://localhost:3001/sessions",{
            user: {
            username: username,
            password: password
            }
        },
        { withCredentials: true }
        )
        .then(response => {
            if (response.data.logged_in) {
                this.props.handleSuccessfulAuth(response.data);
            }
        })
        .catch(error => {
            console.log("login error", error);
        });
        event.preventDefault();
    }
}
    
