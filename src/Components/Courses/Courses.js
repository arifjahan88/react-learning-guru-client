import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CoursesCardDetails from "../CoursesCardDetails/CoursesCardDetails";
import "./Courses.css";

const Courses = () => {
  const coursedatas = useLoaderData();

  return (
    <div>
      <div className="text-center fs-1 fw-bold courses">OUR COURSES</div>
      <Container>
        <Row>
          <Col lg="3">right nav</Col>
          <Col lg="9">
            <Row lg="2">
              {coursedatas.map((coursedata) => (
                <CoursesCardDetails
                  key={coursedata.id}
                  coursedata={coursedata}
                ></CoursesCardDetails>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
