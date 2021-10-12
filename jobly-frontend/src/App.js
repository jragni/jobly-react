import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "bootswatch/dist/zephyr/bootstrap.min.css"
import JoblyApi from './api/api';
import Routes from "./nav-routes/Routes";
import Nav from "./nav-routes/Nav"

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


  // TODO: add a function to login 
  /* logs user in by requesting a token upon succesful logon*/
  async function login (data) {
    console.debug("App.login",data);
    const token = await JoblyApi.login(data);
    setToken(token);
    console.log('authentication successful');
  }

  // TODO: add a function to signup
  // TODO: add a function to update user;
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        {/* TODO: add context instead of prop drilling */}
        <Routes currentUser={currentUser} login={login} token={token}/>
      </BrowserRouter>
    </div>
  ); 
}

export default App;