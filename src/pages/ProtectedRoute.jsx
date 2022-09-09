import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";
import { Loader } from "../components";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated && !user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
