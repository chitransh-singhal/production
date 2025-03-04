import React, { useEffect, useRef } from "react";

const ContactUs = () => {
  const btnRef = useRef(null);
  const contactBgRef = useRef(null);

  // useEffect(() => {
  //   const btn = btnRef.current;
  //   const contactBg = contactBgRef.current;

  //   if (!btn || !contactBg) return;

  //   const handleMouseMove = (event) => {
  //     const rect = contactBg.getBoundingClientRect();
  //     const x = event.clientX - rect.left;
  //     const y = event.clientY - rect.top;
  //     btn.style.left = `${x}px`;
  //     btn.style.top = `${y}px`;
  //     btn.style.transform = "translate(-50%, -50%)";
  //   };

  //   const handleClick = (event) => {
  //     event.stopPropagation();
  //   };

  //   btn.addEventListener("click", handleClick);
  //   contactBg.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     btn.removeEventListener("click", handleClick);
  //     contactBg.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div className="p-8 bg-gray-900 text-white relative">
      <div class="top-text">
        <h2 class="title-top-text out-Testimonial">
          Get Started<i class="bi bi-envelope-paper"></i>
        </h2>
      </div>
      <div class="contact-bg" id="contact-Bg">
        <h2>
          Get in <span> touch with us.</span> We're here to{" "}
          <span> assist you.</span>
        </h2>
        <button class="see-more-cont" id="seeMoreBtnn">
          Contact-Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
