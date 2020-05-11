import React from 'react'
import {Button, Modal} from 'react-bootstrap'

///
/// TrailerModal component shows trailer video
///
const TrailerModal = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe 
              title={props.title} 
              class="embed-responsive-item" 
              src={props.src} 
              allowfullscreen={true} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TrailerModal