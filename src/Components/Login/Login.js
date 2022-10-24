import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import loginimage from "./../HeaderImage/loginform.png";
import Image from "react-bootstrap/Image";

const Login = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg="6">
            <Image className="w-100" src={loginimage} alt="" />
          </Col>
          <Col lg="6" className="d-flex align-items-center">
            <Form className="w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5 fw-semibold">
                  Email address
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fs-5 fw-semibold">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
                <Form.Text className="text-muted">
                  Don't share your password to others.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
