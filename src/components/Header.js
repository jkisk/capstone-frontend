import React, { Component } from 'react'
import { Image} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
// import {Logo} from './Logo'
import mainLogo from '../small_scram.png'


class Header extends Component {



render() {
    return (
        <div>
            <div id='logo'>
            <Image src={mainLogo}/>
            </div>
        {this.props.player? <p>Welcome {this.props.player.playername}</p> : null}
        </div>
    )

}
}



const mapStateToProps = state => ({
    player: state.auth.player
})

const mapDispatchToProps = dispatch => bindActionCreators({

 

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);