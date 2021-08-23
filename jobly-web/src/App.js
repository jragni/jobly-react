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
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function logout() {
    setCurrentUser(null);
    setToken("");
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

  useEffect(function fetchLocalToken() {
    const localToken = localStorage.getItem("token");
    console.log("here at fetchLocalTOken", localToken);
    if (localToken != null) {
      console.log("######################setting local token ", localToken);
      setToken(localToken);
    }
  }, []);

  ////// LESSON LEARNED..... set the api token to token
  useEffect(
    function fetchCurrentUser() {
      console.log("fetching current User");
      async function handleFetchUser() {
        console.log("handleFetchUser");
        JoblyApi.token = token;
        const { username } = jwt(token);
        console.log("fetch user from token: ", username);
        const user = await JoblyApi.getUser(username);
        console.log("user fetched: ", user);
        setCurrentUser(user);
      }
      console.log("currentUser at token: ", token);
      if (token) {
        handleFetchUser();
      }
      setIsLoading(false);
    },
    [token]
  );

  // TODO: will as how to implement localStorage

  //useEffect(
  //function handleToken() {
  //if (token) {
  //console.log("token exists, token:", token);
  //localStorage.setItem("token", token);
  //}
  //console.log("handletoken");
  //let localToken = localStorage.getItem("token");
  //console.log("localToken: ", localToken);

  //if (localToken !== "null") {
  //console.log("setting local token: ", localToken);
  //setToken(localToken);
  //}
  //},
  //[token]
  //);

  // use effecto n token to save value from local storage or remove.
  // new page load load user from token ---> have loading state so it doesnt render before ansewr
  if (isLoading) return <i> Loading... </i>;
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
