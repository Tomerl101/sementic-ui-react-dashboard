import React, { Component } from 'react'
import { Form, Input, Loader } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react';

export class FormUi extends Component {

  state = { isLoading: false, id: '', status: '', reason: '', name: '' }

  handleChange = (e, { name, value }) => {
    console.log('TCL: FormUi -> handleChange -> value', value)
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { id, status } = this.state
    this.setState({ isLoading: true });
    fetch(`https://gamecancellations.herokuapp.com/game/${id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          cancellations: result,
          isLoading: false
        })
      })
      .catch(error => console.log(error))
    this.setState({ id: '', status: '', name: '', reason: '' })


  }

  render() {
    const { isLoading, id, status, reason, name } = this.state;
    return <Container textAlign='justified'>
      <Loader active={isLoading}>Loading</Loader>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            label='id'
            placeholder='id'
            name='id'
            value={id}
            onChange={this.handleChange}
          />
          <Form.Input
            control={Input}
            label='Group Name'
            placeholder='Group Name'
            name='name'
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            control={Input}
            label='Status'
            name='status'
            value={status}
            placeholder='Status'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea
          label='Cancel Reason'
          placeholder='Cancel Reason'
          name='reason'
          value={reason}
          onChange={this.handleChange}

        />
        <Form.Button content='Send' />
      </Form>
    </Container>
  }
}