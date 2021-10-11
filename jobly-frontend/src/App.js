import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "bootswatch/dist/cosmo/bootstrap.min.css"
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

  // TODO: add a list of API commands to gather props and state

  // TODO: decide whether or not to prop drill or useContext
  // TODO: add a function to login 
  // TODO: add a function to signup
  // TODO: add a function to update user;
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes/>
      </BrowserRouter>
    </div>
  ); 
}

export default App;