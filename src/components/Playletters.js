import React, { Component } from 'react'
import {Transition, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import Letter from './Letter'


class Playletters extends Component {


    render() {
        return (
                <Transition visible={this.props.visible} animation='scale' duration={500}>
                    <Header as='h1'>
                        {this.props.playletters ?
                            this.props.playletters.split('').sort(function () { return 0.5 - Math.random() }).map((char, id) => {
                                return <Letter key={id} char={char} />
                            })
                            : null}
                    </Header>
                </Transition>
        )
    }
}

const mapStateToProps = state => ({
    playletters: state.games.playletters
})

export default connect(
    mapStateToProps
)(Playletters);
