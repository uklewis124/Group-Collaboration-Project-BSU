
import "./App.css";
import bsuStudents from "./assets/bsu-students.png";
import bsuLogo from "./assets/bsu-logo.png";

function App() {
  return (
    <div className="app">

      <header className="header">
        <nav>
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">

        <section className="hero">
          
<div className="hero-content">

  <div className="hero-branding">
    <img
      src={bsuLogo}
      alt="Bath Spa Students' Union"
      className="hero-logo"
    />

    <p className="eyebrow">
      WELCOME TO YOUR STUDENTS' UNION
      AT BATH SPA UNIVERSITY
    </p>
  </div>

  <h1>Your space. Your voice.</h1>

  <p>
    Discover opportunities, connect with students,
    and make the most of university life.
  </p>

</div>

          <div className="hero-image">
            <img
              src={bsuStudents}
              alt="Bath Spa Students' Union representatives welcoming students"
            />
          </div>
        </section>

        <section id="explore" className="navigation">
          <div className="circle blue">Your Voice</div>
          <div className="circle pink">Events</div>
          <div className="circle lime">Get Support</div>
          <div className="circle blue">Societies</div>
        </section>

      </main>

    </div>
  );
}

export default App;

