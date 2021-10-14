import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootswatch/dist/lux/bootstrap.min.css";
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
    localStorage.setItem("token", token);
    setToken(token);
    console.log("authentication successful");
  }

  /* Logs user out by clearing the token and current user */
  function logout() {
    JoblyApi.token = null;
    setCurrentUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
  }

  /** getUserInfo
   * Effect that fetches the user's information upon token receipt from
   *  sign in or registration.
   */
  useEffect(
    function getUserInfo() {
      async function fetchUserInfoByUsername(username) {
        let user = await JoblyApi.getUserInfo(username);
        console.log("fetched user:", user);
        setCurrentUser(user);
        
      }
      if (token) {
        let load = jwt.decode(token);
        console.log("load: ", load);
        fetchUserInfoByUsername(load.username);
      }
    },
    [token]
  );

  useEffect(function fetchTokenOnMount() {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      console.log("tried to retrieve token and succeeded");
      setToken(storedToken);
      JoblyApi.token = storedToken;
    }
  }, []);

  /** register
   * A function that registers a new user.
   *
   * @param data {object} : user information containing
   *                        {username, password, firstName, lastName, email}
   */
  async function register(data) {
    const token = await JoblyApi.register(data);
    JoblyApi.token = token;
    console.log("Registration succesful!");
    setToken(token);
    localStorage.setItem("token", token);
  }

  /** Function that updates the current user's information */
  async function update(data) {
    console.debug("Update");
    const user = await JoblyApi.updateUserInfo(currentUser.username, data);
    setCurrentUser(user);
  }

  async function applyToJob(id) {
    let jobId = await JoblyApi.apply(currentUser.username, id);
    console.log('applied to job: ', jobId);
  }


  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{currentUser, applyToJob, }}>
          <Nav logout={logout} />
          <Routes register={register} login={login} update={update} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
