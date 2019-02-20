import React, { Component } from 'react'
import {Transition, Message, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'


class PostGame extends Component {

    render() {
        return (
            
                <Transition visible={this.props.isEnd} animation='scale' duration={500}>
                    <Message>
                        Game Over!  You scored {this.props.score} points
                        {this.props.high? <p>This is your best score ever!</p> : null}
                        <br/>
                        You typed {this.props.count} valid letters
                        <br/>
                        <Button onClick={this.props.play} content='PLAY AGAIN' />
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
