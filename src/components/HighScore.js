import React, { Component } from 'react'
import { Table} from 'semantic-ui-react'
import { connect } from 'react-redux'
import Score from './Score'

class HighScore extends Component {
    render() {
        return (
            <Table className="ui celled table">
                <Table.Header className="">
                    <Table.Row className=""><Table.HeaderCell className="">Score</Table.HeaderCell>
                        <Table.HeaderCell className="">Player</Table.HeaderCell>
                        <Table.HeaderCell className="">Date</Table.HeaderCell>
                    </Table.Row ></Table.Header>
                <Table.Body className="">
                            {/* </Score> */}
                </Table.Body>
            </Table>
        )
    }
}

const mapStateToProps = state => ({

})



export default connect(
    mapStateToProps,

)(HighScore);