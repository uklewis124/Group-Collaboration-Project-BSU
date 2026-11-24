
import React from "react";
import "./App.css";
import Header from "./components/Header";
import EventCard from "./components/EventCard";

function App() {
  return (
    <div>
      <Header />

      <main>
        <h2>Welcome</h2>
        <p>Find out what's on at your Students' Union.</p>
        <div className="event-list">
  <EventCard title="Freshers Fair" date="24 Nov" location="Main Hall" />
  <EventCard title="Society Social" date="1 Dec" location="Student Hall" />
  <EventCard title="Open Mic Night" date="5th Dec" location="SU bar" />
</div>
      </main>
    </div>
  );
}

export default App;