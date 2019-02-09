import React from 'react'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'

export function ModalAlert(props) {
  const { content, isOpen, handleClose } = props;
  return (
    <Modal open={isOpen} size='mini' >
      <Modal.Content>
        <Modal.Description>
          <Header>{content.header}</Header>
          <p>{content.body}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={handleClose} inverted>
          Ok
          </Button>
      </Modal.Actions>
    </Modal>
  )
}


