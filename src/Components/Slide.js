import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/2.webp'
import img2 from '../images/3.webp'
import img3 from '../images/6.webp'

function UncontrolledExample() {
  return (
    <Carousel className="mt-5">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img1}
          alt="First slide" style={{height:'500px'}}
        />
        <Carousel.Caption>
          
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img2}
          alt="Second slide" style={{height:'500px'}}
        />

        <Carousel.Caption>
       
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img3}
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
