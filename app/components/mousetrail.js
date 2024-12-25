import React, { useState, useEffect } from "react";

const MouseTrail = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const timestamp = Date.now();
      setDots((prevDots) => [
        ...prevDots,
        { x: e.clientX, y: e.clientY, id: timestamp },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const cleanupDots = setInterval(() => {
      setDots((prevDots) =>
        prevDots.filter((dot) => Date.now() - dot.id < 500)
      );
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(cleanupDots);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          style={{
            position: "absolute",
            top: `${dot.y}px`,
            left: `${dot.x}px`,
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            background: "radial-gradient(circle, rgba(128,0,255,0.8) 0%, transparent 70%)",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            opacity: (500 - (Date.now() - dot.id)) / 500,
            transition: "opacity 0.1s linear",
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;