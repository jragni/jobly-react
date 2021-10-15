import React, { useContext } from "react";
import {Route , Redirect} from "react-router-dom";
import UserContext from "../context/UserContext";

/** PrivateRoute
 * Component that renders private routes for users that are logged in
 *
 * Props:
 *  - exact : forces the exact match of the route
 *  - path : endpoint for the route
 *  - children : Component to be rendered at the specified endpoint
 *
 * State:
 *  No State
 *
 * Routes -> PrivateRoute -> {EditProfileForm, Companies, Jobs}
 */

function PrivateRoute({ exact, path, children }) {
  const { currentUser } = useContext(UserContext);

  console.debug(
      "PrivateRoute",
      "exact=", exact,
      "path=", path,
      "currentUser=", currentUser,
  );

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
      <Route exact={exact} path={path}>
        {children}
      </Route>
  );
}

export default PrivateRoute;
