import React, { Component } from 'react'
import {Segment, Transition, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'


class Playletters extends Component {



    render() {
        return (
            <Segment>
                <Transition visible={this.props.visible} animation='scale' duration={500}>
                    <Header as='h1'>
                        {this.props.playletters ?
                            this.props.playletters.split('').sort(function () { return 0.5 - Math.random() }).join('')
                            : null}
                    </Header>
                </Transition>
            </Segment>
        )
    }
}

const mapStateToProps = state => ({
    playletters: state.games.playletters
})

// const mapDispatchToProps = dispatch => bindActionCreators({


// }, dispatch)

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Playletters);
