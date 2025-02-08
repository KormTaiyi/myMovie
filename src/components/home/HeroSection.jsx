import backgroundImage from "../../assets/background.png";

const HeroSection = () => {
  return (
    <main className="h-[455px] bg-center bg-no-repeat bg-cover relative flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="w-full h-full bg-black opacity-50 absolute"></div>
      <div className=" max-w-7xl sm:w-[90%] px-2 sm:px-0 mx-auto relative z-10 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-teal-300 to-blue-600">
          That's a <br /> Wrap 2024
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl">
          The best (and worst) of the year from TMDB.
        </p>
      </div>
    </main>
  );
};

export default HeroSection;
