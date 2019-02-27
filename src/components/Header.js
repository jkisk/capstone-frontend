import React, { Component } from 'react'
import { Image} from 'semantic-ui-react'
import { connect } from 'react-redux'
import mainLogo from '../small_scram.png'


class Header extends Component {


render() {
    return (
        <div>
            <div id='logo'>
            <Image src={mainLogo}/>
            </div>
            <br/> <br/> 
        </div>
    )

}
}



const mapStateToProps = state => ({
    player: state.auth.player
})


export default connect(
    mapStateToProps
)(Header);