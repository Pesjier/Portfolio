import React, { forwardRef, useImperativeHandle, 
  useState, useEffect, useRef, useLayoutEffect } from 'react'

import gsap from 'gsap';

//Send in objects with start and end transforms
//{{hidden: gsap.from, shown: gsap.to}, {gsap.from, gsap.to}}
const RevealEffect = forwardRef(({children, childEffects, onMouseFirst}, ref) => {
  const overlayRef = useRef(null);


  useEffect(() => {
    if(childEffects != null)
    {
      //Set start values
      const elements = overlayRef.current.children;

      childEffects.forEach((effect, i) => {
        if (elements.length > i) {
          gsap.set(elements[i], effect.hidden);
        }
      });
    }
}, []);

  useImperativeHandle(ref, () => ({
        show() 
        { 
          if(childEffects == null)
            return;
          const elements = overlayRef.current.children;

          childEffects.forEach((effect, i) => {
          if (elements.length > i) 
          {
            gsap.killTweensOf(elements[i]);
            gsap.to(elements[i], effect.shown);
          }
          });
        },
        hide() 
        {
          if(childEffects == null)
            return;
          const elements = overlayRef.current.children;

          childEffects.forEach((effect, i) => {
          if (elements.length > i) 
          {
            gsap.killTweensOf(elements[i]);
            gsap.to(elements[i], effect.hidden);
          }
          });
        },
        width()
        {
          if (overlayRef.current) {
            const { width, height } = overlayRef.current.getBoundingClientRect();

            return width;
          }
          return 0;
        },
        height()
        {
          if (overlayRef.current) {
            const { width, height } = overlayRef.current.getBoundingClientRect();

            return height;
          }
          return 0;
        }
    }));
  
  return (
    <div ref={overlayRef} className="absolute w-full h-full" onMouseEnter={(e) => {
      if(onMouseFirst)
      {
        onMouseFirst(e);
      }
    }}
    onMouseLeave={(e) => {
      if(onMouseFirst)
      {
        onMouseFirst(e);
      }
    }}
    onMouseMove={(e) => {
      if(onMouseFirst)
      {
        onMouseFirst(e);
      }
    }}>
      {children}
    </div>

      /* We want to take a targetRef that is the parent transform
      Then we should pass in a start transform and an 
      end transform. Gsap animation will go from start to end on
      calling show() and will reverse when calling hide()
      We should be able to have a collection of these
      that is triggered by the same show() and hide() */
  )
});

export default RevealEffect
