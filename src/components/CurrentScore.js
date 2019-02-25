import React, { Component } from 'react'
import {Transition, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'


class CurrentScore extends Component {



    render() {
        return (
                <Transition visible={this.props.visible} animation='scale' duration={500}>
                    <Header as='h2'>
                        Score = {this.props.xscore} 
                    </Header>
                </Transition>
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
