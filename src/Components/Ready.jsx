import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const IRIS_RADIUS = 48;
const PUPIL_RADIUS = 12;
const MAX_PUPIL_MOVE = IRIS_RADIUS - PUPIL_RADIUS - 4;
const IRIS_MOVE_RANGE = 6;

const EyesFollow = () => {
  const containerRef = useRef(null);
  const leftIrisRef = useRef(null);
  const rightIrisRef = useRef(null);

  const leftPupilX = useMotionValue(0);
  const leftPupilY = useMotionValue(0);
  const rightPupilX = useMotionValue(0);
  const rightPupilY = useMotionValue(0);

  const leftIrisX = useMotionValue(0);
  const leftIrisY = useMotionValue(0);
  const rightIrisX = useMotionValue(0);
  const rightIrisY = useMotionValue(0);

  const leftPupilSpringX = useSpring(leftPupilX, {
    stiffness: 600,
    damping: 30,
    mass: 0.3,
  });
  const leftPupilSpringY = useSpring(leftPupilY, {
    stiffness: 600,
    damping: 30,
    mass: 0.3,
  });
  const rightPupilSpringX = useSpring(rightPupilX, {
    stiffness: 550,
    damping: 28,
    mass: 0.3,
  });
  const rightPupilSpringY = useSpring(rightPupilY, {
    stiffness: 550,
    damping: 28,
    mass: 0.3,
  });

  const leftIrisSpringX = useSpring(leftIrisX, {
    stiffness: 200,
    damping: 20,
    mass: 0.8,
  });
  const leftIrisSpringY = useSpring(leftIrisY, {
    stiffness: 200,
    damping: 20,
    mass: 0.8,
  });
  const rightIrisSpringX = useSpring(rightIrisX, {
    stiffness: 180,
    damping: 18,
    mass: 0.8,
  });
  const rightIrisSpringY = useSpring(rightIrisY, {
    stiffness: 180,
    damping: 18,
    mass: 0.8,
  });

  const handleMouseMove = (e) => {
    if (!containerRef.current || !leftIrisRef.current || !rightIrisRef.current)
      return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    const movePupil = (irisRef, pupilX, pupilY, irisX, irisY) => {
      const irisRect = irisRef.current.getBoundingClientRect();
      const irisCenterX = irisRect.left + irisRect.width / 2;
      const irisCenterY = irisRect.top + irisRect.height / 2;
      let dx = e.clientX - irisCenterX;
      let dy = e.clientY - irisCenterY;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > MAX_PUPIL_MOVE) {
        dx = (dx / dist) * MAX_PUPIL_MOVE;
        dy = (dy / dist) * MAX_PUPIL_MOVE;
      }

      pupilX.set(dx);
      pupilY.set(dy);
      irisX.set(mouseX * IRIS_MOVE_RANGE);
      irisY.set(mouseY * IRIS_MOVE_RANGE * 0.7);
    };

    movePupil(leftIrisRef, leftPupilX, leftPupilY, leftIrisX, leftIrisY);
    movePupil(rightIrisRef, rightPupilX, rightPupilY, rightIrisX, rightIrisY);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen  font-[Arial] tracking-tighter bg-[#CDEA68] overflow-hidden"
    >
      {/* Eyes */}
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 flex gap-10 z-10">
        {/* Eye */}
        {[leftIrisRef, rightIrisRef].map((ref, index) => (
          <div
            key={index}
            className="h-44 w-44 mt-80 bg-white rounded-full flex items-center justify-center"
          >
            <motion.div
              ref={ref}
              className="h-24 w-24 bg-black rounded-full relative flex items-center justify-center"
              style={{
                x: index === 0 ? leftIrisSpringX : rightIrisSpringX,
                y: index === 0 ? leftIrisSpringY : rightIrisSpringY,
              }}
            >
              <motion.div
                className="h-4 w-4 bg-white rounded-full absolute"
                style={{
                  x: index === 0 ? leftPupilSpringX : rightPupilSpringX,
                  y: index === 0 ? leftPupilSpringY : rightPupilSpringY,
                  left: "50%",
                  top: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="min-h-screen py-20 w-full rounded-tl-3xl rounded-tr-3xl flex flex-col items-center justify-center bg-[#CDEA68] mt-[30vh]">
        <div className="text-[14vw] uppercase  font-stretch-50% font-bold flex flex-col items-center tracking-tighter justify-center leading-[10.9vw]">
          <h1>Ready</h1>
          <h1>To Start</h1>
          <h1>The Project?</h1>
        </div>
        <div className="mt-12 flex uppercase flex-col gap-3 justify-center items-center">
          <button className="px-12 py-5 uppercase bg-black text-white rounded-full">
            Start the project
          </button>
          <h1 className="text-2xl">Or</h1>
          <button className="px-12 py-5 uppercase border border-black bg-transparent text-black rounded-full">
            Hello@ Ochi.Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default EyesFollow;
