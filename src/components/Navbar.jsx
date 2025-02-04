import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Policeazz</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        {/* <Link to="/insurance" className="hover:underline">Insurance</Link> */}
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
