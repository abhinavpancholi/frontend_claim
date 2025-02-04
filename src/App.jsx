import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Insurance from "./pages/Insurance";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import SubmitClaim from "./pages/SubmitClaim";
import CreatePolicy from "./pages/CreatePolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/submit-claim" element={<SubmitClaim />} />
        <Route path="/create-policy" element={<CreatePolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
