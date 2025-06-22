import React from "react";

const MultiCard = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.6"
      className="h-[65vh] gap-3 flex w-full mt-50 y-10 py-12  pb-60 text-black px-10 "
    >
      <div className="h-[62vh] flex  rounded-2xl items-center justify-center w-[51%] text-white bg-[#004D43]">
        <div className="flex flex-col relative">
          <h1 className="text-[6vw] font-semibold text-[#CDEA68]">Ochi</h1>
          <div className="mr-3  relative top-18  -left-53">
            <button className="border-2 px-4  absolute  py-1 rounded-full border-[#CDEA68] text-[#CDEA68] ">
              @2024-2025
            </button>
          </div>
        </div>
      </div>

      <div className="h-[62vh] gap-4 w-[49%] rounded-2xl flex items-center justify-center">
        <div className="w-[48%] h-full rounded-2xl relative bg-zinc-900 flex  flex-col items-center justify-center">
          <h1 className="text-[4vw] font-semibold  text-[#F1F1F1]">clutch</h1>
          <div className="mt-[-13px]">
            <span className="text-black text-[1vw]  ">⭐⭐⭐⭐⭐</span>
          </div>

          <button className="text-white border-1 absolute bottom-6  mr-15 hover:bg-white transition ease-out duration-300 hover:text-black transision px-8 py-1 font-semibold rounded-full uppercase ">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="w-[48%] rounded-2xl relative h-full p-5 bg-[#212121]">
          <img
            className="h-[35%]  absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />

          <button className="text-white border-1 absolute bottom-6   hover:bg-white transition ease-out duration-300 hover:text-black transision px-5 py-1 font-semibold rounded-full uppercase">
            Bussiness Bootcapm Alumani
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiCard;
