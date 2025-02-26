import React from "react";
import "../css/Navbar.css";
import logo from "../assets/samyog_logo_letters.png"; // Adjust path if needed

const Navbar = () => {
  return (
    <nav>
      <ul className="nav_list">
        <li className="nav_item">Home</li>
        <li className="nav_item">Clubs</li>
        <li className="nav_item">Teams</li>
        <li className="nav_item">Events</li>
      </ul>
      <img src={logo} alt="logo" className="logo" />
      <p className="gallery">Gallery</p>
    </nav>
  );
};

export default Navbar;
