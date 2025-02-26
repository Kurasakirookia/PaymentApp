import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="card">
      <img src={event.poster} alt={event.title} className="card_poster" />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>{event.deadline}</strong></p>
      <Link to={`/event/${event.id}`} className="link">View Details</Link>
    </div>
  );
};

export default EventCard;
