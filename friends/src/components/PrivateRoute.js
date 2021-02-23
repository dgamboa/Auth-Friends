import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to={{
                    pathname: "/login",
                    state: { error: "Please log in to access that URL" }
                  }}
                 />;
        }
      }}
    />
  );
};
