import React from "react";
import "./Milestone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook} from "@fortawesome/free-solid-svg-icons";
const Milestone = () => {

  return (
    <section className="container" id="counter-view">
      <h3 className="colored-text">Our Milestones</h3>
      <div className="row milestone d-flex text-center align-items-center">
        <div className="col-md-4">
          <FontAwesomeIcon className="fa" icon={faBook} />
          <h3 className="count1">150</h3>
          <p>Courses</p>
        </div>
        <div className="col-md-4">
          <i class="fa fa-youtube fa-3x"></i>
          <h3 className="count2">980K</h3>
          <p>Youtube Subscribers</p>
        </div>
        <div className="col-md-4">
          <i class="fa fa-graduation-cap fa-4x" aria-hidden="true"></i>
          <h3 className="count3">2500</h3>
          <p>Students</p>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
