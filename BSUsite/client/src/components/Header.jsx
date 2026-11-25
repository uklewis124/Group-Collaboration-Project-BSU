import React from "react";
import logo from "../assets/bsu-logo.png";

function Header({ setPage }) {
  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="Bath Spa Students' Union logo" className="logo" />

        <div className="title-block">
          <h1>Bath Spa Students' Union</h1>
          <nav>
            <a href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }}>Home</a>
<a href="#" onClick={(e) => { e.preventDefault(); setPage("events"); }}>Events</a>
          </nav>
        </div>
      </div> 
    </header>
  );
}

export default Header;