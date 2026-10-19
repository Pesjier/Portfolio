import React, { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

const FadeInText = forwardRef(({ fadeText, className = "" }, ref) => {
  const text = useRef(null);
  const animation = useRef(null);

  useImperativeHandle(ref, () => ({
    play() {
      animation.current?.play();
    },

    reverse() {
      animation.current?.reverse();
    },

    reset() {
      animation.current?.progress(0).pause();
    },
  }));

  const setRef = (element) => {
    text.current = element;

    if (element && !animation.current) {
      animation.current = gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          paused: true,
          ease: "power3.out",
        }
      );
    }
  };

  return (
    <div ref={setRef} className={className}>
      {fadeText}
    </div>
  );
});

export default FadeInText;