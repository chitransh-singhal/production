import { useState, useRef, useEffect } from "react";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  // Function to close modal on outside click
  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (modalRef.current && event.target === modalRef.current) {
  //       setIsModalOpen(false);
  //     }
  //   };

  //   window.addEventListener("click", handleOutsideClick);
  //   return () => window.removeEventListener("click", handleOutsideClick);
  // }, []);

  // // Function to move button with cursor
  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     if (buttonRef.current && containerRef.current) {
  //       const rect = containerRef.current.getBoundingClientRect();
  //       const x = event.clientX - rect.left;
  //       const y = event.clientY - rect.top;

  //       buttonRef.current.style.left = `${x}px`;
  //       buttonRef.current.style.top = `${y}px`;
  //       buttonRef.current.style.transform = "translate(-50%, -50%)";
  //     }
  //   };

  //   const container = containerRef.current;
  //   if (container) {
  //     container.addEventListener("mousemove", handleMouseMove);
  //     return () => container.removeEventListener("mousemove", handleMouseMove);
  //   }
  // }, []);

  return (
    <div className="p-8 bg-gray-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Our Portfolio</h2>
      </div>

      <div className="relative w-full h-80 bg-gray-300 mt-6 flex items-center justify-center" ref={containerRef}>
        <button
          ref={buttonRef}
          className="absolute px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg transition-all"
          onClick={() => setIsModalOpen(true)}
        >
          See More
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div ref={modalRef} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-lg font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <p>All portfolio images will be displayed here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;