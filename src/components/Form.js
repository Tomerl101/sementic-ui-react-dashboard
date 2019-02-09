import React, { useState } from 'react';
import { Container, Segment, Form, Input, Header } from 'semantic-ui-react'
import { updateStatus } from '../api/updateStatus';
import { ModalAlert } from './ModalAlert';

export function FormUi() {
  const [form, setValues] = useState({ id: '', status: '', reason: '', name: '' });
  const [modalContent, setModalContent] = useState({ header: '', body: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e, { name, value }) => {
    setValues(({ ...form, [name]: value }))
  }

  const handlModalClose = () => {
    setIsModalOpen(false);
  }

  const handleSubmit = async () => {
    try {
      const { id, status } = form;
      setIsLoading(true);
      await updateStatus(id, status);
      setModalContent({ header: 'successfully updated', body: 'Game status was update' })
    } catch (error) {
      setModalContent({ header: 'Error', body: 'there was an error in the server.\ntry again later' })
      alert(error);
    } finally {
      setValues({ id: '', status: '', name: '', reason: '' });
      setIsLoading(false);
      setIsModalOpen(true);
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
      <ModalAlert isOpen={isModalOpen} handleClose={handlModalClose} content={modalContent} />
    </Container>
  )
}