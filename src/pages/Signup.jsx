import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-2" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
          <input type="number" placeholder="Age" className="w-full p-2 border rounded mb-2" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" />
          <button className="bg-green-600 text-white w-full p-2 rounded">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
