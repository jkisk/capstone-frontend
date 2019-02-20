import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newGame } from '../actions/games'
import { scoreGame } from '../actions/scores'
import { Input, Button, Header, Form } from 'semantic-ui-react'
import Playletters from './Playletters'
import CurrentScore from './CurrentScore'
import TimeRemaining from './TimeRemaining'
import PostGame from './PostGame'
import Help from './Help'




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
            isEnd: false,
            count: 0,
            invalid: false,
            help: false
        }
    }

    componentWillUnmount = () => {
        clearTimeout(this.state.timeout)
        clearInterval(this.state.interval)
    }


    handleChange = (e) => {
        this.setState({
            guess: e.target.value,
            invalid: false
        })
    }

    handleGuess = (e) => {
        e.preventDefault()
        let letterCount = 0
        const entry = this.state.guess.toLowerCase()
        const arr = this.props.validwords.validArr
        if (arr.indexOf(entry) !== -1) {
            if (entry.length === 3 && this.state.three.indexOf(entry) === -1) {
                this.state.three.push(entry)
                letterCount += entry.length
            }
            if (entry.length === 4 && this.state.four.indexOf(entry) === -1) {
                this.state.four.push(entry)
                letterCount += entry.length
            }
            if (entry.length === 5 && this.state.five.indexOf(entry) === -1) {
                this.state.five.push(entry)
                letterCount += entry.length
            }
            if (entry.length === 6 && this.state.six.indexOf(entry) === -1) {
                this.state.six.push(entry)
                letterCount += entry.length
            }
            if (entry.length === 7 && this.state.seven.indexOf(entry) === -1) {
                this.state.seven.push(entry)
                letterCount += entry.length
            }
            this.setState({
                xscore: this.state.xscore + (entry.length * 15)
            })
        }
        else {
            this.setState({
                invalid: true
            })
        }

        this.setState({
            guess: '',
            count: this.state.count + letterCount,
        })
    }

    requestNewGame = (e) => {
        this.props.newGame(Math.floor(Math.random() * (22 - 2 + 1)))

    }

    endGame = (e) => {
        if (this.props.playerId) {
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
        this.focus()
        this.requestNewGame()
        this.setState({
            guess: '',
            isEnd: false,
            visible: true,
            xscore: 0,
            count: 0,
            three: [],
            four: [],
            five: [],
            six: [],
            seven: []
        })
        let interval = setInterval(this.timer, 1000)
        let timeout = setTimeout(this.endGame, 30000)
        this.setState({
            interval: interval,
            timeout: timeout
        })


    }
    handleRef = (element) => {
        this.inputRef = element
        console.log(this);

    }

    focus = () => {
        this.inputRef.focus()
    }

    toggleHelp = () => {
        this.state.help? this.setState({help: false}) : this.setState({help: true})
    }


    render() {
        return (
            <div className='Game'>

                <CurrentScore visible={this.state.visible} xscore={this.state.xscore} />
                <TimeRemaining visible={this.state.visible} time={this.state.time} />

                <Playletters visible={this.state.visible} />
                <PostGame isEnd={this.state.isEnd} score={this.state.xscore} count={this.state.count} play={() => this.playGame()} />
                
                    <Form onSubmit={this.handleGuess}>
                        <Input ref={this.handleRef} error={this.state.invalid} autoComplete='off' type="text" onChange={this.handleChange} value={this.state.guess} name="guess" placeholder='Guess Here' />
                        <Button content='Enter' />
                    </Form>
                
                <br />
                <Button onClick={this.playGame} content='New Game' />



                <Header as='h2'>
                    {this.state.three.sort().map((ele) => { return ele + ' ' })}
                    {this.state.four.sort().map((ele) => { return ele + ' ' })}
                    {this.state.five.sort().map((ele) => { return ele + ' ' })}
                    {this.state.six.sort().map((ele) => { return ele + ' ' })}
                    {this.state.seven.sort().map((ele) => { return ele + ' ' })}
                </Header>
                <Button onClick={this.toggleHelp} content="Show Instructions" />
                {this.state.help?
                    <Help/>
                : null}
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
