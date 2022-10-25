import React from "react";
import Image from "./../Image/header_logo.png";
import "./Header.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-lg-flex mt-5 align-items-center justify-content-center d-sm-m-5 p-5">
      <div className="header_details">
        <h1 className="fw-bold">
          Welcome To <span className="text-warning">Learning Guru</span>
        </h1>
        <p>
          Unsure about the best course to take? You're covered by me. Find the
          ideal course for you by perusing the available options. It's gratis!
          Code With Harry is my attempt to quickly teach people the fundamentals
          of coding and other skills that took me a very long time to learn.
        </p>

        <Link to="courses" className="me-2">
          <Button variant="outline-secondary">Free Courses</Button>
        </Link>
        <Link to="blogs">
          <Button variant="outline-success">Explore Blogs</Button>
        </Link>
      </div>
      <div className="header_image">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default Header;
