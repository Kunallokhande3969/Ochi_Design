import { motion } from "framer-motion";
import React from "react";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.5"
      className="w-full h-screen font-[Arial] bg-[#F1F1F1] text-black"
    >
      <div className="textstructure  pt-36 px-16 uppercase">
        {["We Create", "Eye Opening", "presentations"].map((item, index) => (
          <div className="masker " key={index}>
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8.5vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[1vw] w-[8.5vw] h-[5vw] -top-[.1vw] relative"
                  style={{ willChange: "transform" }}
                >
                  <img
                    className="rounded-lg h-full w-full object-cover"
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt=""
                  />
                </motion.div>
              )}
              <h1 className="text-[7.7vw] leading-[7vw] tracking-tighter font-semibold font-[Arial] -mb-[.8vw] uppercase">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="w-full mt-24 flex justify-between px-10">
        <div className="flex gap-8">
          {[
            "Public for private companies",
            "From the first pitch to the last pitch to IPO",
          ].map((items, index) => (
            <p
              className="text-md font-light mt-10 tracking-tight leading-none font-['Founders_Grotesk']"
              key={index}
            >
              {items}
            </p>
          ))}
        </div>

        <div className="start flex items-center mt-10 gap-3">
          <div className="px-4 py-2 border-2 rounded-full mt-8 border-zinc-500 hover:bg-black hover:text-white cursor-pointer font-['Founders_Grotesk']">
            Start the project
          </div>
          <div className="h-10 w-10 flex items-center mt-7 rounded-full justify-center border-2 border-zinc-500 hover:bg-black hover:text-white cursor-pointer font-['Founders_Grotesk']">
            ↗
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
