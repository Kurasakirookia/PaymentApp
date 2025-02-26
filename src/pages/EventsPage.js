import React from "react";
import "../css/EventsPage.css"; // Create a CSS file for styling
import {Link} from "react-router-dom";
import rally from "../assets/raally3.png";


const EventsPage = () => {
  return (
    <div className="events_page_container">
      <div className="title"></div>
      <div className="random_ongoing_event"></div>
      <div className="all_events_container">
        <ul className="events_holder">
          <li className="event" id="all">All</li>
          <li className="event" id="past">Past Events</li>
          <li className="event" id="ongoing">Ongoing</li>
          <li className="event" id="upcoming">Upcoming</li>
        </ul>

        <div className="event_cards">
          {[1, 2, 3, 4].map((id) => (
            <div className="card" key={id}>
              <img src={rally} alt="card_poster" className="card_poster" />
              <div className="info_holder">
                <h3>XYZ</h3>
                <p>Lorem, ipsum dolor.</p>
                <h5>7/3/25</h5>
              </div>
              <a href="/details" className="details">View Details</a>
            </div>
          ))}
        </div>

        <div className="more">
          {/* <a href="/more-events">More</a> */}
          <Link to="/moreEvents" className="explore">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
