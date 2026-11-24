import React from "react";
import bsuStudents from "../assets/bsu-students.png";
import bsuLogo from "../assets/bsu-logo.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-branding">
          <img
            src={bsuLogo}
            alt="Bath Spa Students' Union"
            className="hero-logo"
          />
          <p className="eyebrow">
            WELCOME TO YOUR STUDENTS' UNION AT BATH SPA UNIVERSITY
          </p>
        </div>

        <h1>Your space. Your voice.</h1>

        <p>
          Discover opportunities, connect with students, and make the most of
          university life.
        </p>
      </div>

      <div className="hero-image">
        <img
          src={bsuStudents}
          alt="Bath Spa Students' Union representatives welcoming students"
        />
      </div>
    </section>
  );
}

export default Hero;