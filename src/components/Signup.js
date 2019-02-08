import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createPlayer } from '../actions/players';
import { Input, Button } from 'semantic-ui-react'



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
        if (!this.state.playername || !this.state.password || !this.state.matchPassword){
            this.setState({showErrorMessage: true})
        }
        else if (this.state.password === this.state.matchPassword) {
            this.props.createPlayer({ 
                playername: this.state.playername, password: this.state.password
            }, () => { this.props.history.push('/signin') })
        }
        else if (this.state.password === this.state.matchPassword){
            this.setState({showErrorMessage: true})
        }
    }

    closeErrorMessage = (e) => {
        e.preventDefault()
        this.setState({showErrorMessage: false})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input type="text" onChange={this.handleChange} name="playername" placeholder='Player Name' />
                <Input type="text" onChange={this.handleChange} name="password" placeholder='Password' />
                <Input type="text" onChange={this.handleChange} name="matchPassword" placeholder='please retype Password' />
                <Button basic color='teal' content='Create' />
            </form>
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