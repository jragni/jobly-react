import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
import currentUserContext from "./currentUserContext";

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false); //used for dev purposes.
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function login(data) {
    console.log("logging in...");
    const resp = await JoblyApi.logon(data);
    console.log("logged in");
    setToken(resp);
    const { username, password } = data;
  }

  async function signup(data) {
    console.log("App.js/signup --- user signup initiated.", data);
    const resp = await JoblyApi.register(data); // returns a token
    setToken(resp);
    const { username, password } = data;
  }

  async function handleFetchUser(data) {
    console.log("Fetching user");
    const user = await JoblyApi.getUser(data);
    setCurrentUser(user);
  }

  useEffect(
    function fetchCurrentUserLogin() {
      if (token) {
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
