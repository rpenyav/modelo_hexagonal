import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { token } = useAuth();

  return token ? <Navigate to="/dashboard" /> : <>{children}</>;
};

export default PublicRoute;
