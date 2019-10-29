import React, { Component } from 'react';

export class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password } = this.state
        fetch('https://leftovers-api.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        })
        .catch(error => console.error('Error:', error))
        .then(response => response.json())
        .then(response => this.checkUser(response))
    }

    checkUser = (response) => {
        response.jwt
        ? this.invokeLogIn(response.jwt)
        : console.log('Not Found')
    }

    invokeLogIn = (auth_token) => {
        localStorage.setItem('token', auth_token)
        this.props.fetchFoods()
        this.props.fetchWastes()
    }

    render() {
        const { username, password } = this.state
        return (
            <div>
                <form className='login-form' onSubmit={this.handleSubmit}>
                    <input className='username-input' name='username' placeholder='Enter your email...' value={username} onChange={this.handleChange} />
                    <input className='password-input' type='password' name='password' placeholder='Enter your password...' value={password} onChange={this.handleChange} />
                    <div>
                        <button className="button-login" type="submit"  onClick={this.handleSubmit}>Log In</button>
                        <button className="button-newUser" type="submit" onClick={this.props.handleNewUser}>New User</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;
