import React, { Component } from 'react'
import { List} from 'semantic-ui-react'
import { connect } from 'react-redux'


class Help extends Component {

    render() {
        return (

            <List>
                <List.Item>Make as many words as you can with the given letters</List.Item>
                <List.Item>Words must be at least 3 letters long</List.Item>
                <List.Item>You can hit enter/return on your keyboard to play more quickly</List.Item>
            </List>


        )
    }
}

const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps,
)(Help);
