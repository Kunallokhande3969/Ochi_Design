import React from "react";

const Review = () => {
  return (
    <div className="min-h-screen w-full bg-[#F1F1F1]">
      <h1 className="text-6xl p-9 border-b-[1px] border-[#212121] text-[#212121]">
        Client's Reviews
      </h1>

      <div className="flex justify-around my-10">
        <h1>Karman Ventures</h1>

        <div className="text-[#212121] ">
          <h1>Services:</h1>
          <button className="uppercase px-3 py-2 text-[#212121] font-semibold rounded-full border-2 my-4 border-[#212121]">
            INVESTOR DESK
          </button>
          <br />
          <button className="uppercase px-3 py-2 text-[#212121] font-semibold rounded-full border-2 border-[#212121]">
            SALES DESK
          </button>
        </div>

        <div className="flex flex-col items-start gap-20">
          <h1>William Barnes</h1>
          <div>
            <div className="h-[7.9vw] w-[7.8vw] bg-red-300 rounded-[16px] flex items-center justify-center">
              <img src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="William Barnes" className="rounded-[16px] object-cover h-full w-full" />
            </div>
            <div>
              <p className="w-[30vw] mt-4 text-[#212121]">
                They were transparent about the time and the stages of the
                project. The end product is high quality, and I feel confident
                about how they were handholding the client through the process. I
                feel like I can introduce them to someone who needs to put a sales
                deck together from scratch, and they would be able to handhold the
                client experience from 0 to 100 very effectively from story to
                design. 5/5
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-zinc-400 font-semibold text-[1.3vw] ">READ</h1>
        </div>
      </div>
    </div>
  );
};

export default Review;