import React, { Component } from 'react'
// import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


class Header extends Component {



render() {
    return (
        <div>
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