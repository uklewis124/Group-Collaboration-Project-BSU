import React from "react"; 
function EventCard({ title, date, location }) {  
    return (
    <div className="card">
      <h3>{title}</h3>
      <p>{date} - {location}</p>
    </div>
  );
}

export default EventCard;