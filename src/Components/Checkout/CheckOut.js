import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import toast from "react-hot-toast";

const CheckOut = () => {
  const data = useLoaderData();
  const Handletoast = () => {
    toast.success("Cheaked Out Successfully!!");
  };

  return (
    <div>
      <Card className="text-center mt-3">
        <Card.Img className="rounded-3" variant="top" src={data.image_url} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.details}</Card.Text>
          <div>
            <Button onClick={Handletoast} variant="outline-success">
              Checked Out
            </Button>{" "}
            <Link to="/courses">
              <Button variant="outline-info">Back to Courses</Button>{" "}
            </Link>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex justify-content-between">
            <div>
              <span>Author : {data.author.name}</span>
              <span className="ms-2">
                Published : {data.author.published_date}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <FaEye></FaEye>
              <span className="ms-1">{data.total_view}</span>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CheckOut;
