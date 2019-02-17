import React, { Component } from 'react'
import {Transition, Message, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'


class PostGame extends Component {

    render() {
        return (
            
                <Transition visible={this.props.isEnd} animation='scale' duration={500}>
                    <Message>
                        Game Over!  You scored {this.props.score} points
                        {/* Your All Time High is {} */}
                        <Button onClick={this.props.play} basic color='orange' content='PLAY AGAIN' />
                    </Message>
                </Transition>
        
        )
    }
}

const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps,
)(PostGame);
