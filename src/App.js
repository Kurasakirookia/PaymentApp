import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import Navbar from "./components/Navbar";
import MoreEvents from "./pages/MoreEvents";

import AllEvents from "./pages/AllEvents";
import EventDetails from "./pages/EventDetails";

const App = () => {
  return (
   
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/PaymentApp" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/moreEvents" element={<MoreEvents/>}/>
        <Route path="/" element={<AllEvents />} />
        <Route path="/event/:id" element={<EventDetails />} />~
      </Routes>
    </Router>
  );
};

export default App;
