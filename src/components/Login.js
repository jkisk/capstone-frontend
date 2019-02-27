import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import request from '../utils/request'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { setAuthentication } from '../actions/auth'
import {Link} from 'react-router-dom'


class Login extends Component {
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
                this.props.history.push('/play')
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
            <div className='login-form'>
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='black' textAlign='center'>
                            Login to your account
        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input onChange={this.handleChange} name="playername" fluid placeholder='Player Name' />
                                <Form.Input
                                    onChange={this.handleChange}
                                    name="password"
                                    fluid
                                    placeholder='Password'
                                    type='password'
                                />

                                <Button id='log-btn' fluid size='large'>
                                    Login
            </Button>
                            </Segment>
                        </Form>
                        {this.state.showErrorMessage ? (
                            <Message className="error">
                                Login failed
                                <Button remove onClick={this.closeErrorMessage} content='X'/>
                            </Message> 
                        ) : null}
                        <Message>
                            Need Account? <Link to='/signup'>Sign Up</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    authentication: state.authentication
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setAuthentication: setAuthentication
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
