import React from 'react';
import './Connect.css';
const Connect = () => {
    return (
    <div className="get_in_touch">
        <h1 className="title">Connect With us </h1>
    
        <div className="container">
          <form>
            <div className="contact-form row">
              <div className="form-field col-lg-6">
                <input className="input-text" type="text" name="fname"/>
                <label  className="label">First name</label>
              </div>
    
              <div className="form-field col-lg-6">
                <input className="input-text" type="text" name="lname"/>
                <label className="label">Last Name</label>
              </div>
    
              <div className="form-field col-lg-6">
                <input className="input-text" type="email" name="email"/>
                <label className="label">Email</label>
              </div>
    
              <div className="form-field col-lg-6">
                <input className="submit-btn" type="submit" name=""/>
              </div>
            </div>
          </form>
    
        </div>
    </div>
    );
};

export default Connect;