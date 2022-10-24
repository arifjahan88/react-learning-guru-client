import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Courses.css";

const Courses = () => {
  return (
    <div>
      <div className="text-center fs-1 fw-bold courses">OUR COURSES</div>
      <Container>
        <Row>
          <Col lg="3">right nav</Col>
          <Col lg="9">left nav</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
