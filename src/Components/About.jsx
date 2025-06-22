import React from "react";

const About = () => {
  return (
    <div>
      <div  className="w-full z-[99]  relative min-h-screen rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] p-20 ">
        <h1 className="text-[4.1vw] font-medium tracking-tight leading-[3.7vw] font-[Neue_Montreal] ">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <span className="border-b-6 inline-block border-black">
            raise funds
          </span>
          ,{" "}
          <span className="border-b-6 inline-block border-black">
            sell prod­ucts
          </span>
          ,
          <span className="border-b-6 inline-block border-black">
            {" "}
            ex­plain com­plex ideas
          </span>
          , and{" "}
          <span className="border-b-6 inline-block border-black ">
            hire great peo­ple.
          </span>
        </h1>
        <div className="h-[1px] w-[full]  mt-25 bg-zinc-600 "></div>
        <div className="flex text-lg justify-between px-10 mt-9">
          <h1> What you can expect:</h1>
          <div className="flex justify-between items-end gap-20">
            <div className="w-[22vw] text-lg">
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants.{" "}
              <span className="mt-6 inline-block">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </span>
            </div>
            <div className="text-lg ">
              Instagram <br />
              Behance <br />
              Facebook <br /> Linkedin
            </div>
          </div>
        </div>
        <div className="h-[1px] w-[full]  mt-25 bg-zinc-600 "></div>

        <div className=" flex justify-between items-start mt-7">
          <div className="w-[1/2]">
            <h1 className="text-[4vw]">Our approach:</h1>
            <button className="px-12 relative flex mt-2 items-center gap-4 uppercase rounded-full py-5 bg-black text-white">
              <h1 className="font-medium mr-4"> Read More</h1>

              <div className="h-3  w-3  flex items-center justify-center hover:h-5 hover:w-5  transition duration-800 ease-in-out  absolute ml-25  rounded-full bg-white">
                <h1 className="text-white hover:text-black  ">↗</h1>
              </div>
            </button>
          </div>
          <div className="w-[45vw] rounded-3xl  bg-amber-600 ">
            <div className="h-[80vh]  w-full">
              <img
                className="h-full w-full object-cover rounded-3xl"
                src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
