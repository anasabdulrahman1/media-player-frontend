import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';


function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <div className="d-flex mb-5 mt-5 align-items-center">
      <h2>Upload Videos</h2>
      <button onClick={handleShow} className="btn"><i className="fa-solid fa-arrow-up-from-bracket fa-beat fa-2x mb-2"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Id" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter Video Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Image Url" className="mb-3">
        <Form.Control type="text" placeholder="Image Url" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video Url" className="mb-3">
        <Form.Control type="text" placeholder="Video Url" />
      </FloatingLabel>
          </form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
