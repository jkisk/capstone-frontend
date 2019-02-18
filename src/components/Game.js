import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newGame } from '../actions/games'
import { scoreGame } from '../actions/scores'
import { Input, Button, Transition, Header } from 'semantic-ui-react'
import Playletters from './Playletters'
import CurrentScore from './CurrentScore'
import TimeRemaining from './TimeRemaining'
import PostGame from './PostGame'




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
            time: 30,
            isEnd: false
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
        if (this.props.playerId.id) {
            this.props.scoreGame(this.props.playerId.id, this.state.xscore)
        }
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
            isEnd: true,
            time: 30
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
            isEnd: false,
            visible: true,
            xscore: 0
        })
        let interval = setInterval(this.timer, 1000)
        let timeout = setTimeout(this.endGame, 30000)
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
                <PostGame isEnd={this.state.isEnd} score={this.state.xscore} play={() => this.playGame()} />
                <Transition visible={this.state.visible} animation='scale' duration={500}>
                    <form onSubmit={this.handleGuess}>
                        <Input autoFocus={true} autoComplete='off' type="text" onChange={this.handleChange} value={this.state.guess} name="guess" placeholder='Guess Here' />
                        *<Button basic color='pink' content='Enter' />
                    </form>
                </Transition>
                <br />
                <Button onClick={this.playGame} basic color='pink'  content='NEW GAME' />



                <Header as='h2'>
                    {this.state.three.sort().map((ele) => { return ele + ' ' })}
                    {this.state.four.sort().map((ele) => { return ele + ' ' })}
                    {this.state.five.sort().map((ele) => { return ele + ' ' })}
                    {this.state.six.sort().map((ele) => { return ele + ' ' })}
                    {this.state.seven.sort().map((ele) => { return ele + ' ' })}
                </Header>

            </div >
        )
    }
}


const mapStateToProps = state => ({
    playletters: state.games.playletters,
    validwords: state.games.validwords,
    playerId: state.auth.player
})

const mapDispatchToProps = dispatch => bindActionCreators({

    newGame: newGame,
    scoreGame: scoreGame

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
