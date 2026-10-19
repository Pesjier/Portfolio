import React, { useLayoutEffect, forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

import { createPortal } from "react-dom";

const Tooltip = forwardRef(({children, className = "" }, ref) => {
    const box = useRef(null);
  
    useLayoutEffect(() => {
    gsap.set(box.current, {
        opacity: 0,
        scale: 0.95,
    });
    }, []);

  const clampTooltipPosition = (x, y) => {
    const el = box.current;
    if (!el) return { x, y };

    const rect = el.getBoundingClientRect();

    const padding = 3; // distance from screen edge

    let newX = x;
    let newY = y;

    // Because you use xPercent:-50 and yPercent:-100:
    // x,y represent the bottom-center anchor point.
    const halfWidth = rect.width / 2;
    const height = rect.height;

    // Left edge
    if (x - halfWidth < padding) {
      newX = halfWidth + padding;
    }

    // Right edge
    if (x + halfWidth > window.innerWidth - padding) {
      newX = window.innerWidth - halfWidth - padding;
    }

    // Top edge (tooltip grows upward)
    if (y - height < padding) {
      newY = height + padding;
    }

    // Bottom edge
    if (y > window.innerHeight - padding) {
      newY = window.innerHeight - padding;
    }

    return { x: newX, y: newY };
  };

    useImperativeHandle(ref, () => ({
    show(x, y) {
      const pos = clampTooltipPosition(x, y);
        gsap.set(box.current, {
            x:pos.x,
            y:pos.y,
            xPercent:-50,
            yPercent: -100,
            opacity: 0,
            scale: 0.95,
        });
      gsap.to(box.current, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    },

    hide() {
      gsap.to(box.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
      });
    },

    move(x, y) {
      const pos = clampTooltipPosition(x, y);
      gsap.to(box.current, {
        x: pos.x,
        y: pos.y,
        xPercent:-50,
        yPercent: -100,
        duration: 0.3,
        ease: "power3.out",
      });
    },
  }));

    return createPortal(
    <div ref={box} className={`fixed top-0 left-0 pointer-events-none z-[60] ${className}`}>
      <div className="border-hsla bg-slate-600 rounded-md px-2 py-2">
        {children}
      </div>
    </div>,
    document.body
  )
})

export default Tooltip
