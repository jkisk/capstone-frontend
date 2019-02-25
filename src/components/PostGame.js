import React, { Component } from 'react'
import {Transition, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'


class PostGame extends Component {

    render() {
        return (
            
                <Transition visible={this.props.isEnd} animation='scale' duration={500}>
                    <Message id='postgame'>
                        Game Over!  You scored {this.props.score} points
                        {this.props.high? <p>This is your best score ever!</p> : null}
                        <br/>
                        You typed {this.props.count} valid letters
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
