import { useState } from "react";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeeMoreClick = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  const handleModalClick = () => {
    if(window.innerWidth <= 460){
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOutsideClick = (event) => {
    if (event.target.id === "imageModal") {
      setIsModalOpen(false);
    }
  };

  const handleMouseMove = (event, containerId, btnId) => {
    const btn = document.getElementById(btnId);
    const container = document.getElementById(containerId);
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
    <div
      className="w-full h-auto max-w-[1600px] mx-auto py-[50px] bg-white px-[1%] md:px-[2%]"
      onClick={handleOutsideClick}
    >
      <div className="top-text">
        <h2 className="text-[28px] xs:text-xl text-[#333] font-bold text-center mb-[15px] outline outline-2 outline-colorOne rounded-3xl w-[15%] md:w-1/3 xs:!w-2/5">
          Our Portfolio
          <i className="bi bi-camera-video ml-1 text-xl text-colorOne"></i>
        </h2>
      </div>

      <div
        className="flex jusify-start items-end mt-[20px] p-[6px] w-full h-[40vh] rounded-lg gap-[8px] overflow-hidden"
        style={{
          background: "url('/assets/work-img.jpg') no-repeat center",
          backgroundSize: "cover",
        }}
        onClick={handleModalClick}
      >
        <h4 className="text-white text-[1.6rem]/[1.2] opacity-[0.8] w-full">
          Photoshoot
        </h4>

        <div
          className="relative inline-block w-full h-full"
          id="imgContainer1"
          onMouseMove={(e) => handleMouseMove(e, "imgContainer1", "seeMoreBtn1")}
        >
          <button
            className="absolute text-white xs:hidden py-[60px] px-[40px] bg-white/30 cursor-pointer rounded-[50%] pointer-events-auto z-5 transition-transform duration-[0.1s] ease-out shadow-custom backdrop-blur-[5px] border border-solid border-white/30"
            id="seeMoreBtn1"
            onClick={handleSeeMoreClick}
          >
            See more
          </button>
        </div>
      </div>

      <div
        className="flex jusify-start items-end mt-[50px] p-[6px] w-full h-[40vh] rounded-lg gap-[8px] overflow-hidden img-2"
        style={{
          background:
            "url('https://cdn.pixabay.com/photo/2023/08/11/10/15/watch-8183268_1280.jpg') no-repeat center",
          backgroundSize: "cover",
        }}
        onClick={handleModalClick}
      >
        <h4 className="text-white text-[1.6rem]/[1.2] opacity-[0.8] w-full">
          Product Shoot
        </h4>

        <div
          className="relative inline-block w-full h-full"
          id="imgContainer2"
          onMouseMove={(e) => handleMouseMove(e, "imgContainer2", "seeMoreBtn2")}
        >
          <button
            className="absolute text-white xs:hidden py-[60px] px-[40px] bg-white/30 cursor-pointer rounded-[50%] pointer-events-auto z-5 transition-transform duration-[0.1s] ease-out shadow-custom backdrop-blur-[5px] border border-solid border-white/30"
            id="seeMoreBtn2"
            onClick={handleSeeMoreClick}
          >
            See more
          </button>
        </div>
      </div>

      <div
        className="flex jusify-start items-end mt-[50px] p-[6px] w-full h-[40vh] rounded-lg gap-[8px] overflow-hidden img-2"
        style={{
          background:
            "url('https://cdn.pixabay.com/photo/2016/08/16/18/08/camera-1598632_1280.jpg') no-repeat center",
          backgroundSize: "cover",
        }}
        onClick={handleModalClick}
      >
        <h4 className="text-white text-[1.6rem]/[1.2] opacity-[0.8] w-full">
          Photoshoot
        </h4>

        <div
          className="relative inline-block w-full h-full"
          id="imgContainer3"
          onMouseMove={(e) => handleMouseMove(e, "imgContainer3", "seeMoreBtn3")}
        >
          <button
            className="absolute text-white xs:hidden py-[60px] px-[40px] bg-white/30 cursor-pointer rounded-[50%] pointer-events-auto z-5 transition-transform duration-[0.1s] ease-out shadow-custom backdrop-blur-[5px] border border-solid border-white/30"
            id="seeMoreBtn3"
            onClick={handleSeeMoreClick}
          >
            See more
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-10"
          id="imageModal"
        >
          <div className="bg-white p-5 rounded-[10px] text-black relative z-11">
            <span
              className="absolute top-[10px] right-[15px] text-[20px] cursor-pointer"
              id="closeModal"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <p>All portfolio images will be displayed here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
