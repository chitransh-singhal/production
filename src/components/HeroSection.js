import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden flex flex-col items-center justify-center text-white text-center gap-6 rounded-b-2xl">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      
      <video
        autoPlay
        muted
        loop
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <source
          src="https://cdn.pixabay.com/video/2015/08/08/91-135735330_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-20 px-4">
        <h1 className="text-[25px] sm:text-[2rem] xs:[1.5rem] mb-4">Briefly describe your services</h1>
        <p className="text-7xl/[1.2] sm:text-[1.25rem] xs:text-[1rem] mb-8 font-[Inter] font-black bg-gradient-to-r from-[#FBB011] via-white to-[#FBB011] bg-clip-text text-transparent">
          Capturing Moments, <br /> Crafting Stories
        </p>
        <button className="px-8 py-3 sm:px-[1.5rem] sm:py-[0.5rem] xs:px-[1.2rem] xs:py-[0.4rem] text-lg sm:text-[0.9rem] xs:text-[0.8rem] font-semibold border border-colorOne text-colorOne bg-transparent cursor-pointer transition-colors duration-300 ease-in-out rounded hover:bg-colorOne hover:text-black">
          Watch Showreel <i className="bi bi-camera-video"></i>
        </button>
      </div>
      
      <div className="relative z-20 flex gap-4 uppercase mt-[90px] items-center">
        <h4 className="font-light">Production</h4>
        <h4 className="font-light">Photoshoot</h4>
        <h4 className="font-light">Videography</h4>
      </div>
      
      <div className="absolute py-2 px-4 sm:py-[0.4rem] sm:px-[0.8rem] sm:text-[0.9rem] xs:py-[0.3rem] xs:px-[0.6rem] xs:text-[0.8rem] rounded text-white top-4 right-4 z-20">
        <img src="/assets/Vector-1.png" alt="" className="w-20 h-20" />
      </div>
      <div className="absolute py-2 px-4 sm:py-[0.4rem] sm:px-[0.8rem] sm:text-[0.9rem] xs:py-[0.3rem] xs:px-[0.6rem] xs:text-[0.8rem] rounded text-white bottom-4 left-4 z-20">
        <img src="/assets/Vector.png" alt="" className="w-20 h-20" />
      </div>
      
      <div className="absolute bottom-5 right-8 text-sm font-poppins z-20">@2025</div>
    </section>
  );
};

export default HeroSection;