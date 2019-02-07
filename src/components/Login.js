import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import request from '../utils/request'
import { Input, Button } from 'semantic-ui-react'


export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playername: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        request('/login', 'post', {
            playername: this.state.playername,
            password: this.state.password
        })
            .then(response => {
                this.setState({ showErrorMessage: false })
                localStorage.setItem('token', response.data.token)
                return request('/login')
            })
            .then(response => {
                this.props.setAuthentication(response.data)
                this.props.history.push('/toggle')
            })
            .catch(error => {
                this.setState({ showErrorMessage: true })
                console.log(error)
            })
    }

    closeErrorMessage = (e) => {
        e.preventDefault()
        this.setState({ showErrorMessage: false })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input type="text" onChange={this.handleChange} name="playername" placeholder='Player Name' />
                <Input type="text" onChange={this.handleChange} name="password" placeholder='Password' />
                <Button basic color='pink' content='Submit' />
            </form>
        )
    }
}