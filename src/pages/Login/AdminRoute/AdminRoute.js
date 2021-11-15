import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect, Route } from "react-router";

import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  if (!admin) {
    return <Link to="/"> Who The Hell Are You? Go to Home Page.</Link>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
