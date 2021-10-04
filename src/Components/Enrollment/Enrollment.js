import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { getStoredCart } from "../../utilities/fakedb";
import Classes from "../Classes/Classes";
import "./Enrollment.css";
const Enrollment = () => {
  const enrolled = getStoredCart();
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  useEffect(() => {
    if (courses.length) {
      const newCourses = [];
      Object.keys(enrolled).forEach((key) => {
        newCourses.push(courses.find((course) => course.key === key));
      });
      setEnrolledCourses(newCourses);
    }
  }, [courses, enrolled]);

  return (
    <div>
      {enrolled ? (
        <div>
          <div className="container courses">
            <Row xs={1} md={3} className="g-4">
              {enrolledCourses.map((course) => (
                <Classes
                  key={course.key}
                  course={course}
                ></Classes>
              ))}
            </Row>
          </div>
        </div>
      ) : (
        <div className="no-course">
          <h1 className="text-success">No, Courses Enrolled Yet</h1>
        </div>
      )}
    </div>
  );
};

export default Enrollment;
