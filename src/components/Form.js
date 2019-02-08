import React, { useState } from 'react';
import { Container, Segment, Form, Input, Header } from 'semantic-ui-react'
import { updateStatus } from '../api/updateStatus';

export function FormUi() {
  const [form, setValues] = useState({ id: '', status: '', reason: '', name: '' });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e, { name, value }) => {
    setValues(({ ...form, [name]: value }))
  }

  const handleSubmit = async () => {
    try {
      const { id, status } = form;
      setIsLoading(true);
      await updateStatus(id, status);
      setValues({ id: '', status: '', name: '', reason: '' });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container textAlign='justified'>
      <Segment>
        <Header size='large'>Update Game</Header>
        <Form loading={isLoading} onSubmit={handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              label='id'
              placeholder='id'
              name='id'
              value={form.id}
              onChange={handleChange}
            />
            <Form.Input
              control={Input}
              label='Group Name'
              placeholder='Group Name'
              name='name'
              value={form.name}
              onChange={handleChange}
            />
            <Form.Input
              control={Input}
              label='Status'
              name='status'
              value={form.status}
              placeholder='Status'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.TextArea
            label='Cancel Reason'
            placeholder='Cancel Reason'
            name='reason'
            value={form.reason}
            onChange={handleChange}
          />
          <Form.Button content='Send' color='blue' />
        </Form>
      </Segment>
    </Container>
  )
}