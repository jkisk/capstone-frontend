import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createPlayer } from '../actions/players';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playername: '',
            password: '',
            matchPassword: '',
            showErrorMessage: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.playername || !this.state.password || !this.state.matchPassword) {
            this.setState({ showErrorMessage: true })
        }
        else if (this.state.password === this.state.matchPassword) {
            this.props.createPlayer({playername: this.state.playername, password: this.state.password}, () => { this.props.history.push('/login') })
        }
        else if (this.state.password !== this.state.matchPassword) {
            this.setState({ showErrorMessage: true })
        }
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
                            <Image src='/logo.png' /> Create your account
        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input
                                    onChange={this.handleChange}
                                    name="playername"
                                    fluid icon='user'
                                    iconPosition='left'
                                    placeholder='Player Name' />
                                <Form.Input
                                    onChange={this.handleChange}
                                    name="password"
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />
                                <Form.Input
                                    onChange={this.handleChange}
                                    name="matchPassword"
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Retype Password'
                                    type='password'
                                />

                                <Button color='pink' fluid size='large'>
                                    Sign Up!
            </Button>
                            </Segment>
                        </Form>

                        {this.state.showErrorMessage ? (
                            <Message>
                                All fields required and passwords must match
                                <Button color='pink' onClick={this.closeErrorMessage}>
                                    close help message
                                </Button>
                            </Message>
                        ) : null}
                        <Message>
                            Already have an account? <Link to='/login'>Log In</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   
})
const mapDispatchToProps = dispatch => bindActionCreators({
    createPlayer: createPlayer

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)