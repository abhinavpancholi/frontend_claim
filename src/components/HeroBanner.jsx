import { useNavigate } from "react-router-dom";

const HeroBanner = ({ title, description, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl hover:scale-105 transform transition duration-300 cursor-pointer"
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HeroBanner;
