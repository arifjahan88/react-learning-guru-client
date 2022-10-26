import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CoursesCardDetails from "../CoursesCardDetails/CoursesCardDetails";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import "./Courses.css";

const Courses = () => {
  const coursedatas = useLoaderData();

  return (
    <div>
      <div className="text-center fw-bold courses">OUR COURSES</div>
      <Container>
        <Row>
          <Col lg="3">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="9">
            <Row lg="2" className="m-3">
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
