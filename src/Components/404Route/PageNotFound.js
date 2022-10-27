import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img
          className="w-50"
          src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
          alt=""
        />
      </div>
      <div className="d-flex justify-content-center">
        <Link className="text-decoration-none" to="/">
          <Button className="d-flex align-items-center" variant="success">
            <FaArrowLeft className="me-2"></FaArrowLeft> Back To Home
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
