import React, { Component } from 'react'
import './CreateUserForm.css'

export default class CreateUserForm extends Component {
    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password, firstName, lastName } = this.state
        fetch('https://leftovers-api.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                    first_name: firstName,
                    last_name: lastName
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
    }

    render() {
        const { username, password, firstName, lastName} = this.state
        const { toggleNewUser } = this.props
        return (
            <div className='new-user-container'>
                <form className='createNewUser-form' onSubmit={this.handleSubmit}>
                <h3 className='new-user-message'>Please complete the new user form</h3>
                        <div className='new-user-content'>
                            <div>
                                <input className='new-name-input' placeholder='First Name...' name='firstName' value={firstName} onChange={this.handleChange} />
                            </div>
                            <div>
                                <input className='new-name-input' placeholder='Last Name...' name='lastName' value={lastName} onChange={this.handleChange} />
                            </div>
                            <div>
                                <input className='new-username-input' placeholder='Email...' name='username' value={username} onChange={this.handleChange} />
                            </div>
                            <div>
                                <input className='new-username-input' placeholder='Password...' type='password' name='password' value={password} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div>
                            <button className="button-login" type="submit">Create User</button>
                            <button className="button-login" type="submit" onClick={toggleNewUser}>Go Back</button>
                        </div>
                </form>
            </div>
        )
    }
}