import React, { useEffect, useRef } from "react";

const WavingFlag = ({ children, className = "" }) => {
  const itemRef = useRef();

useEffect(() => {
  const random = Math.random();
  const animate = (time) => {
    if (itemRef.current != null)
    {
      const t = (time / 1000) + random;

      itemRef.current.style.transform = `
        perspective(700px)
        rotateY(${Math.sin(t * 6) * 10}deg)`;

      requestAnimationFrame(animate);
    }
  };

  const id = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(id);
}, []);

  return (
    <div ref={itemRef}
      className={className}>
      {children}
    </div>
  );
};

export default WavingFlag;