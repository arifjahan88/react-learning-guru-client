import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const CoursesCardDetails = ({ coursedata }) => {
  return (
    <div>
      <Col>
        <Card border="light">
          <Card.Header>{coursedata.coursename}</Card.Header>
          <Card.Img variant="top" src={coursedata.imageurl} />
          <Card.Body>
            <Card.Title>{coursedata.coursename}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CoursesCardDetails;
