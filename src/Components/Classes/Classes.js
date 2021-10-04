import React from "react";
import { Card, Col } from "react-bootstrap";

const Classes = (props) => {
  const { img, title} = props.course;
  return (
    <Col>
      <Card className="h-100 text-start">
        <Card.Img variant="top" className="course-img" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex justify-content-center">
          <button className="enroll-btn">
            {" "} Start Classes{" "}
          </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Classes;
