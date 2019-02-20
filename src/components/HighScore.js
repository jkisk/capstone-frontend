import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Score from './Score'
import { getScores } from '../actions/scores'

class HighScore extends Component {

    componentDidMount() {
        this.props.getScores()
    }

    render() {
        return (
            <Table className="ui celled table">
                <Table.Header className="">
                    <Table.Row className=""><Table.HeaderCell className="">Score</Table.HeaderCell>
                        <Table.HeaderCell className="">Player</Table.HeaderCell>
                        <Table.HeaderCell className="">Date</Table.HeaderCell>
                    </Table.Row ></Table.Header>
                <Table.Body className="">
                    {
                        this.props.highScores.map((score, id) => {
                            return <Score key={id} {...score} />
                        })

                    }
                </Table.Body>
            </Table>
        )
    }
}

const mapStateToProps = state => ({
    highScores: state.scores
})

const mapDispatchToProps = dispatch => bindActionCreators({

    getScores: getScores

}, dispatch)



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HighScore);