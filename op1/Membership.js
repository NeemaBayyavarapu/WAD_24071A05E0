import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Membership() {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹999",
      features: "Gym Access",
    },
    {
      name: "Premium Plan",
      price: "₹1999",
      features: "Gym + Swimming",
    },
    {
      name: "Elite Plan",
      price: "₹2999",
      features: "All Sports Access",
    },
  ];

  return (
    <div className="page-container">
      <Navbar />

      <div className="content">
        <h1>Membership Plans</h1>

        <div className="card-grid">
          {plans.map((plan, index) => (
            <div className="info-card" key={index}>
              <h2>{plan.name}</h2>
              <h3>{plan.price}</h3>
              <p>{plan.features}</p>

              <button>Select Plan</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Membership;