import React from "react";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner animation="border" variant="secondary" />;
  }

  if (!user) {
    return (
      <>
        {toast.error("Please Log In First! !", {
          position: "bottom-center",
        })}
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
      </>
    );
  }
  return children;
};

export default PrivateRoutes;
