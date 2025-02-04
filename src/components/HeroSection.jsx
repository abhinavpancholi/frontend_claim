const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/src/assets/insur.jpg')" }}
    >
      <div className=" bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-black">Policeazz</h1>
        <p className="text-black">Your Trusted Insurance Partner for Life, Home, and Car</p>
      </div>
    </div>
  );
};

export default HeroSection;
