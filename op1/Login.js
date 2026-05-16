import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/membership");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1>Sports Club Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;