import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate saving signup data (replace this with actual backend integration)
    console.log("User signed up successfully!");
    alert("Signup successful! Redirecting to login...");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center min-h-screen bg-gray-100"
        style={{ backgroundImage: "url('/src/assets/bg.webp')" }}
      >
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="number"
              placeholder="Age"
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded mb-2"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
