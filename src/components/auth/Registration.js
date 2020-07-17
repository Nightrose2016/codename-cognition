import React, { Component } from 'react'

export default class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(event) {
        console.log("formsubmitted")
        event.preventDefault();
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="username" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                    <input type="password_confirmation" name="password_confirmation" placeholder="Password confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
