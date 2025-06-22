import React, { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const ProjectCard = ({ project, index, hoveredIndex, setHoveredIndex, widthClass = "w-[49%]" }) => (
  <motion.div
    className={`relative h-[90vh] ${widthClass} overflow-hidden rounded-xl z-10 cursor-pointer group mb-6`}
    initial={{ scale: 1 }}
    whileHover={{ scale: 0.95 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    onHoverStart={() => setHoveredIndex(index)}
    onHoverEnd={() => setHoveredIndex(null)}
  >
    {/* BACKGROUND TEXT CENTERED INSIDE IMAGE */}
    <motion.h1
      className={`absolute inset-0 flex justify-center items-center font-bold uppercase text-[#CDEA68] text-[7vw] tracking-tighter text-center z-20 pointer-events-none ${
        hoveredIndex === index ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <div className="flex">
        {project.bgText.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block overflow-hidden"
            initial={{ y: "100%", opacity: 0 }}
            animate={
              hoveredIndex === index
                ? {
                    y: "0%",
                    opacity: 1,
                    transition: {
                      delay: i * 0.03,
                      duration: 0.7,
                      ease: [0.16, 0.9, 0.3, 1.1],
                    },
                  }
                : {
                    y: "100%",
                    opacity: 0,
                    transition: { duration: 0.3 },
                  }
            }
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.h1>

    {/* IMAGE */}
    <motion.div
      className="h-full w-full relative"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        className="h-full w-full object-cover"
        src={project.img}
        alt={project.title}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>

    {/* TITLE & SUBTITLE */}
    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center">
      <AnimatedText
        text={project.title}
        className="text-[1.7rem] font-medium text-white"
        delayFactor={0.05}
      />
      <AnimatedText
        text={project.subtitle}
        className="text-[1.1rem] text-white/80"
        delayFactor={0.04}
        initialDelay={0.15}
      />
    </div>

    {/* BUTTON */}
    <motion.div
      className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.8 }}
    >
      <span className="text-sm font-medium">View Project</span>
    </motion.div>
  </motion.div>
);

const AnimatedText = ({ text, className, delayFactor, initialDelay = 0 }) => (
  <div className={`overflow-hidden w-full text-center ${className.includes("text-[") ? "" : "h-6"}`}>
    <div className={`flex justify-center ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="block overflow-hidden"
          initial={{ y: "100%" }}
          whileHover={{ y: "0%" }}
          transition={{
            duration: className.includes("text-[") ? 0.8 : 0.7,
            ease: [0.16, 0.9, 0.3, 1.1],
            delay: initialDelay + delayFactor * i,
          }}
          style={{ lineHeight: "1.1" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  </div>
);

const Card6 = () => {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const projects = [
    {
      title: "CARD6 PROJECT B",
      subtitle: "Second project in Card6",
      img: "https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-663x551.jpg",
      bgText: "OFFICEVIBE",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#F1F1F1] py-2 relative min-h-screen w-full overflow-hidden"
    >
<div className="flex justify-between px-4">
  <header className="text-[1vw]  uppercase text-[#212121] font-normal border-b border-gray-400 px-9 pb-7">
        <h1 className="mt-13">
          <span className="h-2 w-2 inline-block bg-black rounded-full"></span>{" "}
         Office vibe
        </h1>
   
      </header>
</div>

      <main className="min-h-[90vh] w-full p-6 relative flex flex-col gap-6">
        <div className="w-full flex justify-start">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              widthClass="w-[49%]"
            />
          ))}
        </div>
      </main>
       <div className="flex items-center justify-between mt-4  px-7">
        <div className="uppercase flex gap-3 ">
          <button className="border-1 hover:bg-black hover:text-white  trnasistion ease-in duration-100  border-zinc-400 px-4 py-1 rounded-full ">
            Brand identity{" "}
          </button>
          <button className="border-1  hover:bg-black hover:text-white  trnasistion ease-in duration-100 border-zinc-400 px-4 py-1 rounded-full">
            Rrand research
          </button>
          <button className="border-1  hover:bg-black hover:text-white  trnasistion ease-in duration-100 border-zinc-400   px-4 py-1 rounded-full">
            invester desk
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Card6;
