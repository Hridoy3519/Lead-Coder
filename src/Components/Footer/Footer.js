import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row down align-items-center">
          <div className="col-md-4">
            <p>
              Millions of people of all ages and from around the world are
              improving their lives with us
            </p>
          </div>
          <div className="col-md-2">
            <h5>Course</h5>
            <h6>Web Development</h6>
            <h6>Ethical Hacking</h6>
            <h6>Cloud Development</h6>
            <h6>Network Engineer</h6>
            <h6>AWS Architect</h6>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <h5>Terms</h5>
            <h6>About US</h6>
            <h6>Contact Us</h6>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
          </div>
        </div>

        <div className="copyright">
          <small>
            ©Copyright 2021, Hridoy Chowdhury, Sylhet .All right reserved
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
