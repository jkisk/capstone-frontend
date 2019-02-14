import React, { Component } from 'react'
import {Segment, Transition, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'


class CurrentScore extends Component {



    render() {
        return (
            <Segment>
                <Transition visible={this.props.visible} animation='scale' duration={500}>
                    <Header as='h1'>
                        {this.props.xscore} 
                    </Header>
                </Transition>
            </Segment>
        )
    }
}

const mapStateToProps = state => ({

})

// const mapDispatchToProps = dispatch => bindActionCreators({


// }, dispatch)

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(CurrentScore);
