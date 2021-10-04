import React from "react";
import { Carousel , Button } from "react-bootstrap";
import './Slider.css';
const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/sliders/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="slider">
            <h3>Learn With Us</h3>
            <p className="motto">Best Place to Master IT Skills</p>
            <Button variant="primary">Web Development</Button>{" "}
            <Button variant="danger">Networking </Button>{" "}
            <Button variant="success">Android Development</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/sliders/2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="slider">
            <h3>Learn With Us</h3>
            <p className="motto">Best Place to Master IT Skills</p>
            <Button variant="primary">Web Development</Button>{" "}
            <Button variant="danger">Networking </Button>{" "}
            <Button variant="success">Android Development</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/sliders/3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="slider">
            <h3>Learn With Us</h3>
            <p className="motto">Best Place to Master IT Skills</p>
            <Button variant="primary">Web Development</Button>{" "}
            <Button variant="danger">Networking </Button>{" "}
            <Button variant="success">Android Development</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
