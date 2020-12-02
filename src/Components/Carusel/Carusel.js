import React from 'react';
import {Button, Col,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import srimongol from '../../Image/Sreemongol.png';
// import sundorbon from '../../Image/sundorbon.png';
// import sajek from '../../Image/Sajek.png';
const Carusel = (props) => {
const {title,paragrap, image,id} =props.place
    return (
       
      <Col md={4}>
        <Card >
  <Card.Img src={ image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {paragrap}
    </Card.Text>
    <Link to={`/banner/${id}`}>
    <Button variant="primary">Go somewhere</Button>
    </Link>
  </Card.Body>
</Card>
      </Col>
     /* <Carousel>
  <Carousel.Item interval={100} >
    <img
      className="d-block w-100"
      src={srimongol}
      alt="First slide"
    />
    <Carousel.Caption className="d-block w-50">
    <h3>{title}</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={100}>
    <img
      className="d-block w-100"
      src={sundorbon}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sajek}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */
       
    );
};

export default Carusel;