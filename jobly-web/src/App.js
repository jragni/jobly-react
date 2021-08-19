import "./App.css";
import React, { useState } from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  //TODO: create a function to persist through children (log in)

  function logout() {
    setIsLoggedIn(false);
    setCurrentUser(null);
    // TODO :remove token
  }

  function login() {
    console.log("logged in");
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          logout={logout}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
        />
        <Routes
          login={login}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
