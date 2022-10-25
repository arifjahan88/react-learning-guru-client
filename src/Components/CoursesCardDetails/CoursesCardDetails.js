import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CoursesCardDetails = ({ coursedata }) => {
  console.log(coursedata);
  return (
    <div>
      <Col className="p-3 bg-light border border-success p-2 mb-4 border-opacity-10 rounded-3 shadow-sm bg-body rounded">
        <Card border="light" className="bg-light ">
          <Card.Img
            className="rounded-3"
            variant="top"
            src={coursedata.imageurl}
          />
          <div className="d-flex mt-3 align-items-center bg-light">
            <Card.Body>
              <Card.Title>{coursedata.coursename}</Card.Title>
            </Card.Body>
            <Link to={`/coursesdetails/${coursedata.id}`}>
              <Button variant="secondary">Start Course</Button>{" "}
            </Link>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default CoursesCardDetails;
