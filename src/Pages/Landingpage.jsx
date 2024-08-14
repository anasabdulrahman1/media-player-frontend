import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Landingpage() {

  const navigateByUrl=useNavigate()



  return (
    <>
      {/* Welcome Section */}
      <Container className='mt-5'>
        <Row className=' gap-5  align-items-center justify-content-between w-100'>
          <Col lg={5} className='text-center text-lg-start'>
            <h1 style={{ color: "blueviolet", fontSize: "40px" }}>
              Welcome to <span className='text-warning'>Media-Player</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquid? Est nulla sequi iusto qui, ratione voluptate ea reprehenderit dicta cumque? Odit omnis corporis optio odio quaerat, esse corrupti veritatis!
              Ipsam rerum aliquam maxime quo inventore nihil assumenda qui atque voluptatibus sed, reprehenderit a dolorem quos officiis non velit ad porro laborum dolorum facere aspernatur voluptate minus obcaecati. Earum, consequatur.
            </p>
            <Button onClick={()=>navigateByUrl('./home')} className='btn btn-info'>Get Started</Button>
          </Col>
          <Col lg={5} className='text-center'>
            <img src="https://media1.tenor.com/m/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Music Beat" className='img-fluid' />
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className='mb-5 mt-5 text-center'>
        <h5 className='text-warning'>Features</h5>
        <Row className='mt-5 d-flex justify-content-center'>
          <Col sm={12} md={6} lg={4} className='mb-4'>
            <Card className='bg-info mx-auto' style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'300px'} src="https://media1.tenor.com/m/WOQ4NaiPiRwAAAAC/beats-art.gif" />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4} className='mb-4'>
            <Card className='bg-info mx-auto' style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'300px'} src="https://media.tenor.com/689NaiPWAWcAAAAM/ondas-sonoras-sonido.gif" />
              <Card.Body>
                <Card.Title>Categorized Video</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4} className='mb-4'>
            <Card className='bg-info mx-auto' style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'300px'} src="https://media.tenor.com/y5DrU1cjqkYAAAAM/sound-waves.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Information and Video Section */}
      <Container className='border rounded p-4 mt-5 d-flex flex-column flex-lg-row justify-content-center align-items-center'>
        <div className="col-lg-5 text-center text-lg-start">
          <h4 className="text-warning">Simple, Powerful & Fast</h4>
          <h6 className="mb-5 mt-4">
            <span className='text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi minima dolores voluptatem molestias. Sed nam qui quisquam atque nesciunt, quidem eaque hic! Amet neque rem nostrum vitae, est iste recusandae!
            Atque ipsa doloribus sapiente vel accusamus voluptatibus voluptatem excepturi iste maxime distinctio, impedit eveniet provident veniam deleniti ducimus rerum hic numquam accusantium dicta natus est nihil reiciendis tenetur. Eveniet, officiis.
            Aliquam quae doloribus sapiente deserunt atque veritatis odio laboriosam, doloremque dolore maiores tempora, consectetur maxime! Quibusdam quisquam odio id reiciendis corrupti, quaerat ipsam beatae neque fugit iste consequatur minima voluptatibus!
          </h6>
          <h6 className="mb-5 mt-4">
            <span className='text-warning'>Categorized Video</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi minima dolores voluptatem molestias. Sed nam qui quisquam atque nesciunt, quidem eaque hic! Amet neque rem nostrum vitae, est iste recusandae!
            Atque ipsa doloribus sapiente vel accusamus voluptatibus voluptatem excepturi iste maxime distinctio, impedit eveniet provident veniam deleniti ducimus rerum hic numquam accusantium dicta natus est nihil reiciendis tenetur. Eveniet, officiis.
            Aliquam quae doloribus sapiente deserunt atque veritatis odio laboriosam, doloremque dolore maiores tempora, consectetur maxime! Quibusdam quisquam odio id reiciendis corrupti, quaerat ipsam beatae neque fugit iste consequatur minima voluptatibus!
          </h6>
          <h6 className="mb-5 mt-4">
            <span className='text-warning'>Managing Video</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi minima dolores voluptatem molestias. Sed nam qui quisquam atque nesciunt, quidem eaque hic! Amet neque rem nostrum vitae, est iste recusandae!
            Atque ipsa doloribus sapiente vel accusamus voluptatibus voluptatem excepturi iste maxime distinctio, impedit eveniet provident veniam deleniti ducimus rerum hic numquam accusantium dicta natus est nihil reiciendis tenetur. Eveniet, officiis.
            Aliquam quae doloribus sapiente deserunt atque veritatis odio laboriosam, doloremque dolore maiores tempora, consectetur maxime! Quibusdam quisquam odio id reiciendis corrupti, quaerat ipsam beatae neque fugit iste consequatur minima voluptatibus!
          </h6>
        </div>

        <div className="col-lg-5 ms-lg-5 mt-5 mt-lg-0">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/hOHKltAiKXQ?si=x0TQqKwis4DItFRu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </Container>
    </>
  );
}

export default Landingpage;
