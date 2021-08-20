import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
import currentUserContext from "./currentUserContext";
import jwt from "jwt-decode";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function login(data) {
    console.log("logging in...");
    const respToken = await JoblyApi.login(data);
    console.log("logged in");
    setToken(respToken);
  }

  async function signup(data) {
    console.log("App.js/signup --- user signup initiated.", data);
    const respToken = await JoblyApi.register(data); // returns a token
    setToken(respToken);
  }

  async function handleFetchUser() {
    console.log("handleFetchUser");
    const { username } = jwt(token);
    console.log("fetch user from token: ", username);
    const user = await JoblyApi.getUser(username);
    console.log("user fetched: ", user);
    setCurrentUser(user);
  }

  useEffect(
    function fetchCurrentUserLogin() {
      //console.log("fetchCurrentUserLogin, token: ", token); // for dev
      if (token) {
        handleFetchUser(currentUser);
      }
    },
    [token]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <currentUserContext.Provider value={currentUser}>
          <Nav login={login} logout={logout} />
          <Routes login={login} signup={signup} />
        </currentUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
