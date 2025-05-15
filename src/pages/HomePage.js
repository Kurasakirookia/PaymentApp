import React from "react";
import "../css/HomePage.css"; // We'll create this for styling
import background from "../assets/background.png" // Adjust path if needed
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home_page">
      {/* Hero Section */}
      <div className="info_container" style={{ backgroundImage: `url(${background})` }}>
        <div className="info_box">
          <h3 className="college_name">SAMYOG, JSSATEB</h3>
          <h5 className="des">Techno Cultural Club</h5>
          <p className="des_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur debitis, nesciunt
            magnam dolorum illo dolores labore reprehenderit molestiae quos? Vero!
          </p>
          <a href="/PaymentAppFrontEnd" className="explore">
            Explore
          </a>
        </div>
      </div>

      {/* Events Section */}
      <div className="events_container">
        <div className="info_box">
          <h3 id="events_title">EVENTS</h3>
          <h5 id="events_des">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, ducimus!
          </h5>
          <p id="events_detail_des">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quo ea aliquam
            accusantium provident possimus aliquid, earum eligendi itaque quidem.
          </p>
          <Link to="/events" className="explore">Explore</Link>
        </div>

        {/* Event Posters */}
        <div className="poster_logos">
          <div className="logos">
            <img src={background} alt="logo1" id="posters1" />
            <img src={background} alt="logo2" id="posters2" />
            <img src={background} alt="logo3" id="posters3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
