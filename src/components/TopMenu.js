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
            <Menu className="TopMenu">
                <Button.Group widths="4" id="menu-btn">
                    {!this.props.player ?
                        <Button >
                            <Link to={'/login'} >Login to Save Score!</Link>
                        </Button>
                        :
                        <Button  onClick={this.handleLogout} content='Logout' />
                    }
                    <Button >
                        <Link to={'/play'} >Play Scramples</Link>
                    </Button>
                    <Button >
                        <Link to={'/scores'} >View High Scores</Link>
                    </Button>
                    {this.props.player ?
                    <Button>Welcome {this.props.player.playername}</Button>
                    :<Button >
                    <Link to={'/signup'} >Create Player</Link>
                </Button>
                }
                    
                    
                </Button.Group>
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