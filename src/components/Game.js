import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newGame } from '../actions/games'
import { Input, Button, Segment, Header } from 'semantic-ui-react'


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
            if (ele === this.state.guess.toLowerCase()) {
                if (ele.length === 3 && this.state.three.indexOf(ele) === -1) {
                    this.state.three.push(ele)
                }
                if (ele.length === 4 && this.state.four.indexOf(ele) === -1) {
                    this.state.four.push(ele)
                }
                if (ele.length === 5 && this.state.five.indexOf(ele) === -1) {
                    this.state.five.push(ele)
                }
                if (ele.length === 6 && this.state.six.indexOf(ele) === -1) {
                    this.state.six.push(ele)
                }
                if (ele.length === 7 && this.state.seven.indexOf(ele) === -1) {
                    this.state.seven.push(ele)
                }
            }
        }
        this.setState({
            guess: ''
        })
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
                    <Header as='h1'>
                        {/* make more random? use ._shuffle? */}
                        {this.props.playletters ?
                            this.props.playletters.split('').sort(function () { return 0.5 - Math.random() }).join('')
                            : null}
                    </Header>
                </Segment>
                <form onSubmit={this.handleGuess}>
                    <Input type="text" onChange={this.handleChange} value={this.state.guess} name="guess" placeholder='Guess Here' />
                    <Button basic color='pink' content='Enter' />
                </form>
                <Segment>
                    <Button onClick={this.requestNewGame} basic color='orange' content='NEW GAME' />
                </Segment>
                <Segment>
                    <Button onClick={this.handleSubmit} basic color='teal' content='SCORE GAME' />
                </Segment>
                <Segment>
                    <Header as='h2'>
                        {this.state.three.map((ele) => { return ele + ' ' })}
                        {this.state.four.map((ele) => { return ele + ' ' })}
                        {this.state.five.map((ele) => { return ele + ' ' })}
                        {this.state.six.map((ele) => { return ele + ' ' })}
                        {this.state.seven.map((ele) => { return ele + ' ' })}
                    </Header>
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
