import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      {/* Two column: left side will be course Card on right there will be a cart */}
      <div className="my-5 mx-1">
        <div className="container">
          <Row xs={1} md={3} className="g-4">
            {courses.map((course) => (
              <CourseCard
                key={course.key}
                course={course}
                cart={cart}
                setCart={setCart}
              ></CourseCard>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Courses;
