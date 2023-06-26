import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel className="mt-5">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src='./images/2.webp'
          alt="First slide" style={{height:'500px'}}
        />
        <Carousel.Caption>
          
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="./images/3.webp"
          alt="Second slide" style={{height:'500px'}}
        />

        <Carousel.Caption>
       
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="./images/6.webp"
          alt="Third slide" style={{height:'500px'}}
        />

        <Carousel.Caption>
         
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
