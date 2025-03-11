import React, { useState, useRef } from "react";

const Services = () => {
  const [activeVideoUrl, setActiveVideoUrl] = useState("");
  const backgroundVideoRef = useRef(null);
  const videoBackgroundRef = useRef(null);

  const playVideo = (videoUrl) => {
    if (!backgroundVideoRef.current) return;
    if (videoUrl === activeVideoUrl) return;

    setActiveVideoUrl(videoUrl);

    backgroundVideoRef.current.pause();
    backgroundVideoRef.current.src = "";
    backgroundVideoRef.current.load();

    backgroundVideoRef.current.src = videoUrl;
    
    backgroundVideoRef.current.oncanplay = () => {
      backgroundVideoRef.current.play().catch(() => {});
    };

    if (videoBackgroundRef.current) {
      videoBackgroundRef.current.style.opacity = 1;
    }
  };

  const pauseVideo = () => {
    setActiveVideoUrl("");

    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.pause();
      backgroundVideoRef.current.currentTime = 0;
    }
    if (videoBackgroundRef.current) {
      videoBackgroundRef.current.style.opacity = 0;
    }
  };

  return (
    <div className="w-full h-[790px] max-w-[1600px] mx-auto mt-[50px] bg-transparent">
      <div className="flex justify-start items-center gap-[24px] mx-auto">
        <h2 className="text-[28px] text-[#333] font-bold text-center mb-[15px] outline outline-2 outline-colorOne rounded-3xl w-[15%] md:w-1/3 xs:!w-1/2">
          Our Services<i className="bi bi-film ml-1 text-xl text-colorOne"></i>
        </h2>
        <button className="relative group w-[12rem] h-auto inline-block cursor-pointer align-middle no-underline bg-transparent p-[0] text-[length:inherit] [font-family:inherit]">
          <span
            className="relative block w-[3rem] h-[3rem] bg-colorOne rounded-[1.625rem] transition-all duration-[0.45s] ease-custom  group-hover:w-full"
            aria-hidden="true"
          >
            <span
              className="transition-all duration-[0.45s] ease-custom absolute m-auto 
                         top-0 bottom-0 left-[0.625rem] w-[1.125rem] h-[1.125rem] 
                         before:absolute before:top-[0.29rem] before:right-[0.0625rem] before:content-['']
                         before:w-[0.625rem] before:h-[0.625rem] before:border-t-[0.125rem] before:border-solid
                         before:border-t-[#fff] before:border-r-[0.125rem] before:border-r-[#fff] before:rotate-45
                         group-hover:bg-white group-hover:translate-x-4"
              style={{ background: "none" }}
            ></span>
          </span>
          <span
            className="transition-all duration-[0.45s] ease-custom absolute top-0 left-0 right-0 bottom-0 py-[0.75rem] 
          text-colorOne font-bold uppercase text-center text-base/[1.6] ml-[1.85rem] group-hover:text-white"
          >
            View Work
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center overflow-hidden m-0 p-0 h-[70vh] md:h-auto text-white">
        <div className="flex flex-row relative gap-[20px] w-[90%] max-w-[1200px] z-2 md:flex-col md:w-full">
          <div
            className="flex items-end p-[20px] cursor-pointer relative w-[25%] md:w-full h-[400px] md:h-[150px] overflow-hidden rounded-[10px] bg-cover bg-center hover:scale-105"
            data-bg="https://cdn.pixabay.com/photo/2022/04/06/11/30/girl-7115394_1280.jpg"
            onMouseMove={() =>
              playVideo(
                "https://cdn.pixabay.com/video/2021/09/11/88207-602915574_large.mp4"
              )
            }
            onMouseLeave={pauseVideo}
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2022/04/06/11/30/girl-7115394_1280.jpg')",
              opacity:
                activeVideoUrl &&
                activeVideoUrl !==
                  "https://cdn.pixabay.com/video/2021/09/11/88207-602915574_large.mp4"
                  ? 0.2
                  : 1,
            }}
          >
            <div className="relative z-2 bg-black/50 p-[10px] rounded-[5px] mx-auto">
              <h2 className="text-[1.5rem] font-bold">Video Production</h2>
            </div>
          </div>
          <div
            className="flex items-end p-[20px] cursor-pointer relative w-[25%] md:w-full h-[400px] md:h-[150px] overflow-hidden rounded-[10px] bg-cover bg-center hover:scale-105"
            data-bg="thumb2.jpg"
            onMouseMove={() =>
              playVideo(
                "https://cdn.pixabay.com/video/2025/01/03/250395_large.mp4"
              )
            }
            onMouseLeave={pauseVideo}
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2023/10/10/14/27/night-view-8306605_1280.jpg')",
                opacity:
                activeVideoUrl &&
                activeVideoUrl !==
                  "https://cdn.pixabay.com/video/2025/01/03/250395_large.mp4"
                  ? 0.2
                  : 1,
            }}
          >
            <div className="relative z-2 bg-black/50 p-[10px] rounded-[5px] mx-auto">
              <h2 className="text-[1.5rem] font-bold">Creative Directions</h2>
            </div>
          </div>
          <div
            className="flex items-end p-[20px] cursor-pointer relative w-[25%] md:w-full h-[400px] md:h-[150px] overflow-hidden rounded-[10px] bg-cover bg-center hover:scale-105"
            data-bg="thumb3.jpg"
            onMouseMove={() =>
              playVideo(
                "https://cdn.pixabay.com/video/2024/02/28/202368-918049003_large.mp4"
              )
            }
            onMouseLeave={pauseVideo}
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2016/11/29/09/29/beach-1868716_1280.jpg')",
                opacity:
                activeVideoUrl &&
                activeVideoUrl !==
                  "https://cdn.pixabay.com/video/2024/02/28/202368-918049003_large.mp4"
                  ? 0.2
                  : 1,
            }}
          >
            <div className="relative z-2 bg-black/50 p-[10px] rounded-[5px] mx-auto">
              <h2 className="text-[1.5rem] font-bold">Promos & Commercial</h2>
            </div>
          </div>
          <div
            className="flex items-end p-[20px] cursor-pointer relative w-[25%] md:w-full h-[400px] md:h-[150px] overflow-hidden rounded-[10px] bg-cover bg-center hover:scale-105"
            data-bg="thumb4.jpg"
            onMouseMove={() =>
              playVideo(
                "https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4"
              )
            }
            onMouseLeave={pauseVideo}
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2024/06/08/02/22/beautiful-woman-8815656_1280.jpg')",
                opacity:
                activeVideoUrl &&
                activeVideoUrl !==
                  "https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4"
                  ? 0.2
                  : 1,
            }}
          >
            <div className="relative z-2 bg-black/50 p-[10px] rounded-[5px] mx-auto">
              <h2 className="text-[1.5rem] font-bold">Content Creation</h2>
            </div>
          </div>
        </div>

        <div
          className="fixed top-0 left-0 w-full h-full z-[-1] opacity-0 transition-opacity duration-[0.5s] ease-in-out pointer-events-none overflow-hidden"
          ref={videoBackgroundRef}
        >
          <video
            className="fixed top-[50%] left-[50%] w-full h-[100vh] object-cover -translate-x-1/2 -translate-y-1/2 overflow-hidden z-[-1]"
            ref={backgroundVideoRef}
            muted
            loop
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Services;
