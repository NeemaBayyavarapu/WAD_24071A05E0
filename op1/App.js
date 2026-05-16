import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const isLoggedIn =
    localStorage.getItem("loggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/membership"
          element={
            isLoggedIn
              ? <Membership />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/events"
          element={
            isLoggedIn
              ? <Events />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/payment"
          element={
            isLoggedIn
              ? <Payment />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/contact"
          element={
            isLoggedIn
              ? <Contact />
              : <Navigate to="/" />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;