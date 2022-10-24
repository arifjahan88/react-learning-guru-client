import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <Navbar
        className="p-3"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Learning Guru</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link className="text-decoration-none text-white me-3" to="/">
                Home
              </Link>
              <Link
                className="text-decoration-none text-white me-3"
                to="courses"
              >
                Courses
              </Link>
              <Link className="text-decoration-none text-white me-3" to="faq">
                FAQ
              </Link>
              <Link className="text-decoration-none text-white me-3" to="blogs">
                Blogs
              </Link>
              <Link className="text-decoration-none text-white me-3" to="login">
                LogIn
              </Link>
              <Link
                className="text-decoration-none text-white me-3"
                to="logout"
              >
                SignUp
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navber;
