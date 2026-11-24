
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
        <EventCard title="Freshers Fair" date="24 Nov" location="Main Hall" />
      </main>
    </div>
  );
}

export default App;