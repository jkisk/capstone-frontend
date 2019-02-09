import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {newGame} from '../actions/games'
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



    render() {
        return (
            <div>
            <Segment>
                {/* {this.props.playletters} */} playletters here
            </Segment>
            <form onSubmit={this.handleGuess}>
                <Input type="text" onChange={this.handleChange} name="guess" placeholder='Guess Here' />
                <Button basic color='pink' content='Enter' />
            </form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    
  })
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    
    newGame: newGame
  
  }, dispatch)
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Game);
  