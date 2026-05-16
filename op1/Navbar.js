import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>Sports Club</h2>

      <div className="nav-links">
        <Link to="/membership">Membership</Link>
        <Link to="/events">Events</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/contact">Contact</Link>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;