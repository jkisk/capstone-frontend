import React, { Component } from 'react'
import {Transition, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'


class PostGame extends Component {

    render() {
        return (
            
                <Transition visible={this.props.isEnd} animation='scale' duration={500}>
                    <Message id='postgame'>
                        <p>Game Over!  You scored {this.props.score} points </p>
                  
                        {this.props.high? <h1>This is your best score ever!</h1>: null}
                     
                        <p>You typed {this.props.count} valid letters</p>
                    </Message>
                </Transition>
        
        )
    }
}

const mapStateToProps = state => ({
    high: state.scores.isNewHigh
})


export default connect(
    mapStateToProps,
)(PostGame);
