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

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import axios from "axios";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [policies, setPolicies] = useState([]);

//   useEffect(() => {
//     // const fetchPolicies = async () => {
//     //   try {
//     //     const token = localStorage.getItem("token");
//     //     const response = await axios.get(
//     //       "http://localhost:10000/policies/my-policies",
//     //       {
//     //         headers: {
//     //           Authorization: `Bearer ${token}`,
//     //         },
//     //       }
          
          
//     //     );
        
//     //     setPolicies(response.data);
//     //   } catch (error) {
//     //     console.error("Failed to fetch policies:", error);
//     //     console.log("hello");
//     //   }
//     // };

//     const fetchPolicies = async () => {
//         try {
//           const token = localStorage.getItem("token");
      
//           if (!token) {
//             console.error("No token found. User is not authenticated.");
//             return;
//           }
      
//           console.log("Token Found:", token); // ✅ Debug token before request
      
//           const response = await axios.get("http://localhost:10000/policies/my-policies", {
//             headers: { Authorization: `Bearer ${token}` },
//           });
      
//           console.log("API Response:", response.data); // ✅ Debug API response
//           setPolicies(response.data);
//         } catch (error) {
//           console.error("Failed to fetch policies:", error.response?.data || error.message);
//         }
//       };
      

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
//                     User ID: {policy.policyholderId}
//                 </p>
//                 <p className="text-gray-600">
//                     Policy ID: {policy._id}
//                 </p>
                
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
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found. User is not authenticated.");
          return;
        }

        // Fetch policies
        const policiesResponse = await axios.get(
          "http://localhost:10000/policies/my-policies",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setPolicies(policiesResponse.data);

        // Fetch claims
        const claimsResponse = await axios.get(
          "http://localhost:10000/claims/my-claim",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        
        setClaims(claimsResponse.data);
      } catch (error) {
        console.error("Failed to fetch data:", error.response?.data || error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        {/* Policies Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center w-full max-w-md mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Your Policies</h1>
          {policies.length > 0 ? (
            policies.map((policy) => (
              <div key={policy._id} className="mt-4 p-4 bg-gray-50 rounded">
                <p className="text-gray-600">Policy ID: {policy._id}</p>
                <p className="text-gray-600">Type: {policy.policyType}</p>
                <p className="text-gray-600">Coverage: ${policy.coverageAmount}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No policies found.</p>
          )}
        </div>

        {/* Claims Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center w-full max-w-md mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Your Claims</h1>
          {claims.length > 0 ? (
            claims.map((claim) => (
              <div key={claim._id} className="mt-4 p-4 bg-gray-50 rounded">
                <p className="text-gray-600">Claim ID: {claim._id}</p>
                <p className="text-gray-600">Policy ID: {claim.policyId}</p>
                <p className="text-gray-600">Amount: ${claim.claimAmount}</p>
                <p className="text-gray-600">Claim Date: {claim.claim_date}</p>
                <p className="text-gray-600">Status: {claim.status}</p>
                {claim.claim_update_amount && (
                  <p className="text-gray-600">Approved Amount: ${claim.claim_update_amount}</p>
                )}
                
              </div>
            ))
          ) : (
            <p className="text-gray-600">No claims found.</p>
          )}
        </div>

        {/* Action Buttons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
          <div
            onClick={() => navigate("/create-policy")}
            className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg rounded-lg p-6 cursor-pointer transform transition hover:scale-105 text-center"
          >
            <h2 className="text-xl font-bold">Create Policy</h2>
            <p>Create a new policy</p>
          </div>

          <div
            onClick={() => navigate("/submit-claim")}
            className="bg-red-500 hover:bg-red-600 text-white shadow-lg rounded-lg p-6 cursor-pointer transform transition hover:scale-105 text-center"
          >
            <h2 className="text-xl font-bold">Submit Claim</h2>
            <p>Submit a new claim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;