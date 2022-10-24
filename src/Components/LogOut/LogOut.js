import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoutmage from "./../HeaderImage/signupform.png";
import Image from "react-bootstrap/Image";

const LogOut = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="6">
            <Image className="w-100" src={logoutmage} alt="" />
          </Col>
          <Col lf="6" className="d-flex align-items-center">
            <Form className="w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5 fw-semibold">Name</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5 fw-semibold">Phot Url</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
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

export default LogOut;
