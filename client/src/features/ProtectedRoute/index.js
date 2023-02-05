import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { adminEmail } from "@/assets/data/AdminAccount";

const ProtectedRoute = ({ children, redirectPath = "/" }) => {
  const email = localStorage.getItem("email");
  if (!email || email !== adminEmail) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
