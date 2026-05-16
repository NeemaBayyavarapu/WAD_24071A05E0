import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Events() {
  const events = [
    "Football Tournament",
    "Cricket League",
    "Swimming Competition",
    "Badminton Championship",
  ];

  return (
    <div className="page-container">
      <Navbar />

      <div className="content">
        <h1>Event Registration</h1>

        <div className="card-grid">
          {events.map((event, index) => (
            <div className="info-card" key={index}>
              <h2>{event}</h2>

              <button>
                Register
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Events;