import React, { Component } from 'react'
import {Transition, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'


class TimeRemaining extends Component {

    render() {
        return (
            
                <Transition visible={this.props.visible} animation='scale' duration={500}>
                    <Header as='h1'>
                        Time Remaining = {this.props.time} 
                    </Header>
                </Transition>
        
        )
    }
}

const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps,
)(TimeRemaining);
