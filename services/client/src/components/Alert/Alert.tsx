import React from 'react';
import { Button, Modal } from 'react-bootstrap';

type PropsTypes = {
    visible: boolean;
    errorMessage: string
    handleVisible(): void
}

const Alert: React.FC<PropsTypes> = React.memo(({
    visible,
    errorMessage,
    handleVisible
}) => {
      
    return (
        
        <Modal
          show={visible}
          onHide={handleVisible}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorMessage}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleVisible}>
              Close
            </Button>            
          </Modal.Footer>
        </Modal>
      
    );
})
  
export { Alert }