import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "bootswatch/dist/cosmo/bootstrap.min.css"
import Routes from "./nav-routes/Routes";
import Nav from "./nav-routes/Nav"

function App() {
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