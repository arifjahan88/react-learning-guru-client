import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/coursecategories")
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);
  return (
    <div className="m-3 p-2 border bg-light rounded-2">
      {categories.map((category) => (
        <p className="m-0 p-2" key={category.id}>
          <Link
            className="text-black text-decoration-none"
            to={`/coursesdetails/${category.id}`}
          >
            <button
              type="button"
              className="btn btn-light border border-secondary w-100 border-opacity-25"
            >
              {category.coursename}
            </button>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
