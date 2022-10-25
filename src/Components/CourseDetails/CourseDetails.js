import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { FaDownload, FaEye, FaStar } from "react-icons/fa";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";

const CourseDetails = () => {
  const detailsdata = useLoaderData();
  const componentref = useRef();
  const Handlepdf = useReactToPrint({
    content: () => componentref.current,
    documentTitle: "Courses-Data",
    onAfterPrint: () => toast.success("Download Success"),
  });
  return (
    <div ref={componentref}>
      <h2>this is course {detailsdata.length}</h2>
      <Row lg="2" className="mt-2">
        {detailsdata.map((detail) => (
          <div key={detail.id}>
            <Card className="text-center span-3 bg-light border border-success span-2 mb-4 border-opacity-10 rounded-3 shadow-sm bg-body rounded">
              <Card.Header>
                <div className="d-flex justify-content-end">
                  <div className="me-2">
                    <Button
                      onClick={Handlepdf}
                      size="sm"
                      variant="outline-primary"
                    >
                      Download <FaDownload></FaDownload>
                    </Button>{" "}
                  </div>
                  <Link
                    to={`/checkout/${detail.id}`}
                    className="text-decoration-none"
                  >
                    <Button
                      className="d-flex align-items-center"
                      variant="outline-warning"
                      size="sm"
                    >
                      <FaStar className="me-1"></FaStar>Premium
                    </Button>{" "}
                  </Link>
                </div>
              </Card.Header>
              <Card.Img variant="top" src={detail.image_url} />
              <Card.Body>
                <Card.Title>{detail.title}</Card.Title>
                <Card.Text>{detail.details.slice(0, 200) + "..."}</Card.Text>
                <Link to={`/checkout/${detail.id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">
                <div className="d-flex justify-content-between">
                  <div>
                    <span>Author : {detail.author.name}</span>
                    <span className="ms-2">
                      Published : {detail.author.published_date}
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaEye></FaEye>
                    <span className="ms-1">{detail.total_view}</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default CourseDetails;
