import { Route, Routes } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";

export const MyRoutes = () => {
  const getUserDetails = JSON.parse(localStorage.getItem("loggedInUser"));
  const isLoggedIn = getUserDetails ? getUserDetails.isLoggedIn : false;
  const userDetails = getUserDetails ? getUserDetails.userDetails : null;

  const routes = [
    { path: "*", layout: AppLayout, component: NotFound },
    { path: AppRoutes.DEFAULT, layout: AuthLayout, component: Login },
    { path: AppRoutes.LOGIN, layout: AuthLayout, component: Login },
    {
      path: AppRoutes.DASHBOARD,
      layout: DashboardLayout,
      component: Dashboard,
      protected: true,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.protected ? (
                <ProtectedRoutes isLoggedIn={isLoggedIn}>
                  <route.layout>
                    <route.component userDetails={userDetails} />
                  </route.layout>
                </ProtectedRoutes>
              ) : (
                <route.layout>
                  <route.component />
                </route.layout>
              )
            }
          />
        );
      })}
    </Routes>
  );
};
