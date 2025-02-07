import backgroundImage from "../../assets/background.png";

const HeroSection = () => {
  return (
    <div
      className="h-[455px] bg-center bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-[35%] left-[10px] sm:left-[60px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-br from-teal-300 to-blue-600">That's a <br /> Wrap 2024</h1>
            <p className="text-white mt-4 text-sm sm:text-xl">The best (and worst) of the year from TMDB.</p>
        </div>
    </div>
  );
};

export default HeroSection;