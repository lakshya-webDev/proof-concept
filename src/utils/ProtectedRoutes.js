import React from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../routes/AppRoutes";
const ProtectedRoutes = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return (
      <React.Fragment>
        <Navigate to={AppRoutes.LOGIN} replace />
      </React.Fragment>
    );
  }
  return children;
};
export default ProtectedRoutes;
