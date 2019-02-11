import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newGame } from '../actions/games'
import { Input, Button, Segment } from 'semantic-ui-react'


class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guess: '',
            three: [],
            four: [],
            five: [],
            six: [],
            seven: []
        }
    }


    handleChange = (e) => {
        this.setState({
            guess: e.target.value
        })
    }

    handleGuess = (e) => {
        e.preventDefault()


    }

    requestNewGame = (e) => {
        this.props.newGame(2)

    }



    render() {
        return (
            <div>
                <Segment>
                    {/* make more random? use ._shuffle? */}
                    {this.props.playletters ?
                        this.props.playletters.split('').sort(function(){return 0.5-Math.random()}).join('')
                        : null}
                </Segment>
                <form onSubmit={this.handleGuess}>
                    <Input type="text" onChange={this.handleChange} name="guess" placeholder='Guess Here' />
                    <Button basic color='pink' content='Enter' />
                </form>
                <Segment>
                    <Button onClick={this.requestNewGame} basic color='orange' content='NEW GAME' />
                </Segment>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    playletters: state.games.playletters
})

const mapDispatchToProps = dispatch => bindActionCreators({

    newGame: newGame

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
