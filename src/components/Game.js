import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newGame } from '../actions/games'
import { scoreGame } from '../actions/scores'
import { Input, Button, Segment, Header } from 'semantic-ui-react'
import Playletters from './Playletters'
import CurrentScore from './CurrentScore'
import TimeRemaining from './TimeRemaining'




class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guess: '',
            three: [],
            four: [],
            five: [],
            six: [],
            seven: [],
            visible: false,
            xscore: 0,
            time: 60,
        }
    }

    componentWillUnmount = () => {
        clearTimeout(this.state.timeout)
        clearInterval(this.state.interval)
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
                this.setState({
                    xscore: this.state.xscore + (ele.length * 10)
                })
            }
        }
        this.setState({
            guess: ''
        })
    }


    requestNewGame = (e) => {
        this.props.newGame(Math.floor(Math.random() * (22 - 2 + 1)))
    
    }

    endGame = (e) => {
        this.props.scoreGame(this.props.playerId, this.state.xscore)
        clearTimeout(this.state.timeout)
        clearInterval(this.state.interval)
        this.setState({
            visible: false,
            guess: '',
            three: [],
            four: [],
            five: [],
            six: [],
            seven: [],
            xscore: 0,
            time: 60
        })
    }

    timer = () => {
        let newCount = this.state.time - 1
        if (newCount >= 0) {
            this.setState({ time: newCount })
        } else {
            clearInterval(this.state.interval)
        }

    }

    playGame = () => {
        this.endGame()
        this.requestNewGame()
        this.setState({
            guess: '',
            visible: true
        })
       let interval = setInterval(this.timer, 1000)
        let timeout = setTimeout(this.endGame, 60000)
        this.setState({
            interval: interval,
            timeout: timeout
        })


    }


    render() {
        return (
            <div>
                
                <CurrentScore visible={this.state.visible} xscore={this.state.xscore} />
                <TimeRemaining visible={this.state.visible} time={this.state.time} />
              
                <Playletters visible={this.state.visible} />


                <form onSubmit={this.handleGuess}>
                    <Input autoComplete='off' type="text" onChange={this.handleChange} value={this.state.guess} name="guess" placeholder='Guess Here' />
                    <Button basic color='pink' content='Enter' />
                </form>
                <Segment>
                    <Button onClick={this.playGame} basic color='orange' content='NEW GAME' />
                    <Button onClick={this.endGame} basic color='teal' content='SCORE GAME' />
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

// fix hard coded player id
const mapStateToProps = state => ({
    playletters: state.games.playletters,
    validwords: state.games.validwords,
    playerId: 4
})

const mapDispatchToProps = dispatch => bindActionCreators({

    newGame: newGame,
    scoreGame: scoreGame

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
