import Navbar from "../components/Navbar";

const SubmitClaim = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Submit Claim</h2>
          <form>
            <label className="block mb-2 font-medium">Policy ID</label>
            <input
              type="text"
              placeholder="Enter your policy ID"
              className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2 font-medium">Claim Amount</label>
            <input
              type="number"
              placeholder="Enter claim amount"
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
