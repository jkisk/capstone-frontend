import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import { playerLogout } from '../actions/auth'


class TopMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleLogout = () => {
        this.props.playerLogout(() => {
            localStorage.clear()
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <Menu>
                {!this.props.player ?
                    <Button basic color='orange'>
                        <Link to={'/login'} >Login to Save Score!</Link>
                    </Button>

                    :
                    <Button onClick={this.handleLogout} basic color='orange' content='Logout' />
                }

                <Button basic color='orange'>
                    <Link to={'/signup'} >Create Player</Link>
                </Button>

                <Button basic color='teal'>
                    <Link to={'/scores'} >View High Scores</Link>
                </Button>
                <Button basic color='teal'>
                    <Link to={'/play'} >Play Scramples</Link>
                </Button>




            </Menu >
        )
    }
}










const mapStateToProps = state => ({
    player: state.auth.player
})

const mapDispatchToProps = dispatch => bindActionCreators({

    playerLogout: playerLogout

}, dispatch)

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TopMenu));