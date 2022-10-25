import React from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navber = () => {
  const { logOut, user } = useContext(AuthContext);
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
          <Navbar.Brand href="#home">Learning Guru</Navbar.Brand>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navber;
