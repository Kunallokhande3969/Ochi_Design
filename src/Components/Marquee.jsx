import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const marqueeText = "We are Ochi";

  const renderItems = () =>
    Array(6)
      .fill(0)
      .map((_, i) => (
        <h1
          key={`marquee-${i}`}
          className="text-[22vw] leading-none font-[Arial] flex-shrink-0 px-4 whitespace-nowrap"
          style={{
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          {marqueeText}
        </h1>
      ));

  return (
    <div
      data-scroll
      className="w-full font-[Arial] py-13 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden relative"
    >
      <div
        className="text-white border-b-2 border-t-2 flex font-semibold uppercase tracking-tighter border-zinc-100  font-[Arial]"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
      >
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 130,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {renderItems()}
          {renderItems()}
          {renderItems()}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
