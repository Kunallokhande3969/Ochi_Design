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
    mass: 0.3
  });
  const leftPupilSpringY = useSpring(leftPupilY, {
    stiffness: 600,
    damping: 30,
    mass: 0.3
  });
  const rightPupilSpringX = useSpring(rightPupilX, {
    stiffness: 550,
    damping: 28,
    mass: 0.3
  });
  const rightPupilSpringY = useSpring(rightPupilY, {
    stiffness: 550,
    damping: 28,
    mass: 0.3
  });

  const leftIrisSpringX = useSpring(leftIrisX, {
    stiffness: 200,
    damping: 20,
    mass: 0.8
  });
  const leftIrisSpringY = useSpring(leftIrisY, {
    stiffness: 200,
    damping: 20,
    mass: 0.8
  });
  const rightIrisSpringX = useSpring(rightIrisX, {
    stiffness: 180,
    damping: 18,
    mass: 0.8
  });
  const rightIrisSpringY = useSpring(rightIrisY, {
    stiffness: 180,
    damping: 18,
    mass: 0.8
  });

  const handleMouseMove = (e) => {
    if (!containerRef.current || !leftIrisRef.current || !rightIrisRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const containerCenterX = rect.left + rect.width / 2;
    const containerCenterY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - containerCenterX) / (rect.width / 2);
    const mouseY = (e.clientY - containerCenterY) / (rect.height / 2);

    const leftIrisRect = leftIrisRef.current.getBoundingClientRect();
    const leftIrisCenterX = leftIrisRect.left + leftIrisRect.width / 2;
    const leftIrisCenterY = leftIrisRect.top + leftIrisRect.height / 2;

    let dx = e.clientX - leftIrisCenterX;
    let dy = e.clientY - leftIrisCenterY;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > MAX_PUPIL_MOVE) {
      dx = (dx / dist) * MAX_PUPIL_MOVE;
      dy = (dy / dist) * MAX_PUPIL_MOVE;
    }
    leftPupilX.set(dx);
    leftPupilY.set(dy);
    leftIrisX.set(mouseX * IRIS_MOVE_RANGE);
    leftIrisY.set(mouseY * IRIS_MOVE_RANGE * 0.7);

    const rightIrisRect = rightIrisRef.current.getBoundingClientRect();
    const rightIrisCenterX = rightIrisRect.left + rightIrisRect.width / 2;
    const rightIrisCenterY = rightIrisRect.top + rightIrisRect.height / 2;

    dx = e.clientX - rightIrisCenterX;
    dy = e.clientY - rightIrisCenterY;
    dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > MAX_PUPIL_MOVE) {
      dx = (dx / dist) * MAX_PUPIL_MOVE;
      dy = (dy / dist) * MAX_PUPIL_MOVE;
    }
    rightPupilX.set(dx);
    rightPupilY.set(dy);
    rightIrisX.set(mouseX * IRIS_MOVE_RANGE);
    rightIrisY.set(mouseY * IRIS_MOVE_RANGE * 0.7);
  };

  return (
    <div
      data-scroll
      data-scroll-speed="-.9"
      className="w-full h-screen bg-[#F1F1F1] relative overflow-hidden "
      ref={containerRef}
      onMouseMove={handleMouseMove}
     
    >
      
      <img
        src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg"
        alt="Background"
        className="w-full h-full z-[-2px] object-cover absolute inset-0"
      /> 

      {/* Eyes Container */}
      <div className="h-[20vw] w-[45vw] flex gap-4 justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Left Eye */}
        <div className="h-45 w-45 flex items-center justify-center bg-white rounded-full">
          <motion.div
            className="h-30 w-30 bg-black rounded-full flex items-center justify-center relative overflow-hidden"
            ref={leftIrisRef}
            style={{ x: leftIrisSpringX, y: leftIrisSpringY }}
          >
            <motion.div
              className="h-4 w-4 bg-white rounded-full absolute"
              style={{
                x: leftPupilSpringX,
                y: leftPupilSpringY,
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
          </motion.div>
        </div>

        {/* Right Eye */}
        <div className="h-45 w-45 flex items-center justify-center bg-white rounded-full">
          <motion.div
            className="h-30 w-30 bg-black rounded-full flex items-center justify-center relative overflow-hidden"
            ref={rightIrisRef}
            style={{ x: rightIrisSpringX, y: rightIrisSpringY }}
          >
            <motion.div
              className="h-4 w-4 bg-white rounded-full absolute"
              style={{
                x: rightPupilSpringX,
                y: rightPupilSpringY,
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EyesFollow;
