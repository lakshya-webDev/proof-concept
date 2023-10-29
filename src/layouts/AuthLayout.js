import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = ({ children }) => {
  return (
    <React.Fragment>
    <section className="container text-center">
        <Outlet />
        {children}
      </section>
    </React.Fragment>
  );
};
export default AuthLayout;
