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
    setIsLoggedIn(true);
    setCurrentUser(null);
    // TODO :remove token
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          logout={logout}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
        />
        <Routes currentUser={currentUser} isLoggedIn={isLoggedIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
