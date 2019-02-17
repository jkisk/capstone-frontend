import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import request from '../utils/request'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
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

                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='orange' textAlign='center'>
                            <Image src='/logo.png' /> Login to your account
        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input onChange={this.handleChange} name="playername" fluid icon='user' iconPosition='left' placeholder='Player Name' />
                                <Form.Input
                                    onChange={this.handleChange}
                                    name="password"
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />

                                <Button color='pink' fluid size='large'>
                                    Login
            </Button>
                            </Segment>
                        </Form>
                        <Message>
                            Need Account? <Link to='/signup'>Sign Up</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
            // <form onSubmit={this.handleSubmit}>
            //     <Input type="text" onChange={this.handleChange} name="playername" placeholder='Player Name' />
            //     <Input type="text" onChange={this.handleChange} name="password" placeholder='Password' />
            //     <Button basic color='pink' content='Submit' />
            // </form>
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
