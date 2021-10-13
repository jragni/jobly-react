import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import JoblyApi from "./api/api";
import Routes from "./nav-routes/Routes";
import Nav from "./nav-routes/Nav";
import jwt from "jsonwebtoken";
import UserContext from "./context/UserContext";

/** App
 * Jobly application.
 *
 * Props:
 *      - No props
 * State:
 *      - No states
 *
 * Index -> App -> {Nav, Routes}
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  /* logs user in by requesting a token upon succesful logon*/
  async function login(data) {
    console.debug("App.login", data);
    const token = await JoblyApi.login(data);
    JoblyApi.token = token;
    setToken(token);
    console.log("authentication successful");
  }

  function logout() {
    JoblyApi.token = null;
    setCurrentUser(null);
  }

  useEffect(
    function getUserInfo() {
      console.debug("getUserInfo", "token", token);
      if (token) {
        let userInfo = jwt.decode(token);
        setCurrentUser(userInfo);
        console.log("Current User: ", userInfo.username, "has been set.");
      }
    },
    [token]
  );

  async function register(data) {
    const token = await JoblyApi.register(data);    
    JoblyApi.token = token;
    console.log('Registration succesful!');
    setToken(token);
  }

  // TODO: add a function to update user;
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={currentUser}>
          <Nav logout={logout}/>
          <Routes register={register} login={login} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
