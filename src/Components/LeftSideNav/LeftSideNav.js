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
    <div className="mt-3">
      {categories.map((category) => (
        <p key={category.id}>
          <button
            type="button"
            className="btn btn-light border border-secondary w-100 border-opacity-25"
          >
            <Link
              className="text-black text-decoration-none"
              to={`/coursesdetails/${category.id}`}
            >
              {category.coursename}
            </Link>
          </button>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
