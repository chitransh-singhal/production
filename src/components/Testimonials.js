import React from "react";

const Testimonials = () => {
    return (
        <div className="w-full h-autp max-w-[1600px] mx-auto mt-[50px] bg-white">
            <div className="top-text">
                <h2 className="text-[28px] text-[#333] font-bold text-center mb-[15px] outline outline-2 outline-colorOne rounded-3xl w-[15%]">
                    Testimonial<i className="bi bi-chat-dots ml-1 text-xl text-colorOne"></i>
                </h2>
            </div>
            <div className="flex justify-between items-center w-full gap-[8px] sm:justify-start sm:gap-[6rem] ">
                <h3 className="text-[56px] sm:text-[32px] xs:text-[28px] font-bold">Hear from <br />
                    <samp> Satisfied Clients </samp></h3>
                <img src="/assets/img-bg.png" alt="" className="sm:w-[15rem] xs:w-40 "/>
            </div>
            <div 
                className="mt-[6px] w-full h-[900px] rounded-[6px] overflow-hidden flex flex-col justify-end items-center mx-[auto] my-[0] bg-text"
                style={{
                    background: "url('/assets/T-bg.png') no-repeat center",
                    backgroundSize: "cover",
                }}
            > 
                <h4 className="text-[25px] font-bold text-center w-[50%]">“Their professionalism and creativity were outstanding. The team's keen understanding of our vision translated into a compelling narrative that was spot-on with our expectations.”</h4>
                <div className="bg-[#333] w-[900px] h-[350px] mx-[auto] my-[20px] rounded-[6px]"></div>

                <div className="flex justify-center items-center gap-[8px] sm:text-[2rem] xs:[1.5rem]">
                    <img
                        className="w-[50px] h-[50px] object-cover rounded-[50%] outline-2 ouline-solid outline-colorOne" 
                        src="https://c4.wallpaperflare.com/wallpaper/326/481/271/girl-sexy-face-model-wallpaper-preview.jpg" alt="" />
                    <h5>first</h5>
                </div>
                <div className="flex flex-col gap-[10px] relative right-[-35%] top-[-30%] -translate-y-1/2">
                    <button className="w-[60px] h-[60px] rounded-[50%] border border-solid border-[#FFD700] flex items-center justify-center text-[22px] cursor-pointer transition-all duration-[0.3s] ease-in-out bg-white hover:scale-110 hover:opacity-80">
                        <i className="bi bi-chevron-left text-[#FFD700]"></i>
                    </button>
                    <button className="w-[60px] h-[60px] rounded-[50%] border border-solid border-[#FFD700] flex items-center justify-center text-[22px] cursor-pointer transition-all duration-[0.3s] ease-in-out bg-black hover:scale-110 hover:opacity-80">
                        <i className="bi bi-chevron-right text-white"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;