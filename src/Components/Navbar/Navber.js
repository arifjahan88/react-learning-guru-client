import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
              <Nav.Link href="#deets">Home</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Courses
              </Nav.Link>
              <Nav.Link eventKey={3} href="#memes">
                FAQ
              </Nav.Link>
              <Nav.Link eventKey={4} href="#memes">
                Blogs
              </Nav.Link>
              <Nav.Link eventKey={5} href="#memes">
                LogIn
              </Nav.Link>
              <Nav.Link eventKey={6} href="#memes">
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navber;
