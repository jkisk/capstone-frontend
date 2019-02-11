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
        const arr = this.props.validwords.validArr
        for (let ele of arr) {
            if (ele === this.state.guess.toLowerCase())
                this.state.three.push(ele.toLowerCase())
        }
    }






    requestNewGame = (e) => {
        this.props.newGame(2)

    }

    scoreGame = (e) => {

    }



    render() {
        return (
            <div>
                <Segment>
                    {/* make more random? use ._shuffle? */}
                    {this.props.playletters ?
                        this.props.playletters.split('').sort(function () { return 0.5 - Math.random() }).join('')
                        : null}
                </Segment>
                <form onSubmit={this.handleGuess}>
                    <Input type="text" onChange={this.handleChange} name="guess" placeholder='Guess Here' />
                    <Button basic color='pink' content='Enter' />
                </form>
                <Segment>
                    <Button onClick={this.requestNewGame} basic color='orange' content='NEW GAME' />
                </Segment>
                <Segment>
                    <Button onClick={this.handleGuess} basic color='teal' content='GUESS' />
                </Segment>
                <Segment>
                    <Button onClick={this.handleSubmit} basic color='teal' content='SCORE GAME' />
                </Segment>
                <Segment>
                    {this.state.three.map((ele) => {return ele + ' '})}
                </Segment>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    playletters: state.games.playletters,
    validwords: state.games.validwords
})

const mapDispatchToProps = dispatch => bindActionCreators({

    newGame: newGame

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
