import React from "react";
import EventCard from "./EventCard";

const events = [
  { id: 1, title: "Freshers Fair", date: "24 Nov", location: "Main Hall" },
  { id: 2, title: "Society Social", date: "27 Nov", location: "SU Bar" },
  { id: 3, title: "Open Mic Night", date: "30 Nov", location: "Student Hub" },
];

function Events() {
  return (
    <section id="events" className="events">
      <h2>Upcoming events</h2>

      <ul className="event-list">
        {events.map((e) => (
          <EventCard
            key={e.id}
            title={e.title}
            date={e.date}
            location={e.location}
          />
        ))}
      </ul>
    </section>
  );
}

export default Events;