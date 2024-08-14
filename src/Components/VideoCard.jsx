import React, { useState } from 'react'
import {Card, Modal } from 'react-bootstrap'


function VideoCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>

<Card style={{ width: '16rem' }}>
      <Card.Img onClick={handleShow} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGOnj1w-JRxwQN_k6DsT30AeNn9x4Rw5SJVQ&s" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
        <h4>Big dawgs</h4>
        <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
        </Card.Title>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315" src="https://www.youtube.com/embed/hOHKltAiKXQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
       
      </Modal>
      
    </>
  )
}

export default VideoCard
