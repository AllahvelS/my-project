import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <h1 className="handwritten-heading">✏️easyJOT</h1>
          <p>Write your notes on your own Endless Page!</p>
          <Link to="/notes">
            <button className="button">Vamos!</button>
          </Link>
        </div>
        <div className="notepad-image">
          <img src="https://cdn-icons-png.flaticon.com/512/3131/3131619.png" alt="Notepad" className="notepad-icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;
