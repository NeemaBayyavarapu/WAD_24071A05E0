import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Payment() {
  return (
    <div className="page-container">
      <Navbar />

      <div className="card">
        <h1>Payment Page</h1>

        <form>
          <input
            type="text"
            placeholder="Card Holder Name"
          />

          <input
            type="text"
            placeholder="Card Number"
          />

          <input
            type="text"
            placeholder="Expiry Date"
          />

          <input
            type="password"
            placeholder="CVV"
          />

          <button type="submit">
            Pay Now
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Payment;