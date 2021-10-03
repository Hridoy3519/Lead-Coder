import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/sliders/1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Learn With Us</h3>
              <p>Best Place to Master IT Skills</p>
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

            <Carousel.Caption>
              <h3>Learn With Us</h3>
              <p>Best Place to Master IT Skills</p>
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

            <Carousel.Caption>
              <h3>Learn With Us</h3>
              <p>Best Place to Master IT Skills</p>
              <Button variant="primary">Web Development</Button>{" "}
              <Button variant="danger">Networking </Button>{" "}
              <Button variant="success">Android Development</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
