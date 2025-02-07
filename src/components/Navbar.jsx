// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold">Policeazz</h1>
//       <div className="space-x-4">
//         <Link to="/" className="hover:underline">Home</Link>
//         {/* <Link to="/insurance" className="hover:underline">Insurance</Link> */}
//         <Link to="/login" className="hover:underline">Login</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// components/Navbar.jsx
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:10000/auth/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('token'); // Remove token from storage
      window.location.href = '/login'; // Redirect to login
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Policeazz</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <button onClick={handleLogout} className="hover:underline">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;