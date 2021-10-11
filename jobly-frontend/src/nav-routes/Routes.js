import React from "react";
import Homepage from "../homepage/Homepage";
import Companies from "../company/Companies";
import CompanyDetail from "../company/CompanyDetail";
import Jobs from "../job/Jobs";
import EditProfileForm from "../forms/EditProfileForm";
import SignupForm from "../forms/SignupForm";
import LoginForm from "../forms/LoginForm";
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
        <Companies />
      </Route>

      <Route exact path='/companies/:handle'>
        {/* TODO add company card id*/}
        <CompanyDetail/> 
      </Route>

      <Route exact path='/jobs'>
        <Jobs/>
      </Route>

      <Route exact path='/profile'>
        <EditProfileForm />
      </Route>

      <Route exact path='/signup'>
        <SignupForm />
      </Route>

      <Route exact path='/login'>
        <LoginForm />
      </Route>

    </Switch>
  );
}

export default Routes;
