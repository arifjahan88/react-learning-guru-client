import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";

const CheckOut = () => {
  const data = useLoaderData();

  return (
    <div>
      <Card className="text-center mt-3">
        <Card.Img className="rounded-3" variant="top" src={data.image_url} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.details}</Card.Text>
          <Button variant="primary">Cheaked Out</Button>
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
