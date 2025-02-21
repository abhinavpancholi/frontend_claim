import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://backend-claims-t2an.onrender.com/auth/policyholder/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
       // Store JWT token
       console.log(response.data.token);
       
      navigate("/profile"); // Redirect to profile page
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center flex items-center flex justify-center items-center min-h-screen bg-gray-100"
        style={{ backgroundImage: "url('/assets/bg.webp')" }}
      >
        <div className="bg-white p-8 rounded-lg shadow-hg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Login</h2>
          <form onSubmit={handleLogin}>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
            />

            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
            />

            <button className="bg-blue-600 text-white w-full p-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            New user?{" "}
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;