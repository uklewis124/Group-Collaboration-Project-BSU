import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CircleLink from "./components/CircleLink";
import Events from "./components/Events";

function App() {
  return (
    <div className="app">
      <Header />

      <main id="home">
        <Hero />

        <section id="explore" className="navigation">
          <CircleLink label="Your Voice" to="#voice" color="blue" />
          <CircleLink label="Events" to="#events" color="pink" />
          <CircleLink label="Get Support" to="#support" color="lime" />
          <CircleLink label="Societies" to="#societies" color="blue" />
        </section>

        <Events />
      </main>
    </div>
  );
}

export default App;