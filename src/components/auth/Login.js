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
}