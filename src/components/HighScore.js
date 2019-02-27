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
            <Table id='score-table' className="ui celled table">
                <Table.Header>
                    <Table.Row><Table.HeaderCell>Score</Table.HeaderCell>
                        <Table.HeaderCell>Player</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                    </Table.Row ></Table.Header>
                <Table.Body>
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
    highScores: state.scores.high_scores
})

const mapDispatchToProps = dispatch => bindActionCreators({

    getScores: getScores

}, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HighScore);