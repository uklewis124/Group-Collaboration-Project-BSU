import React from "react";

function EventCard({ title, date, location }) {
  return (
    <li className="event-card">
      <h3>{title}</h3>
      <p>{date} · {location}</p>
    </li>
  );
}

export default EventCard;