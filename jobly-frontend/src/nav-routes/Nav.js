import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/**
 * Nav
 * Navigation Bar
 */
function Nav(props) {
  return (
    <nav className="Nav navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
              Jobly
            </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
      </div>
      <ul className='navbar-nav me-auto'>
        {/* TODO: Add links to sign up forms when forms completed */}

        <li className='nav-item'>
          <NavLink className='nav-link' to="">Sign Up</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink className='nav-link' to="">Log In</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

/**
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
*/
