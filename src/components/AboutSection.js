import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const [translateZ, setTranslateZ] = useState(320);

  useEffect(() => {
    const updateTransform = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setTranslateZ(150);
      } else if (window.matchMedia("(max-width: 1023px)").matches) {
        setTranslateZ(280);
      } else {
        setTranslateZ(320);
      }
    };

    updateTransform(); // Set initial value
    window.addEventListener("resize", updateTransform);

    return () => window.removeEventListener("resize", updateTransform);
  }, []);

  return (
    <div className="pt-[110px] mx-auto flex lg:flex-col lg:text-center items-center justify-between flex-wrap w-full max-w-[1600px] bg-white">
      <div className="w-full flex lg:flex-col-reverse flex-row justify-center items-start">
        <div className="lg:max-w-full max-w-[40%] text-left flex flex-col justify-center items-start gap-2">
          <h2 className="text-[32px] text-[#333] font-bold text-center mb-[15px] outline outline-2 outline-colorOne rounded-3xl w-1/3 xs:!w-1/2">
            About us
            <i className="bi bi-bullseye ml-1 text-xl text-colorOne"></i>
          </h2>
          <h2 className="text-[32px] mb-[15px] text-[#333] font-bold">
            {" "}
            We’re the crafters of fascinating videos <br /> that associate with
            your viewers personally.
          </h2>
          <p className="text-[#555] mb-[15px] text-base/[1.6]">
            From extensive video broadcast targets to the web, a commercial
            quality of visualization allows brand engagement in new, innovative
            ways. Our team comprises skilled experts who blend creativity and
            strategy to produce impactful stories that align with your brand’s
            goals.
          </p>
          <p className="text-[#555] mb-[15px] text-base/[1.6]">
            We take pride in our production work! And our team has spent plenty
            of time mastering every minute detail to make sure we craft nothing
            but the best visual experiences for you.
          </p>
          <div className="flex gap-[15px] mt-10">
            <a
              href="#"
              className="md:px-[1.5rem] md:py-[0.5rem] xs:px-[1.2rem] xs:py-[0.4rem] md:text-[0.9rem] xs:text-[0.8rem] no-underline mt-6 px-8 py-3 text-lg font-semibold border border-colorOne text-black bg-colorOne cursor-pointer transition-all duration-200 ease-in-out rounded hover:bg-[#fbb111e7]"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="md:px-[1.5rem] md:py-[0.5rem] xs:px-[1.2rem] xs:py-[0.4rem] md:text-[0.9rem] xs:text-[0.8rem] no-underline mt-6 px-8 py-3 text-lg font-semibold border-2 border-[#F4A017] text-[#F4A017] bg-transparent cursor-pointer transition-colors duration-300 ease-in-out rounded hover:bg-colorOne hover:text-black"
            >
              View Work
            </a>
          </div>
        </div>
        <div
          className="w-full h-[650px] text-center overflow-hidden relative float-end perspective-[1000px] max-w-full"
          style={{ transform: "rotate3d(1, 1, 1, 45deg)",  transformOrigin: "center top" }}
        >
          <div
            className="w-[200px] lg:w-[160px] md:w-[150px] h-[390px] lg:h-[200px] md:h-[300px] top-[10%] left-[calc(60%-100px)] xs:!left-[calc(60%-80px)] md:left-[calc(50%-50px)] animate-autoRun z-2 absolute"
            style={{ "--quantity": 6, "transform-style": "preserve-3d" }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(${translateZ}px)`,
                "--position": 4,
              }}
            >
              <img
                src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                alt=""
                className="w-full h-full border object-cover rounded-[8px]"
                loading="lazy"
              />
            </div>
            <div
              className="absolute inset-0 "
              style={{
                "--position": 5,
                transform: `rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(${translateZ}px)`,
              }}
            >
              <img
                src="/assets/images/_DSC5669.jpg"
                alt=""
                className="w-full h-full border object-cover rounded-[8px]"
                loading="lazy"
              />
            </div>
            <div
              className="absolute inset-0 "
              style={{
                "--position": 6,
                transform: `rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(${translateZ}px)`,
              }}
            >
              <img
                src="/assets/images/_DSC5753.jpg"
                alt=""
                className="w-full h-full border object-cover rounded-[8px]"
                loading="lazy"
              />
            </div>
            <div
              className="absolute inset-0 "
              style={{
                "--position": 7,
                transform: `rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(${translateZ}px)`,
              }}
            >
              <img
                src="/assets/images/_DSC5799.jpg"
                alt=""
                className="w-full h-full border object-cover rounded-[8px]"
                loading="lazy"
              />
            </div>
            <div
              className="absolute inset-0 "
              style={{
                "--position": 8,
                transform: `rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(${translateZ}px)`,
              }}
            >
              <img
                src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                alt=""
                className="w-full h-full border object-cover rounded-[8px]"
                loading="lazy"
              />
            </div>
            <div
              className="absolute inset-0 "
              style={{
                "--position": 9,
                transform: `rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(${translateZ}px)`,
              }}
            >
              <video
                autoPlay
                muted
                loop
                className="w-full max-w-full block object-cover rounded-lg"
              >
                <source src="/assets/images/aaaaa.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              className="absolute inset-0 "
              style={{
                "--position": 10,
                transform: `rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(${translateZ}px)`,
              }}
            >
              <video
                autoPlay
                muted
                loop
                className="w-full max-w-full block object-cover rounded-lg"
              >
                <source src="/assets/images/ssss.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
