import React, { useRef } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";
import { FaDownload, FaEye, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CourseDetails = () => {
  const detailsdata = useLoaderData();
  const componentref = useRef();
  const Handlepdf = useReactToPrint({
    content: () => componentref.current,
    documentTitle: "Courses-Data",
  });
  const handlereadmore = () => {
    toast.error("Please get premium Access");
  };
  return (
    <div ref={componentref}>
      <h2 className="text-center my-4  text-danger fw-bold">
        Here {detailsdata.length} Courses Available
        <hr />
      </h2>
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
                <Card.Text>
                  {detail.details.slice(0, 200) + "..."}
                  <Link onClick={handlereadmore}>read more</Link>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <div className="d-flex justify-content-around">
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
