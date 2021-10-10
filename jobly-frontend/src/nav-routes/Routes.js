import React from "react";
import Homepage from "../homepage/Homepage";
import Companies from "../company/Companies";
import Company from "../company/CompanyDetail";
import { Route, Switch, Redirect } from "react-router-dom";

/** Routes
 *  Routes for the app
 */


/* TODO: add authentication layer */
function Routes() {
  return (
    <Switch>

      <Route exact path="/">
        <Homepage />
      </Route>
      
      <Route exact path='/companies'>
        <Companies/>
      </Route>
      <Route exact path='/companies/:id'>
        <Company/> 
      </Route>
    </Switch>
  );
}

export default Routes;
