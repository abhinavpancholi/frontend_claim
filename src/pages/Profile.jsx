import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile = () => {
  const navigate = useNavigate();

  // Example user data (to be replaced with actual login data)
  const userData = {
    name: "Abhinav Pancholi",
    userId: "User101",
    image: "/src/assets/abhnv.png", // Placeholder for user image
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center w-full max-w-md">
          <img
            src={userData.image}
            alt="User Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
          />
          <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
          <p className="text-gray-600">User ID: {userData.userId}</p>
        </div>

        {/* Hero Banners Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
          {/* Get Policies */}
          <div
            onClick={() => alert("Fetching purchased policies...")}
            className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg rounded-lg p-6 cursor-pointer transform transition hover:scale-105 text-center"
          >
            <h2 className="text-xl font-bold">Get Policies</h2>
            <p>View the policies you have purchased.</p>
          </div>

          {/* Buy Policy */}
          <div
            onClick={() => navigate("/")}
            className="bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-lg p-6 cursor-pointer transform transition hover:scale-105 text-center"
          >
            <h2 className="text-xl font-bold">Buy Policy</h2>
            <p>Explore and buy new policies.</p>
          </div>

          {/* Get Claims */}
          <div
            onClick={() => alert("Fetching issued claims...")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg rounded-lg p-6 cursor-pointer transform transition hover:scale-105 text-center"
          >
            <h2 className="text-xl font-bold">Get Claims</h2>
            <p>View the claims you have issued earlier.</p>
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
