import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="page-container">
      <Navbar />

      <div className="card">
        <h1>Contact Us</h1>

        <p>Email: sportsclub@gmail.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: Hyderabad</p>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;