import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";

function App() {
  // states set for Dev purposes
  const [isLoggedIn, setIsLoggedIn] = useState(false); // will change later --- used for dev purposes.
  const [currentUser, setCurrentUser] = useState({
    //username: "Ragglesoft", // for dev
    //firstName: "King Ray",// for dev
  });
  const [token, setToken] = useState(null);

  function logout() {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setToken(null);
  }

  async function login(data) {
    console.log("logging in...");
    const resp = await JoblyApi.logon(data);
    console.log("logged in");
    setToken(resp);
  }

  async function signup(data) {
    console.log("App.js/signup --- user signup initiated.", data);
    const resp = await JoblyApi.register(data); // returns a token
    setToken(resp);
  }

  useEffect(function fetchCurrentUserLogin() {});
  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          login={login}
          logout={logout}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
        />
        <Routes
          login={login}
          signup={signup}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
