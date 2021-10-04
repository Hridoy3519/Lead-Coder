import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React from "react";
import { useState } from "react";
import { Card, Col, Modal } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./CourseCard.css";
const CourseCard = (props) => {
  const { img, title, description, rating, price, key } = props.course;
  const addToCart = props.addToCart;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Col>
        <Card className="h-100 text-start">
          <Card.Img variant="top" className="course-img" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description.slice(0, 150)}...</Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-between align-items-center">
              <Rating
                initialRating={rating}
                readonly
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
              />
              <h3 className="price"> ৳{price} </h3>
            </div>
            <div className="d-flex justify-content-center py-2">
              <button onClick={() => {
                handleShow() 
                addToCart(key)}
                } className="enroll-btn">
                {" "}
                <FontAwesomeIcon icon={faCartArrowDown} /> Enroll Now{" "}
              </button>
            </div>
          </Card.Footer>
        </Card>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Course Enrolled</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Best of Luck, Start Classes Now!</Modal.Body>
        <Modal.Footer>
          <Button className="enroll-now" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CourseCard;
