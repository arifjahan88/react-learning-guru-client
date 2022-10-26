import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import loginimage from "./../Image/loginform.png";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const { loginuser } = useContext(AuthContext);
  const [accept, setaccept] = useState(false);
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const ClickHundleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginuser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        seterror("");
        navigate(from, { replece: true });
      })
      .catch((error) => {
        console.error(error);
        seterror(error.message);
      });
    console.log(email, password);
  };

  const Handlecheaked = (event) => {
    setaccept(event.target.checked);
  };
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg="6">
            <Image className="w-100" src={loginimage} alt="" />
          </Col>
          <Col lg="6" className="d-flex align-items-center">
            <Form onSubmit={ClickHundleSubmit} className="w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5 fw-semibold">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fs-5 fw-semibold">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
                <Form.Text className="text-danger">{error}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  onClick={Handlecheaked}
                  label={
                    <>
                      Accept <Link to="/tearms">Tearms and Conditions</Link>
                    </>
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={!accept}>
                Submit
              </Button>
              <div className="text-center">
                <Link to="/register">Don't Have Account!</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
