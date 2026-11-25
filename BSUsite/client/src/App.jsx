import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import EventCard from "./components/EventCard";
import students from "./assets/bsu-students.png";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Header setPage={setPage} />

      <main>
        {page === "home" && (
          <>
            <div className="intro">
              <section className="welcome">
                <h2>Hey there!</h2>
                <p>Find your people, join in and make it yours.</p>
              </section>

              <img
                src={students}
                alt="Students' Union representatives welcoming students"
              />
            </div>
            <div className="more-events">
  <p>Want to see everything that's on?</p>
  <button onClick={() => setPage("events")}>See all Events</button>
</div>
<h2>Coming up</h2>
            <div className="event-list">
              <EventCard title="Freshers Fair" date="24 Nov" location="Main Hall" />
              <EventCard title="Society Social" date="1 Dec" location="Student Hall" />
              <EventCard title="Open Mic Night" date="5th Dec" location="SU bar" />
            </div>
          </>
        )}

        {page === "events" && <h2>Events page</h2>}
      </main>
    </div>
  );
}

export default App;