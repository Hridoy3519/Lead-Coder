import React from "react";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar className="navbar px-2" expand="lg">
        <Navbar.Brand as={Link} to="/home" className="navbar-brand" >LeadCoder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-between">
          <Nav className="mr-auto my-2 my-lg-0 nav"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            
            <Nav.Link className="nav-link" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/about">About</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/enrollment">Your Enrollment</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
