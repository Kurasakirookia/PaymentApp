import React from "react";
import eventsData from "../data/eventsData";
import "../css/moreEvents.css";

const MoreEvents = () => {
  return (
    <div className="more-events-container">
      {Object.keys(eventsData).map((category) => (
        <div key={category} className="type-of-event">
          <h2 className="title">{category.toUpperCase()}</h2>
          <div className="event-cards">
            {eventsData[category].map((event, index) => (
              <div key={index} className="card">
                <img src={event.image} alt="card_poster" className="card_poster" />
                <div className="info-holder">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <h5>{event.deadline}</h5>
                </div>
                <a href="/event-details" className="details">View Details</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreEvents;
