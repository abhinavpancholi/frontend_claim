import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <HeroBanner
          title="Health Insurance"
          description="Secure your health with our best plans."
          link="/create-policy"
        />
        <HeroBanner
          title="Home Insurance"
          description="Protect your home from unexpected damages."
          link="/create-policy"
        />
        <HeroBanner
          title="Car Insurance"
          description="Cover your vehicle against unforeseen accidents."
          link="/create-policy"
        />
      </div>
    </div>
  );
};

export default Home;
