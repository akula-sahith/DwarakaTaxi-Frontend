const HeroMain = () => {
  return (
    /* pt-32 or pt-40 pushes it down just enough to clear the Navbar */
    <div className="w-full pt-32 md:pt-40 flex flex-col items-center justify-center font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 tracking-tight">
          Book Your Taxi Instantly
        </h1>

        <p className="mt-4 text-xl text-gray-200 font-medium">
          Reliable taxis across South India
        </p>

        <div className="mt-8 flex justify-center">
          <button className="border-2 border-yellow-400 px-10 py-3 rounded-full text-white font-semibold hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroMain;