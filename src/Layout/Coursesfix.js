import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../Components/LeftSideNav/LeftSideNav";
import Navber from "../Components/Navbar/Navber";

const Coursesfix = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="text-center fs-1 fw-bold courses">OUR COURSES</div>
      <Container>
        <Row>
          <Col lg="3">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col className="border-start" lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Coursesfix;
