// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import axios from "axios";

// const CreatePolicy = () => {
//   const [policyType, setPolicyType] = useState("");
//   const [coverageAmount, setCoverageAmount] = useState("");
//   const [policyholderId, setPolicyholderId] = useState("");

//   const handleCreatePolicy = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(
//         "http://localhost:10000/policies",
//         {
//           policyholderId,
//           policyType,
//           coverageAmount,
          
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert("Policy created successfully!");
//     } catch (error) {
//       alert("Failed to create policy. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div
//         className="relative h-screen bg-cover bg-center flex items-center flex justify-center items-center min-h-screen bg-gray-100"
//         style={{ backgroundImage: "url('/src/assets/bg.webp')" }}
//       >
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//           <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Create Policy</h2>
//           <form onSubmit={handleCreatePolicy}>
//             <label className="block mb-2 font-medium">Policy Type</label>
//             <select
//               value={policyType}
//               onChange={(e) => setPolicyType(e.target.value)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
//             >
//               <option value="Health">Health Insurance</option>
//               <option value="Home">Home Insurance</option>
//               <option value="Auto">Car Insurance</option>
//             </select>

//             <label className="block mb-2 font-medium">Coverage Amount</label>
//             <input
//               type="number"
//               placeholder="Enter coverage amount"
//               value={coverageAmount}
//               onChange={(e) => setCoverageAmount(e.target.value)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
//             />

//             <label className="block mb-2 font-medium">User ID</label>
//             <input
//               type="text"
//               placeholder="Enter your user ID"
//               value={policyholderId}
//               onChange={(e) => setPolicyholderId(e.target.value)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
//             />

//             <button className="bg-blue-600 text-white w-full p-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
//               Create Policy
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePolicy;

import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const CreatePolicy = () => {
  // const [policyType, setPolicyType] = useState("");
  const [policyType, setPolicyType] = useState("Health Insurance");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleCreatePolicy = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "https://backend-claims-t2an.onrender.com/policies",
        {
          policyType,
          coverageAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Policy created successfully!");
    } catch (error) {
      // alert("Failed to create policy. Please try again.");
      const errorMessage = error.response?.data?.message || "Failed to create policy. Please try again.";
      alert(errorMessage);
      console.error("Error creating policy:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center flex items-center flex justify-center items-center min-h-screen bg-gray-100"
        style={{ backgroundImage: "url('/assets/bg.webp')" }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Create Policy</h2>
          <form onSubmit={handleCreatePolicy}>
            <label className="block mb-2 font-medium">Policy Type</label>
            <select
              value={policyType}
              onChange={(e) => setPolicyType(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
            >
              <option value="Health Insurance">Health Insurance</option>
              <option value="Car Insurance">Car Insurance</option>
              <option value="Home Insurance">Home Insurance</option>
            </select>

            <label className="block mb-2 font-medium">Coverage Amount</label>
            <input
              type="number"
              placeholder="Enter coverage amount"
              value={coverageAmount}
              onChange={(e) => setCoverageAmount(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
            />
            {/* <label className="block mb-2 font-medium">activity</label>
            <input
              type="number"
              placeholder="Enter coverage amount"
              value={coverageAmount}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
            /> */}

            <button className="bg-blue-600 text-white w-full p-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Create Policy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePolicy;