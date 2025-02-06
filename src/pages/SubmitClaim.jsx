import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const SubmitClaim = () => {
  const [policyId, setPolicyId] = useState("");
  const [claimAmount, setClaimAmount] = useState("");

  const handleSubmitClaim = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:10000/claims",
        {
          policyId,
          claimAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Claim submitted successfully!");
    } catch (error) {
      alert("Failed to submit claim. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center flex items-center flex justify-center items-center min-h-screen bg-gray-100"
        style={{ backgroundImage: "url('/src/assets/bg.webp')" }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Submit Claim</h2>
          <form onSubmit={handleSubmitClaim}>
            <label className="block mb-2 font-medium">Policy ID</label>
            <input
              type="text"
              placeholder="Enter your policy ID"
              value={policyId}
              onChange={(e) => setPolicyId(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2 font-medium">Claim Amount</label>
            <input
              type="number"
              placeholder="Enter claim amount"
              value={claimAmount}
              onChange={(e) => setClaimAmount(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            <button className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700">
              Submit Claim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitClaim;