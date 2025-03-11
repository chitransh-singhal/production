import React, { useState } from "react";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeeMoreClick = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const handleMouseMove = (event) => {
    const btn = document.getElementById("seeMoreBtnn");
    const container = document.getElementById("contact-Bg");
    if (btn && container) {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      btn.style.left = `${x}px`;
      btn.style.top = `${y}px`;
      btn.style.transform = "translate(-50%, -50%)";
    }
  };

  return (
    <div className="w-full h-auto max-w-[1600px] mx-[auto] pt-[50px] bg-white">
      <div className="top-text">
        <h2 className="text-[28px] text-[#333] font-bold text-center mb-[15px] outline outline-2 outline-colorOne rounded-3xl w-[15%] md:w-1/3 xs:!w-1/2">
          Get Started
          <i className="bi bi-envelope-paper ml-1 text-xl text-colorOne"></i>
        </h2>
      </div>

      <div
        className="w-full h-[355px] rounded-[8px] flex justify-start items-center p-[20px] relative overflow-hidden"
        id="contact-Bg"
        onMouseMove={handleMouseMove}
        style={{
          background: "url('/assets/contact-us-1.png') no-repeat center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-[66px] md:text-[48px] xs:!text-[30px] font-bold text-white w-1/2">
          Get in <span className="text-colorOne"> touch with us.</span> We're
          here to
          <span className="text-colorOne"> assist you.</span>
        </h2>
        <button
          className="absolute text-white py-[60px] px-[40px] bg-white/30 cursor-pointer rounded-[50%] pointer-events-auto z-5 transition-transform duration-[0.1s] ease-out shadow-custom backdrop-blur-[5px] border border-solid border-white/30"
          id="seeMoreBtnn"
          onClick={handleSeeMoreClick}
        >
          Contact-Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
