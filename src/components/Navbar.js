import React from "react";
import "../css/Navbar.css";
import logo from "../assets/samyog_logo_letters.png"; // Adjust path if needed
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav_list">
        <Link to="/" className="nav_item">Home</Link>
        <Link to="/events" className="nav_item">Clubs</Link>
        <Link className="nav_item">Teams</Link>
        <Link className="nav_item">Events</Link>
      </ul>
      <img src={logo} alt="logo" className="logo" />
      <p className="gallery">Gallery</p>
    </nav>
  );
};

export default Navbar;
