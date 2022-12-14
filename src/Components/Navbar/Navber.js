import React, { useState } from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser, FaRegMoon, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import navlogo from "./../Image/navlogo.png";

const Navber = () => {
  const { logOut, user } = useContext(AuthContext);
  const [open, setopen] = useState(true);
  const HandlelogoutClick = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
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
          <Navbar.Brand className="fw-bold text-info" href="#">
            <img
              src={navlogo}
              width="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Learning <span className="text-danger">Guru</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="d-flex align-items-center">
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
              {user?.uid ? (
                <>
                  <span className="text-white me-2">{user?.displayName}</span>
                  <Link
                    onClick={HandlelogoutClick}
                    className="text-decoration-none text-white me-3"
                  >
                    LogOut
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="text-decoration-none text-white me-3"
                    to="login"
                  >
                    LogIn
                  </Link>
                  <Link
                    className="text-decoration-none text-white me-3"
                    to="register"
                  >
                    SignUp
                  </Link>
                </>
              )}
              <Link>
                {user?.photoURL ? (
                  <Image
                    roundedCircle
                    style={{ height: "40px" }}
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Link>
              <Link className="ms-2 text-decoration-none ">
                {open ? (
                  <div
                    className="d-flex align-items-center mt-1"
                    onClick={() => setopen(!open)}
                  >
                    <FaLightbulb></FaLightbulb>
                    <span>Light</span>
                  </div>
                ) : (
                  <div
                    className="d-flex align-items-center mt-1"
                    onClick={() => setopen(!open)}
                  >
                    <FaRegMoon></FaRegMoon>
                    <span>Dark</span>
                  </div>
                )}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navber;
