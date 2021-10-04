import React from "react";
import "./AboutUS.css";
const AboutUS = () => {
  return (
    <div>
      <div className="row d-flex align-items-center">
        <div className="col-md-6 ps-5">
          <h2 className="colored-text">About US</h2>
          <p>
            LeadCoder is an initiative that started on 2019, it feeds on the
            curiosity of Students, We Make sure to Provide, Quality Video
            Tutorials on various fields of Computer Science & Engineering. We
            are determined to keep uploading contents so that our Students can
            be industry ready as quickly as they Graduate from University.
          </p>
        </div>
        <div className="col-md-6">
          <img
            className="about-img img-fluid"
            src="./about/aboutus.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
