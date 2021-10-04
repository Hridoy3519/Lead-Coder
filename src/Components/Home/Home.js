import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Connect from "../Connect/Connect";
import Milestone from "../Milestone/Milestone";
import RecentCourse from "../RecentCourse/RecentCourse";
import Slider from "../Slider/Slider";
import "./Home.css";
const Home = () => {
  const [recentCourse, setRecentCourse] = useState([]);

  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setRecentCourse(data));
  }, []);
  return (
    <div>
      {/* Carousel */}
      <Slider></Slider>

      {/* Our Services */}
      <div className="container services">
        <h3 className="colored-text">Upcoming Courses</h3>
        <CardGroup>
          {recentCourse.map((course) => (
            <RecentCourse key={course.key} course={course}></RecentCourse>
          ))}
        </CardGroup>
        <div className="d-flex justify-content-center mt-2">
          <Link to="/courses"> 
            <button className="see-more">See More <FontAwesomeIcon icon={faArrowRight} /> </button>
          </Link>
        </div>
      </div>

      {/* Our Milestone */}
      <Milestone> </Milestone>

      {/* Contact Us */}
      <Connect></Connect>
    </div>
  );
};

export default Home;
