import Navbar from "../components/Navbar";

const CreatePolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen bg-cover bg-center flex items-center flex justify-center items-center min-h-screen bg-gray-100"
        style={{ backgroundImage: "url('/src/assets/bg.webp')" }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Create Policy
          </h2>
          <form>
            <label className="block mb-2 font-medium">Policy Type</label>
            <select
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
            >
              <option>Health Insurance</option>
              <option>Home Insurance</option>
              <option>Car Insurance</option>
            </select>

            <label className="block mb-2 font-medium">Coverage Amount</label>
            <input
              type="number"
              placeholder="Enter coverage amount"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
            />

            <label className="block mb-2 font-medium">User ID</label>
            <input
              type="text"
              placeholder="Enter your user ID"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 mb-4"
            />

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
