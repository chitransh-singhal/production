import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Their professionalism and creativity were outstanding. The team's keen understanding of our vision translated into a compelling narrative that was spot-on with our expectations.",
      image:
        "https://eventinteriors.wordpress.com/wp-content/uploads/2012/11/event-production-1.jpg", // Replace with actual image path
      name: "First",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/326/481/271/girl-sexy-face-model-wallpaper-preview.jpg", // Replace with actual avatar path
    },
    {
      text: "Amazing experience working with them! They delivered beyond expectations. We very much look forward to continuing to work with them. We would definitely recommend them.",
      image:
        "https://cdn.encoreglobal.com/wp-content/uploads/sites/8/2020/12/30234938/Event-Stage-Production-Set-Design.jpg",
      name: "Second",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/326/481/271/girl-sexy-face-model-wallpaper-preview.jpg",
    },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className="w-full h-auto max-w-[1600px] mx-auto pt-[50px] bg-white px-[1%] md:px-[2%]">
      <div className="top-text">
        <h2 className="text-[28px] xs:text-xl text-[#333] font-bold text-center mb-[15px] outline outline-2 outline-colorOne rounded-3xl w-[15%] md:w-1/3 xs:!w-2/5">
          Testimonial
          <i className="bi bi-chat-dots ml-1 text-xl text-colorOne"></i>
        </h2>
      </div>
      <div className="flex justify-between items-center w-full gap-[8px] md:gap-[2px]">
        <h3 className="text-[56px] xs:!text-[24px] md:text-[32px] font-bold">
          Hear from <br />
          <samp> Satisfied Clients </samp>
        </h3>
        <img
          src="/assets/img-bg.png"
          alt=""
          className="w-auto xs:!w-[7rem] md:w-[15rem]"
          loading="lazy"
        />
      </div>
      <div
        className="mt-[6px] w-full h-[900px] md:h-[750px] rounded-[6px] overflow-hidden flex justify-center items-center mx-[auto] align-middle my-[0] bg-text"
        style={{
          background: "url('/assets/T-bg.png') no-repeat center",
          backgroundSize: "cover",
        }}
      >
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="w-full max-w-6xl"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="px-24 md:px-12 sm:!px-6 flex flex-col space-y-4 items-center justify-center">
                <p className="text-[25px] md:text-[20px] xs:!text-base font-semibold text-black text-center">
                  "{item.text}"
                </p>
                <img
                  src={item.image}
                  alt="Event"
                  className="w-full h-[350px] md:h-[250px] sm:!h-[180px] rounded-xl object-cover"
                />
                <div className="flex justify-center items-center gap-[8px] sm:text-[2rem] xs:text-[1.5rem]">
                  <img
                    className="w-[50px] h-[50px] object-cover rounded-[50%] outline-2 ouline-solid outline-colorOne"
                    src={item.avatar}
                    alt=""
                    loading="lazy"
                  />
                  <h5>{item.name}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col gap-[13px] mr-[3%]">
          <button
            className="custom-next w-[60px] h-[60px] md:w-[40px] md:h-[40px] rounded-[50%] border border-solid border-[#FFD700] 
                      flex items-center justify-center text-[22px] cursor-pointer transition-all 
                      duration-[0.3s] ease-in-out bg-black hover:scale-110 hover:opacity-80"
          >
            <i className="bi bi-chevron-right text-white"></i>
          </button>
          <button
            className="custom-prev w-[60px] h-[60px] md:w-[40px] md:h-[40px] rounded-[50%] border border-solid border-[#FFD700]
                             flex items-center justify-center text-[22px] cursor-pointer transition-all
                             duration-[0.3s] ease-in-out bg-white hover:scale-110 hover:opacity-80"
          >
            <i className="bi bi-chevron-left text-[#FFD700]"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
