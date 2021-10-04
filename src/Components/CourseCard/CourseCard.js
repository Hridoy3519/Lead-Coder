import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./CourseCard.css";
const CourseCard = (props) => {
  const { img, title, description, rating, price} = props.course;
  return (
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
            <button className="enroll-btn">
              {" "}
              <FontAwesomeIcon icon={faCartArrowDown} /> Enroll Now{" "}
            </button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CourseCard;
