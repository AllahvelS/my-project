import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container"> 
      <nav className="navbar"> 
          <div className="navbar-logo">
          <Link to="/">
            <img className="navbar-icon" src="https://cdn-icons-png.flaticon.com/512/3131/3131619.png" alt="Notepad" /> 
          </Link>
          </div>
        <h1 className="navbar-link"> 
          <Link to="/login">Login</Link>
        </h1>
        <h1 className="navbar-link"> 
          <Link to="/notes">Notes</Link>
        </h1>
        {/* <h1 className="navbar-link"> 
          <Link to="/folders">Folders</Link>
        </h1> */}
        <button className="navbar-link"> 
          <Link to="/notes/new">New Note</Link>
        </button>
      </nav>
    </div>
  );
}
