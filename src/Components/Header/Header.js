import React from "react";
import Image from "./../HeaderImage/header_logo.png";
import "./Header.css";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="d-lg-flex align-items-center justify-content-center m-5 p-5">
      <div className="w-50 header_details">
        <h1 className="fw-bold">
          Welcome To <span className="text-warning">Learning Guru</span>
        </h1>
        <p>
          Unsure about the best course to take? You're covered by me. Find the
          ideal course for you by perusing the available options. It's gratis!
          Code With Harry is my attempt to quickly teach people the fundamentals
          of coding and other skills that took me a very long time to learn.
        </p>
        <Button variant="outline-secondary">Free Courses</Button>
        <Button className="ms-2" variant="outline-success">
          Explore Blog
        </Button>
      </div>
      <div>
        <img className="ms-5 header_image" src={Image} alt="" />
      </div>
    </div>
  );
};

export default Header;
