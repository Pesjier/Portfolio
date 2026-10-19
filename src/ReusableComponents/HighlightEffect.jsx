import React, { useEffect, useMemo, useState, useRef } from "react";

const HighlightEffect = ({particleAmount = 20 , className}) => {
  const particles = useMemo(
    () =>
      Array.from({ length: particleAmount }, (_, i) => ({
        id: `particle-${i}`,
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 5 + 2,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
      })),
    [particleAmount]
  );

  return (
    <div className={`absolute w-full h-full ${className}`}>
      {particles.map((particle) => (
        <span
          key={particle.id}
          style={{
            position: "absolute",

            left: `${particle.x * 100}%`,
            top: `${particle.y * 100}%`,

            transform: "translate(-50%, -50%)",

          }}
        >
          <span
            style={{
              display: "block",

              width: `${particle.size}px`,
              height: `${particle.size}px`,

              borderRadius: "50%",

              background:
                "radial-gradient(circle, white, rgba(255,255,255,.5), transparent)",

              boxShadow:
                "0 0 10px rgba(255,255,255,.8)",

              opacity: 0,

              animationName: "sparkle",
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
        </span>
      ))}
    </div>
  );
};

export default HighlightEffect;