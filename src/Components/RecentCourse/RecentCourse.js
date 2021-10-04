import React from "react";
import { Card } from "react-bootstrap";
import "./RecentCourse.css";
const RecentCourse = (props) => {
  const { title, description, img, price , date, seat } = props.course;
  return (
    <Card className="mx-1">
      <Card.Img className="service-card-img" variant="top" src={img} />
      <Card.Body className="card-body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p><small>Price: </small> <span>৳{price}</span></p>
      </Card.Body>
      <Card.Footer className="text-start d-flex justify-content-between">
        <div className="calendar">
          <img src="./images/icon/calendar.jpg" alt="" />
          <p>{date}</p>
        </div>
        <div className="seats">
          <img src="./images/icon/people.png" alt="" />
          <p> {seat} </p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default RecentCourse;
