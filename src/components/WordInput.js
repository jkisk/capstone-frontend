import React, { Component } from 'react'
import { Transition, Form, Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'


class WordInput extends Component {

    handleRef = (element) => {
        this.inputRef = element

    }

    focus = () => {
        this.inputRef.focus()
    }


    render() {
        return (
            <Transition visible={this.props.visible} animation='scale' duration={500}>
                <Form onSubmit={this.props.handleGuess}>
                    <Input ref={this.handleRef} error={this.props.invalid} autoComplete='off' type="text" onChange={this.handleChange} value={this.props.guess} name="guess" placeholder='Guess Here' />
                    <Button content='Enter' />
                </Form>
            </Transition>
        )
    }
}

const mapStateToProps = state => ({
    
})

export default connect(
    mapStateToProps
)(WordInput);
