import React from "react";
import Homepage from "../homepage/Homepage";
import { Route, Switch, Redirect } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  );
}

export default Routes;
