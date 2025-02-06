// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import axios from "axios";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [policies, setPolicies] = useState([]);

//   useEffect(() => {
//     const fetchPolicies = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://localhost:10000/policies/", 
//             // {type: policyType, coverageAmount},
//             {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
          
//         });
//         console.log("policy vreated : ", response.data)
//         setPolicies(response.data);
//       } catch (error) {
//         console.error("Failed to fetch policies:", error);
//       }
//     };

//     fetchPolicies();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//         {/* Profile Section */}
//         <div className="bg-white shadow-lg rounded-lg p-8 text-center w-full max-w-md">
//           <h1 className="text-2xl font-bold text-gray-800">Your Policies</h1>
//           {policies.length > 0 ? (
//             policies.map((policy) => (
//               <div key={policy._id} className="mt-4">
//                 <p className="text-gray-600">
//                   Policy Type: {policy.policyType}
//                 </p>
//                 <p className="text-gray-600">
//                   Coverage Amount: {policy.coverageAmount}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No policies found.</p>
//           )}
//         </div>

//         {/* Hero Banners Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
//           {/* Get Policies */}
//           <div
//             onClick={() => navigate("/create-policy")}
//             className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg rounded-lg p-6 cursor-pointer transform transition hover:scale-105 text-center"
//           >
//             <h2 className="text-xl font-bold">Create Policy</h2>
//             <p>Create a new policy.</p>
//           </div>

//           {/* Submit Claim */}
//           <div
//             onClick={() => navigate("/submit-claim")}
//             className="bg-red-500 hover:bg-red-600 text-white shadow-lg rounded-lg p-6 cursor-pointer transform transition hover:scale-105 text-center"
//           >
//             <h2 className="text-xl font-bold">Submit Claim</h2>
//             <p>Submit a claim for one of your policies.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    // const fetchPolicies = async () => {
    //   try {
    //     const token = localStorage.getItem("token");
    //     const response = await axios.get(
    //       "http://localhost:10000/policies/my-policies",
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
          
          
    //     );
        
    //     setPolicies(response.data);
    //   } catch (error) {
    //     console.error("Failed to fetch policies:", error);
    //     console.log("hello");
    //   }
    // };

    const fetchPolicies = async () => {
        try {
          const token = localStorage.getItem("token");
      
          if (!token) {
            console.error("No token found. User is not authenticated.");
            return;
          }
      
          console.log("Token Found:", token); // ✅ Debug token before request
      
          const response = await axios.get("http://localhost:10000/policies/my-policies", {
            headers: { Authorization: `Bearer ${token}` },
          });
      
          console.log("API Response:", response.data); // ✅ Debug API response
          setPolicies(response.data);
        } catch (error) {
          console.error("Failed to fetch policies:", error.response?.data || error.message);
        }
      };
      

    fetchPolicies();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800">Your Policies</h1>
          {policies.length > 0 ? (
            policies.map((policy) => (
              <div key={policy._id} className="mt-4">
                <p className="text-gray-600">
                    User ID: {policy.policyholderId}
                </p>
                <p className="text-gray-600">
                    Policy ID: {policy._id}
                </p>
                
                <p className="text-gray-600">
                  Policy Type: {policy.policyType}
                </p>
                <p className="text-gray-600">
                  Coverage Amount: {policy.coverageAmount}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No policies found.</p>
          )}
        </div>

        {/* Hero Banners Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
          {/* Get Policies */}
          <div
            onClick={() => navigate("/create-policy")}
            className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg rounded-lg p-6 cursor-pointer transform transition hover:scale-105 text-center"
          >
            <h2 className="text-xl font-bold">Create Policy</h2>
            <p>Create a new policy.</p>
          </div>

          {/* Submit Claim */}
          <div
            onClick={() => navigate("/submit-claim")}
            className="bg-red-500 hover:bg-red-600 text-white shadow-lg rounded-lg p-6 cursor-pointer transform transition hover:scale-105 text-center"
          >
            <h2 className="text-xl font-bold">Submit Claim</h2>
            <p>Submit a claim for one of your policies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;