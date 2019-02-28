import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createPlayer } from '../actions/players';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
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
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='black' textAlign='center'>
                            Create your account
        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input
                                    onChange={this.handleChange}
                                    autoComplete='off'
                                    name="playername"
                                    placeholder='Player Name' />
                                <Form.Input
                                    onChange={this.handleChange}
                                    autoComplete='off'
                                    name="password"
                                    fluid
                                    placeholder='Password'
                                    type='password'
                                />
                                <Form.Input
                                    onChange={this.handleChange}
                                    autoComplete='off'
                                    name="matchPassword"
                                    placeholder='Retype Password'
                                    type='password'
                                />

                                <Button id="sign-btn" fluid size='large'>
                                    Sign Up!
            </Button>
                            </Segment>
                        </Form>

                        {this.state.showErrorMessage ? (
                            <Message className='error'>
                                All fields required and passwords must match
                                <Button color='pink' onClick={this.closeErrorMessage}>
                                    close message
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