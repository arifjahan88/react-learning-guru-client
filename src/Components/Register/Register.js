import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoutmage from "./../Image/signupform.png";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, seterror] = useState("");
  const ClickHundleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photourl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        seterror("");
        form.reset();
        profileUpdateinfo(name, photourl);
        toast.success("Registration Successful!");
      })
      .catch((error) => {
        console.error(error);
        seterror(error.message);
      });
  };

  const profileUpdateinfo = (name, photourl) => {
    const profile = {
      displayName: name,
      photoURL: photourl,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Container>
        <Row>
          <Col lg="6">
            <Image className="w-100" src={logoutmage} alt="" />
          </Col>
          <Col lf="6" className="d-flex align-items-center">
            <Form onSubmit={ClickHundleSubmit} className="w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5 fw-semibold">Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5 fw-semibold">
                  Enter Photo Url
                </Form.Label>
                <Form.Control
                  type="text"
                  name="photoUrl"
                  placeholder="Enter your photoUrl"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5 fw-semibold">
                  Enter Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fs-5 fw-semibold">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  required
                />
                <Form.Text className="text-danger">{error}</Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>

              <div className="text-center mt-2">
                <Link to="/login">Already Have an Acoount</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
