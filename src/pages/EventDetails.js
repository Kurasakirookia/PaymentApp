// import { useParams } from "react-router-dom";
// import "../css/details.css";



// const eventData = [
//   { id: "1", title: "XYZ", description: "Lorem ipsum dolor sit amet.", poster: "./raally3.png", deadline: "7th March 2025", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." }
// ];

// const EventDetails = () => {
//   const { id } = useParams();
//   console.log("Event ID:", id); // Debugging Log
//   const event = eventData.find(e => e.id === id);
//   console.log("Event Data:", event); // Debugging Log

//   if (!event) {
//     return <h2>Event not found</h2>;
//   }

//   return (
//     <div className="details_container">
//       <div className="details_info">
//         <div className="poster_img">
//           <div className="poster_title">
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//           </div>
//           <img src={event.poster} alt={event.title} className="poster" />
//         </div>
//         <div className="poster_info_container">
//           <p className="poster_info">{event.info}</p>
//           <h3>Deadline: {event.deadline}</h3>
//           <div className="links">
//             <a href="/" className="link">Register</a>
//             <button className="link">Copy Link</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;

import { useParams } from "react-router-dom";
import "../css/details.css";
import rally from "../assets/raally3.png";

const eventData = [
  { id: "1", title: "hello", description: "Lorem ipsum dolor sit amet.", poster: rally, deadline: "7th March 2025", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { id: "2", title: "Hackathon", description: "Join our exciting hackathon.", poster: "/assets/hackathon.png", deadline: "10th April 2025", info: "Solve real-world challenges in this 24-hour hackathon." }
];

const EventDetails = () => {
  const { id } = useParams();
  const event = eventData.find(e => e.id === id);

  if (!event) {
    return <h2>Event not found</h2>;
  }

  console.log(event)

  return (

    <div className="details_container">
      <div className="details_info">
        <div className="poster_img">
          <div className="poster_title">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
          <img src={event.poster} alt={event.title} className="poster" />
        </div>
        <div className="poster_info_container">
          <p className="poster_info">{event.info}</p>
          <h3>Deadline: {event.deadline}</h3>
          <div className="links">
            <a href="/PaymentAppFrontEnd" className="link">Register</a>
            <button className="link">Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
