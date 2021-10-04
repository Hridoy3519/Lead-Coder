import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CardGroup } from "react-bootstrap";
import Connect from "../Connect/Connect";
import Milestone from "../Milestone/Milestone";
import RecentCourse from "../RecentCourse/RecentCourse";
import Slider from "../Slider/Slider";
import "./Home.css";
const Home = () => {
  const [recentCourse, setRecentCourse] = useState([]);

  useEffect(() => {
    fetch('./services.JSON')
    .then(res => res.json())
    .then(data => setRecentCourse(data));
  },[])
  return (
      <div>
        {/* Carousel */}
        <Slider></Slider>

        {/* Our Services */}
        <div className="container services">
          <h3 className="colored-text">Upcoming Courses</h3>
          <CardGroup>
            {
              recentCourse.map(course => <RecentCourse key={course.key} course={course}></RecentCourse>)
            }
          </CardGroup>

          {/* Our Milestone */}
          <Milestone> </Milestone>

          {/* Contact Us */}
          <Connect></Connect>
        </div>
      </div>
  );
};

export default Home;
