import React from "react";

const Showcase = () => {
  return (
    <div
      className="mt-[90px] w-full h-[860px] md:h-auto max-w-full flex justify-center items-center sm:mt-[60px] xs:mt-[30px]"
      style={{
        background: "url('/assets/bg-img-gor.png') black no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="w-full max-w-[1600px] h-[750px] flex flex-col justify-center items-center gap-4 sm:px-[15px] xs:px-[10px]">
        <div className="flex justify-center items-center gap-8 w-full overflow-hidden flex-wrap md:flex-col md:gap-4 sm:gap-2 xs:gap-1">
          <div
            className="flex-1 w-[480px] h-[350px] md:w-full md:h-auto md:h-[300px] sm:h-[250px] xs:h-[200px] xs:bg-right z-5 rounded-sm overflow-hidden transition-all duration-200 ease-in hover:border-2 hover:border-colorOne"
            style={{
              background: "url('/assets/1.png') no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="p-2 flex flex-col justify-start items-start w-full gap-[15rem] md:gap-[5rem] sm:gap-[4rem] xs:gap-[5rem]">
              <div className="flex justify-center items-center gap-[20rem]">
                <span className="text-white text-[18px]">01</span>
                {/* <img alt="empty" /> */}
              </div>
              <div className="flex flex-col justify-center items-start text-white mt-[-5rem]">
                <h3 className="text-[73px] md:text-[50px] sm:text-[40px] xs:text-[35px]">06+</h3>
                <p className="md:text-[14px] sm:text-[13px] xs:text-[12px]">Years In Business</p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 w-[480px] h-[350px] md:w-full md:h-auto md:h-[300px] sm:h-[250px] xs:h-[200px] z-5 rounded-sm overflow-hidden transition-all duration-200 ease-in relative"
            style={{
              background: "url('/assets/2.png') no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="p-2 flex flex-col justify-start items-start w-full gap-[15rem] md:gap-[5rem] sm:gap-[4rem] xs:gap-[5rem]">
              <div className="flex justify-center items-center gap-[20rem]">
                <span className="text-white text-[18px]">02</span>
              </div>
              <div className="flex flex-col justify-center items-start text-white mt-[-5rem]">
                <h3 className="text-[73px] md:text-[50px] sm:text-[40px] xs:text-[35px]">2k+</h3>
                <p className="md:text-[14px] sm:text-[13px] xs:text-[12px]">Video make yet !</p>
              </div>
            </div>
            <div class="absolute top-0 right-0 mix-blend-screen">
              <img src="/assets/33.png" alt="no" />
            </div>
          </div>
          <div
            className="flex-1 w-[480px] h-[350px] md:w-full md:h-auto md:h-[300px] sm:h-[250px] xs:h-[200px] z-5 rounded-sm overflow-hidden transition-all duration-200 ease-in relative after:absolute after:top-0 after:right-0 after:mix-blend-screen"
            style={{
              background: "url('/assets/3.png') no-repeat",
              backgroundColor: "blue",
              backgroundSize: "cover",
            }}
          >
            <div className="p-2 flex flex-col justify-start items-start w-full gap-[15rem] md:gap-[5rem] sm:gap-[4rem] xs:gap-[5rem]">
              <div className="flex justify-center items-center gap-[20rem]">
                <span className="text-white text-[18px]">03</span>
              </div>
              <div className="flex flex-col justify-center items-start text-white mt-[-5rem]">
                <h3 className="text-[73px] md:text-[50px] sm:text-[40px] xs:text-[35px]">06+</h3>
                <p className="md:text-[14px] sm:text-[13px] xs:text-[12px]">satisfied customers</p>
              </div>
            </div>
            <div class="absolute top-0 right-0 mix-blend-screen">
              <img src="/assets/22.png" alt="no" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 w-full md:flex-col md:gap-4 sm:gap-2 xs:gap-1">
          <div className="flex-1 w-[480px] h-[350px] md:w-full md:h-auto md:h-[300px] sm:h-[250px] xs:h-[200px] z-5 w-full rounded-sm overflow-hidden transition-all duration-200 ease-in relative"
            style={{
              background: "url('/assets/4.png') no-repeat",
              backgroundSize: "cover",
            }}
        >
            <div className="p-2 flex flex-col justify-start items-start w-full gap-[15rem] md:gap-[5rem] sm:gap-[4rem] xs:gap-[5rem]">
              <div className="flex justify-center items-center gap-[20rem]">
                <span className="text-white text-[18px]">04</span>
              </div>
              <div className="flex flex-col justify-center items-start text-white mt-[-5rem]">
                <h3 className="text-[73px] md:text-[50px] sm:text-[40px] xs:text-[35px]">45k+</h3>
                <p className="md:text-[14px] sm:text-[13px] xs:text-[12px]">production</p>
              </div>
            </div>
            <div class="absolute top-0 right-0 mix-blend-screen">
              <img src="/assets/44.png" alt="no" />
            </div>
          </div>
          <div className="flex-1 w-[480px] h-[350px] md:w-full md:h-auto md:h-[300px] sm:h-[250px] xs:h-[200px] z-5 w-full rounded-sm overflow-hidden transition-all duration-200 ease-in"
            style={{
              background: "url('/assets/5.png') no-repeat",
              backgroundSize: "cover",
            }}
        >
            <div className="p-2 flex flex-col justify-start items-start w-full gap-[15rem] md:gap-[5rem] sm:gap-[4rem] xs:gap-[5rem]">
              <div className="flex justify-center items-center gap-[20rem]">
                <span className="text-white text-[18px]">04</span>
              </div>
              <div className="flex flex-col justify-center items-start text-white mt-[-5rem]">
                <h3 className="text-[73px] md:text-[50px] sm:text-[40px] xs:text-[35px]">45k+</h3>
                <p className="md:text-[14px] sm:text-[13px] xs:text-[12px]">production</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
