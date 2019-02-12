import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import { userLogout } from '../actions/auth'


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
        this.props.userLogout(() => {
            localStorage.clear()
            this.props.history.push('/')
        })
    }

    render() {
        console.log(this.props.user)
        return (
            <Menu>

                <Button basic color='orange' content='Login' />


                <Button onClick={this.handleLogout} basic color='orange' content='Logout' />


                <Button basic color='orange' content='Create Player' />

                <Button basic color='teal'>
                    <Link to={'/scores'} >View High Scores</Link>
                </Button>




            </Menu >
        )
    }
}










const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

    userLogout: userLogout

}, dispatch)

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TopMenu));