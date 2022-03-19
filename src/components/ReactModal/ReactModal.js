import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    // console.log (props.product)
    const {categorry, description, image, price, title} = props.product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            <img className='w-25 p-3' src={image} alt="" />
            <p>Price: <strong>{price}$</strong></p>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ReactModal;